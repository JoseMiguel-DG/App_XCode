const CACHE_NAME = 'personal-pwa-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-256.png',
  './assets/icons/icon-384.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/splash/splash-640x1136.png',
  './assets/splash/splash-750x1334.png',
  './assets/splash/splash-828x1792.png',
  './assets/splash/splash-1125x2436.png',
  './assets/splash/splash-1170x2532.png',
  './assets/splash/splash-1242x2688.png',
  './assets/splash/splash-1536x2048.png',
  './assets/splash/splash-1668x2224.png',
  './assets/splash/splash-1668x2388.png',
  './assets/splash/splash-2048x2732.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const request = event.request;
  const isNavigation = request.mode === 'navigate';

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => {
          if (isNavigation) {
            return caches.match('./index.html');
          }
          return cached;
        });
    })
  );
});
