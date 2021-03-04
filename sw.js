self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app_XG').then((cache) => cache.addAll([
      '/app_XG/',
      '/app_XG/index.html',
      '/app_XG/index.js',
      '/app_XG/css/style.css',
      '/app_X/fonts/graduate.ttf',
      '/app_X/icon/icona-32.png',
		  '/app_X/icon/icona-128.png',
		  '/app_X/icon/icona-168.png',
		  '/app_X/icon/icona-192.png',
		  '/app_X/icon/icona-256.png',
		  '/app_X/icon/icona-512.png',
      '/app_XG/img/img1.jpg',
      '/app_XG/img/img2.jpg',
      '/app_XG/cont/pag_02.html',
      
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
