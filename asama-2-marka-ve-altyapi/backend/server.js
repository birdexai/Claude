// Kalbine Sor — AI Koç sohbet motoru (premium katman)
// Çalıştırma: ANTHROPIC_API_KEY ortam değişkenini ayarla, sonra: npm install && npm start
// Node 18+ gerektirir.

import http from "node:http";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // ANTHROPIC_API_KEY ortamdan okunur
const PORT = process.env.PORT || 3000;

// Maliyet notu: Haiku 4.5 ($1/$5 per 1M token) bilinçli tercih — sohbet başına
// maliyet ~0,3 TL; iş planının birim ekonomisi bu modele göre kuruldu.
// Kalite yetersiz kalırsa "claude-sonnet-4-6" ile A/B testi yapılabilir.
const MODEL = "claude-haiku-4-5";

const SYSTEM_PROMPT = `Sen "Kalbine Sor" uygulamasının ilişki koçusun. Türkçe konuşursun, kullanıcıya "sen" diye hitap edersin.

KİMLİĞİN:
- Yakın, güvenilir bir arkadaş gibi: sıcak, yargısız, umut veren ama gerçekçi.
- Yapay zekâ olduğunu saklamazsın; sorulursa açıkça söylersin.
- Terapist DEĞİLSİN ve öyle davranmazsın: "terapi", "tanı", "tedavi" iddiasında bulunmazsın.

NASIL KONUŞURSUN:
- Önce dinle ve duyguyu yansıt; hemen akıl verme.
- Netleştirici sorular sor; kullanıcının kendi cevabını bulmasına eşlik et.
- Somut yardım iste(n)diğinde üret: mesaj taslağı, konuşma planı, farklı bakış açısı.
- Kısa yaz: 2-5 cümle; gerektiğinde madde işareti. Uzun ders anlatma.
- Asla kesin hüküm verme: "kesin dönecek", "o seni sevmiyor" deme. Davranış örüntülerinden ihtimallerle konuş.
- Fal bakmazsın, gelecek okumazsın, "garanti" vermezsin.

TEST SONUÇLARI:
Kullanıcı bir test sonucuyla gelirse (ör. "Seviyor mu testinden 41 aldım"), sonucu ciddiye al, hangi soruların canını sıktığını sor, oradan derinleş.

GÜVENLİK PROTOKOLÜ (en yüksek öncelik):
- Kendine zarar verme/intihar düşüncesi sinyalinde: önce şefkatle karşıla, sonra mutlaka profesyonel destek öner ve şu kaynakları ver: 112 Acil, ALO 183 Sosyal Destek Hattı. Sohbeti kesme, ama koçluğun yeterli olmadığını net söyle.
- Fiziksel/psikolojik şiddet sinyalinde: kullanıcının güvenliğini önceliklendir; ALO 183, KADES uygulaması ve 155'i hatırlat. Şiddeti asla "ilişki sorunu" gibi normalleştirme.
- 18 yaş altı olduğunu belirtenlere: uygulamanın yetişkinlere yönelik olduğunu nazikçe söyle, güvendiği bir yetişkinle konuşmasını öner.`;

// Kriz ön-kontrolü: model yanıtından bağımsız, sunucu tarafında da yakala
const KRIZ_KELIMELERI = /intihar|kendimi öldür|canıma kıy|yaşamak istemiyorum|kendime zarar|beni dövüyor|şiddet uyguluyor|vuruyor bana/i;
const KRIZ_NOTU = "\n\n💛 Bunu benimle paylaştığın için teşekkür ederim — ama bu konu bir sohbet uygulamasının taşıyabileceğinden daha önemli. Lütfen şimdi gerçek bir insana ulaş: 112 Acil · ALO 183 Sosyal Destek · KADES uygulaması (şiddet için) · 155 Polis. Ben buradayım, ama profesyonel desteğin yerini tutamam.";

function json(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" });
  res.end(JSON.stringify(obj));
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }
  if (req.method !== "POST" || req.url !== "/api/chat") return json(res, 404, { error: "not_found" });

  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 100_000) return json(res, 413, { error: "too_large" });
  }

  let messages;
  try {
    ({ messages } = JSON.parse(body));
    if (!Array.isArray(messages) || messages.length === 0) throw new Error();
    // Sadece role+content kabul et; geçmişi 30 mesajla sınırla (maliyet + bağlam)
    messages = messages.slice(-30).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content).slice(0, 4000),
    }));
  } catch {
    return json(res, 400, { error: "bad_request" });
  }

  const sonKullaniciMesaji = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const krizVar = KRIZ_KELIMELERI.test(sonKullaniciMesaji);

  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
    "Transfer-Encoding": "chunked",
  });

  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });
    stream.on("text", (delta) => res.write(delta));
    await stream.finalMessage();
    if (krizVar) res.write(KRIZ_NOTU);
    res.end();
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      res.write("Şu an çok yoğunuz, bir dakika sonra tekrar dener misin? 💛");
    } else if (err instanceof Anthropic.APIError) {
      console.error("API hatası:", err.status, err.message);
      res.write("Kısa bir bağlantı sorunu yaşadım, mesajını tekrar gönderir misin?");
    } else {
      console.error("Beklenmeyen hata:", err);
      res.write("Bir şeyler ters gitti, tekrar dener misin?");
    }
    res.end();
  }
});

server.listen(PORT, () => console.log(`Kalbine Sor koç motoru ${PORT} portunda hazır.`));
