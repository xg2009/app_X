self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app_X').then((cache) => cache.addAll([
      '/app_XG/',
      '/app_XG/index.html',
      '/app_XG/index.js',
      '/app_XG/style.css',
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
