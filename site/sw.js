// Kalbine Sor — service worker: çevrimdışı destek + hızlı açılış
const CACHE = "kalbinesor-v1";
const VARLIKLAR = ["/", "/index.html", "/test/", "/test/index.html", "/manifest.json", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(VARLIKLAR)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
// Ağ öncelikli, düşerse önbellek (testler her zaman güncel kalsın, çevrimdışında da çalışsın)
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const kopya = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, kopya));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("/test/")))
  );
});
