/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3b8bd6daadaf050ebbce442ecd57c22f"
  },
  {
    "url": "about/index.html",
    "revision": "af8af1af099085f6688b8962e03efba5"
  },
  {
    "url": "assets/css/0.styles.98a134e8.css",
    "revision": "87a5dee485ffc5ba7e6908895d56f308"
  },
  {
    "url": "assets/img/icon-192x192.7732d41c.png",
    "revision": "7732d41cb0720c77f2f0d503486ec1ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6950337f.js",
    "revision": "5af4a6f229036eda23f4dc2f6d45fb2d"
  },
  {
    "url": "assets/js/2.9ba2f53d.js",
    "revision": "1db10ece0c9947d83d5e14c75cc84692"
  },
  {
    "url": "assets/js/3.331a149d.js",
    "revision": "c580976d6ef5a0051fb679eef831f75e"
  },
  {
    "url": "assets/js/4.f5192db4.js",
    "revision": "cdb00f44854e3302b212e9952ec09491"
  },
  {
    "url": "assets/js/5.556cbecf.js",
    "revision": "018c78f4042f96a2be61e0f1ea189c70"
  },
  {
    "url": "assets/js/6.a30bfbd4.js",
    "revision": "73a79be1bcd67c9aa614f49a5f941423"
  },
  {
    "url": "assets/js/7.11c627e0.js",
    "revision": "53586fbbdefbb1f73950278970f0c91e"
  },
  {
    "url": "assets/js/8.22a1dc48.js",
    "revision": "fdc1364173ad8af3433eb475ef3fb08b"
  },
  {
    "url": "assets/js/9.9c0d48a1.js",
    "revision": "437dc4d8c2a8b5505dca2d0ede797ce4"
  },
  {
    "url": "assets/js/app.3e57a736.js",
    "revision": "7fb48f4aa039fe08caf3f34f17e1a7c6"
  },
  {
    "url": "icon-192x192.png",
    "revision": "7732d41cb0720c77f2f0d503486ec1ab"
  },
  {
    "url": "icon-256x256.png",
    "revision": "4c076a6f28fd611c9cacf4eeffbc6da1"
  },
  {
    "url": "icon-384x384.png",
    "revision": "caf8a16e4b7852fb285b8fac3c34ff87"
  },
  {
    "url": "icon-512x512.png",
    "revision": "0d9ba5cb8cae1c0fb02895b6b02958eb"
  },
  {
    "url": "index.html",
    "revision": "ebf2674725cbf7b7426cec91ab0ab439"
  },
  {
    "url": "蜡笔小新.jpeg",
    "revision": "479604178670e1f5c5c9c0bf07288579"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
