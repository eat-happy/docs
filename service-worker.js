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
    "revision": "039c0d8297130bc3be0786b37815317d"
  },
  {
    "url": "about/index.html",
    "revision": "9cd423ffbe0f4a7da90aa4626e5a4ca8"
  },
  {
    "url": "assets/css/0.styles.60fe18b8.css",
    "revision": "819468d781b850be302d16d9948b4835"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cccba81b.js",
    "revision": "238b1b338763eac0f27edcc342fa265f"
  },
  {
    "url": "assets/js/2.60c071e5.js",
    "revision": "29db0d5debe32e7daa208bdc524872c5"
  },
  {
    "url": "assets/js/3.d3582936.js",
    "revision": "4dc2cc0b60d53eb9b0370773284de4c7"
  },
  {
    "url": "assets/js/4.cb0ac3a0.js",
    "revision": "69135953a558f66590faac7259888bc0"
  },
  {
    "url": "assets/js/5.9ef6899b.js",
    "revision": "4441ff4f5e8b7582019ff66388e65200"
  },
  {
    "url": "assets/js/6.1438d0b6.js",
    "revision": "8f3370a8211a1dc10d434bf44b54c433"
  },
  {
    "url": "assets/js/7.df19bcf3.js",
    "revision": "0c5d1eaa054e2c9435607a5a69ef2102"
  },
  {
    "url": "assets/js/8.e8052382.js",
    "revision": "4be527f7fd93f1845c98f22815871c02"
  },
  {
    "url": "assets/js/9.e01d4f42.js",
    "revision": "71904c69628799b5e33504ee27895300"
  },
  {
    "url": "assets/js/app.211bd989.js",
    "revision": "0e9a9f2d23aed92d92f00105b9c37376"
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
    "revision": "7b25ff36d6468f8d6f4b95a123f65403"
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
