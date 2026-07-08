# FİYATLANDIRMA, TESLİMAT VE YAYINA ÇIKIŞ PLANI
## Kalbine Sor — test-öncelikli huni

**Güncelleme (8 Temmuz 2026):** Ürün kurgusu senin yönlendirmenle revize edildi: **araştırma temelli testler ön kapı**, AI koç premium katman.

---

## 1. GELİR HUNİSİ

```
Instagram reklamı ("Seviyor mu? 24 soruda öğren")
   ↓  ücretsiz, kayıtsız
TEST (viral paylaşım geri döngüsü: "sonucumu paylaş")
   ↓  sonuç ekranında
DETAYLI RAPOR — 49 TL (dürtüsel alım eşiği altında)
   ↓  rapor içinde + sonuç ekranında
AI KOÇ — 149 TL paket / 249 TL/ay (yüksek marj, tekrar gelir)
```

**Neden bu kurgu doğru:**
- Reklam matematiği: CPA 150–300 TL iken 49 TL'lik ürün tek başına dönmez; ama test **ücretsiz** olduğu için tıklama→deneyim dönüşümü çok yüksek olur, para rapor+koç katmanından gelir (karma sepet).
- Test sonucu paylaşılabilir → organik trafik reklam maliyetini düşürür.
- "Bilimsel kaynak" konumlandırması hem güven bariyerini aşar hem Meta politikalarıyla dost (kişisel nitelik iması yok, ürün faydası var).

## 2. FİYATLAR (KDV dahil)

| Ürün | Fiyat | Maliyet | Not |
|---|---|---|---|
| Testler | 0 TL | ~0 | Müşteri kazanım aracı |
| Detaylı Sonuç Raporu (PDF) | 49 TL | ~0,5 TL | Şablon + kişinin cevaplarına göre üretim |
| Rapor 3'lü paket | 99 TL | ~1,5 TL | "Üç testi de çöz, üç rapor al" |
| AI Koç — 200 mesaj paketi | 149 TL | ~5–8 TL (API) | Shopier linkiyle satış |
| AI Koç — sınırsız aylık | 249 TL/ay | ~15–25 TL (API) | Faz 2'de iyzico Abonelik ile otomatik yenileme |

Birim ekonomi (Haiku modeliyle): koç sohbeti mesaj başı ~0,03–0,05 TL; 200 mesajlık pakette API maliyeti satış fiyatının ~%4'ü. Brüt marj her üründe %90+.

## 3. TESLİMAT / TEKNİK PLAN

| Bileşen | Durum | Yayın yeri |
|---|---|---|
| Landing page (`landing/`) | ✅ Hazır | Domain + statik hosting (Vercel/Netlify — ücretsiz başlar; gelir gelince Hetzner ~€6/ay) |
| Test uygulaması (`app/`) | ✅ 3 test canlı-hazır | Aynı hosting, `/test` yolunda |
| Koç motoru (`backend/`) | ✅ Kod hazır | Node 18+ sunucu; ANTHROPIC_API_KEY ister |
| Detaylı rapor üretimi | Faz 1.5 | Test cevapları + şablon → PDF; koç motoru altyapısını kullanır |
| Ödeme | Faz 1: Shopier linkleri | Satın alan kullanıcıya erişim kodu (ilk hafta manuel teslim edilebilir — günde 10-20 satışa kadar sürdürülebilir) |

**Yayına çıkış sırası (operasyon görevlerin işaretli):**
1. [SEN] kalbinesor.com satın al + Vercel/Netlify hesabı aç (ücretsiz)
2. [BEN] Siteyi deploy edilecek halde paketle, adım adım kurulum talimatı ver
3. [SEN] Shopier hesabı aç → 3 ürün oluştur (Rapor 49, Rapor 3'lü 99, Koç 149) → linkleri bana ver
4. [BEN] Linkleri siteye işle
5. [SEN] Instagram @kalbinesor + WhatsApp Business aç
6. [BEN] Aşama 3 paketi: 4 haftalık içerik takvimi + 5 reklam metni + hedefleme + 30 günlük ölçüm planı (onayınla başlar)
7. [SEN] Mali müşavirle görüş: şahıs şirketi zamanlaması + Genç Girişimci uygunluğun (yaş/SGK durumuna göre — rapor v2 §1.4)

## 4. YASAL YAPILACAKLAR (yayın öncesi zorunlu)
- [ ] Mesafeli Satış Sözleşmesi + Ön Bilgilendirme Formu (dijital içerik istisnası maddesiyle) — taslakları ben yazarım, mali müşavir/avukat kontrolü senin
- [ ] KVKK Aydınlatma Metni + Çerez Politikası — taslak benden
- [ ] Her test/rapor ekranında "eğlence ve öz-farkındalık amaçlıdır" ibaresi — ✅ kodda var
- [ ] Kriz yönlendirme (112/183/KADES) — ✅ kodda var
- [ ] Kendi siten üzerinden satış = ETBİS kaydı (ücretsiz; satış siteden başlayınca)

## 5. GERÇEKÇİ BEKLENTİ
İlk 30 gün hedefi kâr değil: kazanan test/reklam kreatifini bulmak, 1.000+ test çözümü, %3–5 rapor dönüşümü ve ilk koç aboneleri. Break-even gerçekçi olarak 2.–3. ay. Test kütüphanesi büyüdükçe (hedef: 6 ayda 100+ test) organik trafik payı artar ve reklam bağımlılığı düşer. Garanti yok; ama stok riski de sıfır — en kötü senaryoda kaybedilen yalnızca reklam test bütçesidir.
