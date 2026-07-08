# SİTEYİ YAYINA ALMA — ADIM ADIM (operasyon)

Bu klasör (`site/`) yayına hazır statik sitedir:
- `index.html` → ana satış sayfası (kalbinesor.com)
- `test/index.html` → test uygulaması (kalbinesor.com/test)

## Yol A — Netlify (en kolay, ücretsiz, ~10 dakika)
1. netlify.com'da hesap aç (GitHub ile girilebilir)
2. "Add new site → Deploy manually" → bu `site/` klasörünü sürükle-bırak
3. Site yayında (xxx.netlify.app adresiyle) — test et
4. Domain bağlama: Site settings → Domain management → Add custom domain → kalbinesor.com
   → Netlify'ın verdiği DNS kayıtlarını domain aldığın firmanın panelinde tanımla
5. SSL otomatik gelir (birkaç dakika)

## Yol B — Vercel (alternatif, aynı kolaylıkta)
1. vercel.com → Add New Project → bu repoyu bağla (birdexai/Claude, `site/` klasörünü root seç)
2. Deploy → domain bağla (aynı DNS mantığı)

## Yayın sonrası kontrol listesi
- [ ] kalbinesor.com açılıyor, mobilde düzgün görünüyor
- [ ] "Ücretsiz Testi Çöz" → /test/ açılıyor, 3 test de baştan sona çalışıyor
- [ ] "Sonucumu Paylaş" telefonda paylaşım menüsünü açıyor

## Sonraki entegrasyonlar (hazır olunca bana bildir, kodu ben işlerim)
| Ne | Senden gereken | Benden gereken |
|---|---|---|
| Ödeme | Shopier ürün linkleri (3 adet) | Linkleri butonlara işlerim |
| Erken erişim formu | Formspree/Tally ücretsiz form adresi | `FORM_ENDPOINT_BURAYA` yerine yazarım |
| WhatsApp destek | Numara | Footer'daki `90XXXXXXXXXX` düzeltilir |
| Meta Pixel | Pixel ID (Business Manager'dan) | Pixel + test_tamamlandi olay kodunu eklerim |
| Detaylı rapor + AI koç | Anthropic API anahtarı + sunucu (Hafta 2'de yeterli) | backend zaten hazır; rapor üretimini eklerim |
| Yasal metinler | Müşavir/avukat onayı | Taslakları ben yazarım (iste yeter) |
