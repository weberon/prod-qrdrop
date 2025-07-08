const CACHE_NAME = 'my-pwa-v1.1.2'; // Update this for new versions

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/blue-qrdrop/', // Root path (adjust if your app is in a subdirectory)
        '/blue-qrdrop/index.html', // Path to index.html
        '/blue-qrdrop/static/js/main.4ceb20de.js', // Path to JS bundle
        '/blue-qrdrop/static/css/main.15654647.css', // Path to CSS file
        // Add other assets here
      ]);
    })
  );
});

// Listen for SKIP_WAITING message
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting(); // Activate the new Service Worker
  }
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});