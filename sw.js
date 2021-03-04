self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app_XG').then((cache) => cache.addAll([
      '/app_XG/',
      '/app_XG/index.html',
      '/app_XG/index.js',
      '/app_XG/style.css',
      '/app_X/icon/icona-32.png',
      '/app_X/icon/icona-128.png',
      '/app_X/icon/icona-168.png',
      '/app_X/icon/icona-192.png',
      '/app_X/icon/icona-256.png',
      '/app_X/icon/icona-512.png',
      '/app_XG/images/fox1.jpg',
      '/app_XG/images/fox2.jpg',
      '/app_XG/images/fox3.jpg',
      '/app_XG/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
