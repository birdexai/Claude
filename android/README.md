# Kalbine Sor — Android Uygulaması

Testleri gömülü taşıyan, internetsiz de çalışan WebView tabanlı Android uygulaması.

## APK'yı indirme (derleme otomatik)
1. GitHub'da depoya gir → **Actions** sekmesi → "Android APK Derle" akışı
2. En son yeşil (başarılı) çalıştırmayı aç → sayfanın altında **Artifacts** → `kalbinesor-apk` → indir
3. İndirilen zip'in içindeki `app-debug.apk`'yı telefonuna at, dokun, "bilinmeyen kaynaklara izin ver" de, kur.

Not: Bu debug imzalı APK'dır — kendi telefonunda test için. Play Store'a çıkışta (Faz 2)
release imzası + mağaza hesabıyla paketlenir; testler siteyle aynı kaynaktan güncellenir.

## Yerelde derlemek istersen
Android Studio ile `android/` klasörünü aç → Run. Ya da: `cd android && ./gradlew assembleDebug`
