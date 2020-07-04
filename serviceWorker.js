const staticQuoteGen = 'quote-gen-site-v1';
const assets = [
  '/',
  '/index.html',
  '/app.js',
  '/css/main.css',
  '/img/shot.png',
  '/img/favicon-32x32.png',
  '/img/android-chrome-192x192.png',
  '/img/android-chrome-256x256.png',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticQuoteGen).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
