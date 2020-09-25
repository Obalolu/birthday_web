'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0f4b3b8ef9e75504116a8bd951c00e34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "c7ea739796f77dea0edf2dcebe980a6b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "48b372a0cfa3df6ca942da22fafb0a6b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f788c2b5b45004d5e86b4869e086748a",
".git/logs/refs/heads/master": "ecb295ff94c8027331870f9a715138d8",
".git/logs/refs/remotes/origin/master": "564f77539fb92ca95893cda428655960",
".git/objects/02/9d390cfe522a18cebcf778264aec9f38818922": "f000803094f98a5a902db7fd9a07aa48",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/d9d62eabd83691f445b984b00fa1f3144273f4": "472e6d271e86ecc746ecdf2643ce17ee",
".git/objects/11/9c7e59f914ab2ff0e83a32ae3f4ecf16c71df0": "3593289705f55d172d231850d400b957",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1b/61bded663711e7ee12061aaa1a902e270ef594": "2580b18e35d56f55c4d0ab65e47c4695",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/15b1daa7e2a0d186639c6a89ccfa5d3661f3e2": "da3e26ca1b536fb5b5476b402c45bdeb",
".git/objects/2b/972bab8178dcf03190ef1fd2c15630c9d82834": "e8734a1a4b491a970a66816fe60df849",
".git/objects/2d/6db9bfd75e4b91cb27a5b395dcde2f544981bf": "585d8fc872672a827b2aa7b7b773b611",
".git/objects/3e/0078d382a7592eb882237bcd678be07f8f1cf1": "da34a0d9c9249e691d154e97a87273d1",
".git/objects/41/08f5bebda15269b614d96d1ea299b5dd67bc70": "213ebb2c53e6de75c0f22188e9a0407f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/cbc8eb97f524e69d60d407a3504651c2107f81": "119da3581662ee1361b975c32582ad2f",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/55/0b54d79f254d806ceef4e0f58abaa5e6958392": "512f306b41f77fbcddd748708fa10f4b",
".git/objects/56/66909030b44c1bf886d985ab2e69e4510dbf3d": "ef196281e271317e4866ae3b83dfdbf4",
".git/objects/60/dcc669ee840f524a417c1cc699721229e360b6": "de8a68956e83aa566618dae680050f03",
".git/objects/66/f29e7c3a59864ba20927d44f0ee68639440193": "4b0b52d9303ed349378dc685ecc2de09",
".git/objects/6a/73f53da2da2ae2490a39832e2633e858358f47": "e1ced33f13c7f785c8c191ade6219aea",
".git/objects/6f/efc615cc4865b0be7e0a55423c5d188981c3b7": "31fcd3efd5d2742f4046278fbff80c03",
".git/objects/70/29d1244e726c121b350078d86332e8e0c55896": "21ead95ec0ed06938cd7eecb85e73b58",
".git/objects/79/7562da248a114e2ce4794786185a5c48bbd149": "d7465c0098b8f3e67b34ae39a09d1dd2",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/580f35a2933e518d6e5b13f11aa8bc1e43e39f": "d4e700d6f02727d32f97b9b21c637b7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e51f23f2f1d49b4b91a4653918672cb8de9824": "790f53bd8fa0e2cef807ebc718c15cc0",
".git/objects/92/f225e2dca86950081b0f2cef7cd304025de70d": "77ab41f14b22050f13448a80342d3719",
".git/objects/a8/cc2a5639dc4fe5c76d34bdaf3b4aec294c1bb9": "97c6c4ee1e1b66e467eef6c3c81f19af",
".git/objects/ae/f5e6938e61c90a2ba16b4479992e778cfe0222": "6486a038df2de7bc51c5accac7df8039",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/645b5f40af884945323eca20073ee551b23aaa": "f31fd5bc8815c288b907034a137cb8e3",
".git/objects/bc/258ff104e14282d7d04490bd825b8d8bd19035": "4254ea171b64177d0b38b66f6996bd4a",
".git/objects/c6/009b18e0b25127f2dd63ae41a8f289d97588e9": "6c2870f5a294c16677ea6af94d43266b",
".git/objects/cc/4b382dd858c8ba37f389656cfa34dfe5d8f538": "83b5419d9cd41f129df812399d72183b",
".git/objects/d0/c454d989d857537e6cc806a4752922d7b0a83c": "1ca20761aafa1dffda2c209696211007",
".git/objects/d1/751c51d2cd653dc974aeded2eed167bd402f28": "6bde59f9d2f3b7efbd56b0e734317f8b",
".git/objects/d3/ef2c6f8f9b18a064fc993b856696d63d65e980": "ebb6c06d526ef3f81b740d82a744da7d",
".git/objects/d9/ce746af59fe6b3a8f71cfad98aed78e66557f4": "4ee382e4d32dc3872d1471f8db07112e",
".git/objects/e3/b0dc80b742bf9c2c96ae04cb32f2e49ffacade": "5adbfe3eaff659ca4d6200f41dc41f5d",
".git/objects/ea/2b62523eea9d63b059a878524fcfacb4cd4014": "036a53e187d4f29ae080bd493786cdc3",
".git/objects/ef/c5ca188e3384fcfb0a983cebfb7887bc6a6d79": "c7f4aeb52526976380299fe106604afe",
".git/objects/f6/0384cb39b70040bfe486147e5dcb1b8ca8a811": "e559b35839d19b55bccc9e74341614ab",
".git/objects/f8/7e461c4804c7e89ebf4906fef55c4b97bea65d": "2581d62ec7d586e4ed765af2800c7e8b",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/24c2a4a5f1973f2b27f4d4997795d222b155c3": "a8e13aaf067c15b34050900a26da773b",
".git/objects/fd/d76a364a5cecef810898f743cb565015ad2e83": "b3bf3609fc140e960794e34c9f92f13c",
".git/refs/heads/master": "6db79a9c3879afa73ea8205305a40f21",
".git/refs/remotes/origin/master": "6db79a9c3879afa73ea8205305a40f21",
"assets/AssetManifest.json": "bbf1c369023e2c3364f585e6b0fef620",
"assets/FontManifest.json": "237903bcba32ec74acbda43f7ebc558c",
"assets/fonts/JosefinSans-italic-VariableFont_wght.ttf": "fd0ed435ec08aae4c87867bf3068762d",
"assets/fonts/JosefinSans-VariableFont_wght.ttf": "324a513cb9c683dc30777bdbccf59995",
"assets/fonts/Limelight-Regular.ttf": "6ccb9eb89a48d3f3b6e8d3d0e5e207aa",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/dad-1.jpg": "98ee907fe4e100c87b63418b8c99736c",
"assets/images/dad-2.jpg": "a7b4eec230deea1bd10b709dbe8a1c08",
"assets/images/dad.jpg": "6f26bcad9dcb2cb73136afd7528b6c22",
"assets/NOTICES": "0b930084df669a5cf8169129110180af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ab7dcda46f36ef4186670d83f972e858",
"/": "ab7dcda46f36ef4186670d83f972e858",
"main.dart.js": "c0317f5df1ef3faed64d125b2635f8f5",
"manifest.json": "59b74b83e2f7b8174a32d56cf2d8ea54"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
