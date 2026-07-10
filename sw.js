const CACHE_NAME = 'disney-transit-v1';
const ASSETS = [
    './',
    'index.html',
    'index.css',
    'app.js',
    'manifest.json',
    'icon-192.png',
    'icon-512.png'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching App Assets...');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event (clean up old caches)
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('Removing old cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Intercept Fetch request and serve from cache if offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse; // Return cache asset
                }
                return fetch(e.request); // Fallback to network
            })
    );
});
