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
    "revision": "87f78544f55d67111366336980c8488d"
  },
  {
    "url": "about/index.html",
    "revision": "0a9ec5d0d85c91b5f59e22c5ff1f92ef"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.187e19f6.js",
    "revision": "325ce1adb79b033a4d938670a3d017c2"
  },
  {
    "url": "assets/js/2.89c90c12.js",
    "revision": "5f2a057a0cccf6937fb1a86ceea260af"
  },
  {
    "url": "assets/js/3.4022ac0d.js",
    "revision": "f7522dce5c28776626bdc0d61d78a20a"
  },
  {
    "url": "assets/js/4.d81ad18b.js",
    "revision": "249ad8896759aeb1edcfcf6cb471fc7d"
  },
  {
    "url": "assets/js/5.0bb1ae7a.js",
    "revision": "f52ff1782f545cba681e00fb2f7153c3"
  },
  {
    "url": "assets/js/6.17b36947.js",
    "revision": "5ae25d72de3fd51171fcdc1a629d2fff"
  },
  {
    "url": "assets/js/7.6ab70acc.js",
    "revision": "6951ebaa9412cf05ec14b79a626f2c15"
  },
  {
    "url": "assets/js/8.c88edfd8.js",
    "revision": "3d918ca9c384d288ef40b14b63d1edea"
  },
  {
    "url": "assets/js/9.8d384ce9.js",
    "revision": "2bd317b956eb052794eaa0c43484a2cb"
  },
  {
    "url": "assets/js/app.10619b54.js",
    "revision": "839a9cb443e19c411213eb668c04d807"
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
    "revision": "3ee1e1c79348f86f22106582b2249690"
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
