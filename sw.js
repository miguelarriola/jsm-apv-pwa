const nombreCache = 'apv-v7';
const archivos = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/apv.js',
];

self.addEventListener('install', (e) => {
  console.log('Insatalado el service worker');
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log('Cacheando...');
      cache.addAll(archivos);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activado');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  console.log('Fetch', e);

  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) =>
        cacheResponse ? cacheResponse : caches.match('error.html')
      )
  );
});

// self.addEventListener('fetch', (e) => {
//   // console.log('Fetch...', e);
//   // e.respondWith(
//   //   caches
//   //     .match(e.request)
//   //     .then((respuestaCache) => {
//   //       return respuestaCache;
//   //     })
//   //     .catch(() => caches.match('/error.html'))
//   // );

//   // e.respondWith(
//   //   (async function () {
//   //     const cachedResponse = await caches.match(e.request);
//   //     if (cachedResponse) {
//   //       return cachedResponse;
//   //     }
//   //     return fetch(e.request);
//   //   })() // <-- Importante estos paréntesis finales!!
//   // );
// });
