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

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "0.33edbed19f3318a776a0.chunk.js",
    revision: "7c93811b68c5ccd5a1bb24b9ba728e0d"
  },
  {
    url: "1.fb83893a46585f2fc534.chunk.js",
    revision: "dcb102964cfde61560526ff47446a4b2"
  },
  {
    url: "2.d12fc77774c744dc5316.chunk.js",
    revision: "6db5e3606e44f415cfe58ac3ce5b424c"
  },
  {
    url: "3.19cfa9c876ed9f9a0bc3.chunk.js",
    revision: "31f236bc0a53e8c862eb7bbf56cc96ef"
  },
  {
    url: "4.b961a8ef1f92205fa34b.chunk.js",
    revision: "7cf31d7a4c2818a7f2cf118f828447c4"
  },
  {
    url: "assets/data.json",
    revision: "ba5508d05a7cef388d6ffa9db73b91a7"
  },
  {
    url: "assets/humans.txt",
    revision: "ead1fb6f48cde7ca717a8a535eedcb1d"
  },
  {
    url: "assets/icon/android-icon-144x144.png",
    revision: "7a11cb68378262184377a4c77d202cda"
  },
  {
    url: "assets/icon/android-icon-192x192.png",
    revision: "0f882d624ae536b5b004ecb7dcb719cb"
  },
  {
    url: "assets/icon/android-icon-36x36.png",
    revision: "7226392317bdf678dc1483093c8cc895"
  },
  {
    url: "assets/icon/android-icon-48x48.png",
    revision: "24c6dab69274a9276cf03f5ba1f4fb0a"
  },
  {
    url: "assets/icon/android-icon-72x72.png",
    revision: "861b834deeefa3b3c4072567ccaa5fe8"
  },
  {
    url: "assets/icon/android-icon-96x96.png",
    revision: "bc0ee5518ccca23d55024f212d2b7746"
  },
  {
    url: "assets/icon/apple-icon-114x114.png",
    revision: "847154dd8bbdb2e90d516eab8db06123"
  },
  {
    url: "assets/icon/apple-icon-120x120.png",
    revision: "c64b0b11ed6a49003e59a5d309b47824"
  },
  {
    url: "assets/icon/apple-icon-144x144.png",
    revision: "7a11cb68378262184377a4c77d202cda"
  },
  {
    url: "assets/icon/apple-icon-152x152.png",
    revision: "67ab8b40a30e5b29de0cfab7fd792ef8"
  },
  {
    url: "assets/icon/apple-icon-180x180.png",
    revision: "11d3cacf48cc772a61fcf7eaa5ba0237"
  },
  {
    url: "assets/icon/apple-icon-57x57.png",
    revision: "a55c0ebdeb40e21d14a239995aab6f3e"
  },
  {
    url: "assets/icon/apple-icon-60x60.png",
    revision: "a52fffde474d89e2104a5871538ac53d"
  },
  {
    url: "assets/icon/apple-icon-72x72.png",
    revision: "861b834deeefa3b3c4072567ccaa5fe8"
  },
  {
    url: "assets/icon/apple-icon-76x76.png",
    revision: "e2b5310a67646c0922533c7d377a429c"
  },
  {
    url: "assets/icon/apple-icon-precomposed.png",
    revision: "24820ac96dfac68ec90211c7b56e49c6"
  },
  {
    url: "assets/icon/apple-icon.png",
    revision: "24820ac96dfac68ec90211c7b56e49c6"
  },
  {
    url: "assets/icon/browserconfig.xml",
    revision: "97775b1fd3b6e6c13fc719c2c7dd0ffe"
  },
  {
    url: "assets/icon/favicon-16x16.png",
    revision: "cd975b64fd102830af00a0b8d8755b9c"
  },
  {
    url: "assets/icon/favicon-32x32.png",
    revision: "17fc1cd596e4ac4769de7a2d3d7e0065"
  },
  {
    url: "assets/icon/favicon-96x96.png",
    revision: "bc0ee5518ccca23d55024f212d2b7746"
  },
  {
    url: "assets/icon/favicon.ico",
    revision: "3ff657c99464aaedc4102447c07871e9"
  },
  {
    url: "assets/icon/ms-icon-144x144.png",
    revision: "7a11cb68378262184377a4c77d202cda"
  },
  {
    url: "assets/icon/ms-icon-150x150.png",
    revision: "552cf0c0c5d2daf6e6a7b7205c6534e1"
  },
  {
    url: "assets/icon/ms-icon-310x310.png",
    revision: "856b129c3a9b7ba6daeaf188e66e8581"
  },
  {
    url: "assets/icon/ms-icon-70x70.png",
    revision: "38611f8085977b0f188d40f55caa5c1d"
  },
  {
    url: "assets/img/angular.png",
    revision: "df87d88859a406e13d04c842f81a3d5d"
  },
  {
    url: "assets/img/tipe.png",
    revision: "b0e42acb546cb05310997298e03439cf"
  },
  {
    url: "assets/manifest.json",
    revision: "2c26946f2b88704a6a0e1ff317a51a8e"
  },
  {
    url: "assets/robots.txt",
    revision: "7f6b06b8b0ea5858216e447fb96ea519"
  },
  {
    url: "assets/service-worker.js",
    revision: "deb2e620290839bb4fec8fa803cf681d"
  },
  {
    url: "humans.txt",
    revision: "ead1fb6f48cde7ca717a8a535eedcb1d"
  },
  {
    url: "index.html",
    revision: "af00ef2896bbde524f26805b376858f1"
  },
  {
    url: "inline.de719ac70299ce5f2b9c.bundle.js",
    revision: "7df9a87d8249d45ce3e4746bb3fdfd82"
  },
  {
    url: "main.82afb3286f3591e0f8b6a718e3fbcf65.css",
    revision: "87bab9d2acd4d39393565f9c2a3d7eb0"
  },
  {
    url: "main.9e886a802c3ef907005d.bundle.js",
    revision: "cdd7db7ab7216e34747428f525c377fc"
  },
  {
    url: "polyfills.1786b7a2585d460484b9.bundle.js",
    revision: "0b8058f56ca2cc5b24d15c50294b0436"
  },
  {
    url: "robots.txt",
    revision: "7f6b06b8b0ea5858216e447fb96ea519"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
