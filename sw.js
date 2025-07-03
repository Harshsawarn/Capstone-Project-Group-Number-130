self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('attendance-v1').then((cache) =>
      cache.addAll(['/', '/index.html', '/guard.html', '/admin.html', '/style.css', '/app.js'])
    )
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
