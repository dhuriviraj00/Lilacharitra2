// Lilacharitra PWA service worker
const VERSION = 'v1';
const CORE = `lc-core-${VERSION}`;
const RUNTIME = `lc-runtime-${VERSION}`;
const PRECACHE = [
  './', 'index.html', 'manifest.webmanifest',
  'epub.html', 'epub.js', 'reader.js', 'zip.min.js', 'jquery.min.js', 'screenfull.min.js',
  'normalize.css', 'main.css', 'popup.css', 'Amhi.epub',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'main/index.html', 'main/themes/pershastra.min.css', 'main/themes/jquery.mobile.icons.min.css',
  'main/jquery.shorten.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CORE).then(c => Promise.all(PRECACHE.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => ![CORE, RUNTIME].includes(k)).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('googletagmanager') || url.hostname.includes('google-analytics')) return;
  if (req.headers.has('range')) return; // let the browser handle PDF range requests

  e.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    const network = fetch(req).then(res => {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(RUNTIME).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    });
    if (cached) { network.catch(() => {}); return cached; }   // cache-first, refresh in background
    try { return await network; }
    catch (err) {
      if (req.mode === 'navigate') return (await caches.match('index.html')) || Response.error();
      return Response.error();
    }
  })());
});
