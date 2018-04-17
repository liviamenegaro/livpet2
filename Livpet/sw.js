self.addEventListener('install', function (event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then(function (response) {
      caches.open('pwabuilder-offline').then(function (cache) {
        console.log('[PWA Builder] Cached index page during Install' + response.url);
        return cache.addAll([
          '/livpet2/livpet/',
          '/livpet2/livpet/inicio.html',
          '/livpet2/livpet/registro.html',
          '/livpet2/livpet/escolha.html',
          '/livpet2/livpet/escolhaCat.html',
          '/livpet2/livpet/escolhaDog.html',
          '/livpet2/livpet/colaboradores.html',
          '/livpet2/livpet/interesse.html',
          '/livpet2/livpet/manifest.json',
          '/livpet2/livpet/escolha.js',
          '/livpet2/livpet/escolhaCat.js',
          '/livpet2/livpet/escolhaDog.js',
          '/livpet2/livpet/script.js',
          '/livpet2/livpet/offline.html',
          '/livpet2/livpet/img/colab1.jpg',
          '/livpet2/livpet/img/colab2.jpg',
          '/livpet2/livpet/img/colab3.jpg',
          '/livpet2/livpet/img/colab4.jpg',
          '/livpet2/livpet/img/gato.jpg',
          '/livpet2/livpet/img/trovao.jpg',
          '/livpet2/livpet/bootstrap/css/bootstrap.min.css',
        ]);
      });
    })
  );
});


//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function (event) {
  var updateCache = function (request) {
    return caches.open('pwabuilder-offline').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[PWA Builder] add page to offline' + response.url)
        return cache.put(request, response);
      });
    });
  };

  event.waitUntil(updateCache(event.request));

  event.respondWith(
    fetch(event.request).catch(function (error) {
      console.log('[PWA Builder] Network request Failed. Serving content from cache: ' + error);

      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open('pwabuilder-offline').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report = !matching || matching.status == 404 ? Promise.reject('no-match') : matching;
          return report
        });
      });
    })
  );
})
