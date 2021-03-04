self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app_XG').then((cache) => cache.addAll([
      '/app_XG/',
      '/app_XG/index.html',
      '/app_XG/index.js',
      '/app_XG/style.css',
      '/app_XG/img/img1.jpg',
      
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
