if (!self.define) {
  let e,
    a = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (a[c]) return;
    let t = {};
    const o = (e) => s(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    a[c] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-07a7b4f2'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/Section.png', revision: 'b37b32946e0ec1eab46804fbda909f44' },
        { url: '/_next/static/Xx96K3RC3PeYcbTklJdS5/_buildManifest.js', revision: 'b1c351ec8f10d9d314a2be366a5a8f5e' },
        { url: '/_next/static/Xx96K3RC3PeYcbTklJdS5/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/0c428ae2-71b74d9421cb21a3.js', revision: '71b74d9421cb21a3' },
        { url: '/_next/static/chunks/166-79a112f43647c18f.js', revision: '79a112f43647c18f' },
        { url: '/_next/static/chunks/framework-5429a50ba5373c56.js', revision: '5429a50ba5373c56' },
        { url: '/_next/static/chunks/main-3d95fe5764bf3726.js', revision: '3d95fe5764bf3726' },
        { url: '/_next/static/chunks/pages/_app-76d6f6d3a36dfacd.js', revision: '76d6f6d3a36dfacd' },
        { url: '/_next/static/chunks/pages/_error-b6491f42fb2263bb.js', revision: 'b6491f42fb2263bb' },
        { url: '/_next/static/chunks/pages/index-9109ee7a2bcdcf6f.js', revision: '9109ee7a2bcdcf6f' },
        { url: '/_next/static/chunks/pages/login-a7f7d75abe39d5b5.js', revision: 'a7f7d75abe39d5b5' },
        { url: '/_next/static/chunks/pages/temporaryLayout-335da1b2f91a6fee.js', revision: '335da1b2f91a6fee' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-8fa1640cc84ba8fe.js', revision: '8fa1640cc84ba8fe' },
        { url: '/_next/static/css/588e070133424348.css', revision: '588e070133424348' },
        { url: '/_next/static/media/Section.6d291ef5.png', revision: 'b37b32946e0ec1eab46804fbda909f44' },
        { url: '/_next/static/media/logo-smp.806f2408.png', revision: 'a11a207a2f1ea1a3e395d54bc2639a1f' },
        { url: '/favicon.ico', revision: '134cb08c94caf7d1c5a40260a90c4a8b' },
        { url: '/favicon/android-chrome-192x192.png', revision: '23f5d9ca862a1101258171478ff11d03' },
        { url: '/favicon/apple-touch-icon.png', revision: '3f50e5f879a9c0f05741b52bfbbfdc73' },
        { url: '/favicon/browserconfig.xml', revision: '2a662d5a1a5f901e2212f917857f0b29' },
        { url: '/favicon/favicon-16x16.png', revision: '0333c94d49619bc431ad2bc011e709a2' },
        { url: '/favicon/favicon-32x32.png', revision: 'ade04d3e246a3b4294581a3977256fea' },
        { url: '/favicon/favicon.ico', revision: '134cb08c94caf7d1c5a40260a90c4a8b' },
        { url: '/favicon/manifest.json', revision: 'ab14b5052989561eee6a78d5df5e2464' },
        { url: '/favicon/mstile-150x150.png', revision: '8db46759f178c4519b3b9b94b5e18b24' },
        { url: '/favicon/safari-pinned-tab.svg', revision: 'c3ec0c805e00336716c93f182e143deb' },
        { url: '/favicon/site.webmanifest', revision: '10afb07643c60dd9c673deba8161f990' },
        { url: '/icon-192x192.png', revision: '1c4c08d4171ff1f7be690760422f3a71' },
        { url: '/icon-256x256.png', revision: '07cb8cc4e9f2007330855e2959395ddf' },
        { url: '/icon-384x384.png', revision: '9e5985decbea5cf9abf79978758ae3fc' },
        { url: '/icon-512x512.png', revision: '972a7efbcb0e6a5d3eb0aa2faa3a9b42' },
        { url: '/logo-smp.png', revision: 'a11a207a2f1ea1a3e395d54bc2639a1f' },
        { url: '/logo144x144.png', revision: '54b2a2319f1086c875e60029134578fc' },
        { url: '/logo512x512.png', revision: '3666381ac3524a767ccad6c7047b306e' },
        { url: '/screenshot-login.png', revision: '4123e86df3c0bd6c2241bf5f78a50af6' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: a, event: s, state: n }) =>
              a && 'opaqueredirect' === a.type ? new Response(a.body, { status: 200, statusText: 'OK', headers: a.headers }) : a
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
      }),
      'GET'
    );
});
