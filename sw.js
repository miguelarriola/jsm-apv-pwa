self.addEventListener('install', (e) => {
  console.log('Insatalado el service worker');
  console.log(e);
});

self.addEventListener('activate', (e) => {
  console.log('Service worker activado');
  console.log(e);
});

self.addEventListener('fetch', (e) => {
  console.log('Fetch', e);
});
