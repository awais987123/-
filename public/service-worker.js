// Service Worker
//
// * Offline first
// * Clears old cache on version change
//
//-----------------------------------------


self.addEventListener('install', (event) => {
  console.log('Inside the install handler:', event);
});

self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
});

self.addEventListener(fetch, (event) => {
  console.log('Inside the fetch handler:', event);
});
// listen for fetch event (HTTP request)
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetching');

  // Offline backup
  // e.respondWith(
  //   // if the user is online, perform a regular HTTP request
  //   fetch(e.request)
  //   // if the HTTP request fails (offline) then serve the assets requested from the cache
  //   .catch(() => caches.match(e.request))
  // )

  // Offline first
  e.respondWith(
    // are the files requested in the cache already?
    caches.match(e.request).then(cachedResponse => {
      // if yes, then serve files from cache
      if (cachedResponse) {
        console.log('Found in cache!');
        return cachedResponse;
      }
      // else do an HTTP request to the server
      return fetch(e.request);
    })
  )
});