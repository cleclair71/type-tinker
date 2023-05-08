const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { StaleWhileRevalidate, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
    cacheName: 'pages',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxAgeSeconds: 60 * 60 * 24 * 7,
        }),
    ],
});

warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

registerRoute(({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    new StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }));

// Cache CodeMirror assets
// registerRoute(
//     /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/codemirror\/.*/,
//     new CacheFirst({
//         cacheName: 'codemirror',
//         plugins: [
//             new CacheableResponsePlugin({
//                 statuses: [0, 200],
//             }),
//             new ExpirationPlugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
//             }),
//         ],
//     }),
//     'GET'
// );

