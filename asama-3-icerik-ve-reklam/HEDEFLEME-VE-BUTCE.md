# AŞAMA 3.3 — META HEDEFLEME VE BÜTÇE PLANI
## Kalbine Sor — 30 günlük reklam yapısı

**Toplam reklam bütçesi varsayımı:** ~16.000–18.000 TL / 30 gün (30K sermaye senaryosu; 10K senaryosunda günlük tutarlar yarıya iner, süre 3 haftaya düşer).

---

## 1. KAMPANYA YAPISI (bütçeyi bölme — 2 kampanya + 1 retargeting)

| Kampanya | Amaç | Günlük bütçe | Pay |
|---|---|---|---|
| **K1 — Advantage+ Satış/Dönüşüm** | Dönüşüm: "test tamamlandı" olayı (ilk 2 hafta), sonra "rapor satın alma" | 250 TL | %45 |
| **K2 — Kreatif Test** | Aynı dönüşüm hedefi, manuel kitle, 3 kreatif yarışır | 200 TL | %35 |
| **K3 — Retargeting** (14. günden itibaren) | Test çözenlere rapor/koç | 100 TL | %20 |
| **Toplam** | | **~550 TL/gün** | |

Ajans kuralına uyum: bütçe 1-2 ana kampanyada toplu; 5 küçük sete bölünmez. K3 açılana dek K1/K2'ye 300/250 dağıt.

## 2. HEDEFLEME

**K1 (Advantage+):** Meta'nın otomasyonuna geniş alan bırak —
- Konum: Türkiye (tümü — büyükşehir kısıtlaması ilk ay YAPMA; algoritma bulsun)
- Yaş: 18–44 · Cinsiyet: **Kadın**
- İlgi alanı: BOŞ (Advantage+ kendisi bulur)

**K2 (manuel kitle — karşılaştırma için):**
- Konum: Türkiye · Yaş: 20–38 · Cinsiyet: Kadın
- İlgi alanları (VEYA ile): İlişkiler · Psikoloji · Kişisel gelişim · Astroloji · Aşk · Evlilik
- Yerleşim: yalnız Instagram Reels + Stories (feed kapalı — bu format orada yaşıyor)

**K3 (retargeting, 14. gün+):**
- Özel hedef kitle 1: "test_tamamlandi" olayını tetikleyenler (son 14 gün) → rapor reklamı
- Özel hedef kitle 2: rapor satın alanlar (son 30 gün) → koç paketi reklamı
- Özel hedef kitle 3 (bonus): Instagram hesabıyla etkileşenler (son 30 gün)

**Erkek kitle notu:** İlk ay kapalı. 2. ayda "partnerine hediye rapor" açısıyla küçük test edilebilir — ama tezin doğru: ödeyen kitle kadınlar.

## 3. PİKSEL VE OLAYLAR (kurulum şart — operasyon + ben)
- Meta Pixel siteye eklenir (kod benden, panel kurulumu senden)
- Özel olaylar: `test_basladi`, `test_tamamlandi` (ana optimizasyon olayı), `rapor_satin_alma` (Shopier teşekkür yönlendirmesiyle), `koc_satin_alma`
- İlk 2 hafta optimizasyon `test_tamamlandi`ya yapılır (bol veri → algoritma hızlı öğrenir); satın alma verisi haftada 25-30'u geçince `rapor_satin_alma`ya geçilir. Bu geçiş kritik — erken geçersen öğrenme fazı hiç bitmez.

## 4. ÖLÇEKLEME / DURDURMA KURALLARI
- Bütçe artışı: 3-4 günde bir en fazla %20 (öğrenme fazını sıfırlamamak için)
- Kreatif durdurma eşiği (3 güne ve ≥1.500 gösterime ulaşmışsa): CTR < %0,8 VEYA CPC > 8 TL → kapat
- Kreatif ölçekleme: CTR > %1,5 VE test tamamlama maliyeti < 25 TL → bütçe kaydır
- Hesap güvenliği: reklam hesabına 2FA; ödeme yöntemi limitli sanal kart (operasyon)

## 5. HEDEF METRİKLER (2026 TR kıyasları raporlardan)

| Metrik | Kabul edilebilir | İyi |
|---|---|---|
| CPM | < 90 TL | < 55 TL |
| CPC | < 6 TL | < 3,5 TL |
| CTR | > %0,9 | > %1,5 |
| Test tamamlama maliyeti | < 30 TL | < 15 TL |
| Test → rapor dönüşümü | > %2 | > %4 |
| Rapor CAC | < 400 TL karma* | < 200 TL |
| İlk ay ROAS | 0,3–0,6 (normal) | > 0,8 |

\* Rapor tek başına CAC'yi ödemez; sepet karması (rapor + koç + tekrar alım) ve organik/viral trafikle toplam tablo değerlendirilir. İlk ay ROAS'ın 1'in altında olması planın parçası — hedef, öğrenme + kitle inşası.
