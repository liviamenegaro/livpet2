self.addEventListener('install', function (event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then(function (response) {
      caches.open('pwabuilder-offline').then(function (cache) {
        console.log('[PWA Builder] Cached index page during Install' + response.url);
        return cache.addAll([
          '/livpet2/Livpet/',
          '/livpet2/Livpet/index.html',
          '/livpet2/Livpet/registro.html',
          '/livpet2/Livpet/escolha.html',
          '/livpet2/Livpet/escolhaCat.html',
          '/livpet2/Livpet/escolhaDog.html',
          '/livpet2/Livpet/escolhaDiversos.html',
          '/livpet2/Livpet/colaboradores.html',
          '/livpet2/Livpet/interesse.html',
          '/livpet2/Livpet/maisInfo.html',
          '/livpet2/Livpet/sobre.html',          
          '/livpet2/Livpet/manifest.json',
          '/livpet2/Livpet/style.css',
          '/livpet2/Livpet/script.js',
          '/livpet2/Livpet/offline.html',
          '/livpet2/Livpet/img/colab1.jpg',
          '/livpet2/Livpet/img/colab2.jpg',
          '/livpet2/Livpet/img/colab3.jpg',
          '/livpet2/Livpet/img/colab4.jpg',
          '/livpet2/Livpet/img/gato.jpg',
          '/livpet2/Livpet/img/trovao.jpg',
          '/livpet2/Livpet/img/passaro.jpg',
          '/livpet2/Livpet/bootstrap/css/bootstrap.min.css',
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
