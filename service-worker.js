// ────────────────────────────────────────────────────────────────────
// File: /service-worker.js
// ────────────────────────────────────────────────────────────────────

const CACHE_NAME = 'oos';

// On install, skip waiting so it activates immediately
self.addEventListener('install', (evt) => {
  self.skipWaiting();
});

// On activate, take control of uncontrolled clients immediately
self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

// Utility: Given a Response object for HTML, return a new Response
// where only <input id="colB" value="…"> or <input id="colD" value="…">
// have their value stripped. All other <input> and <textarea> content is kept.
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    // Not HTML → return original.
    return response;
  }

  const text = await response.text();

  // 1) Strip value="…" only if the <input> has id="colB" or id="colD".
  //    Any other <input> (even if it has a value) is returned unchanged.
  const stripValues = text.replace(
    /<input\b([^>]*?)\svalue=['"][^'"]*['"]([^>]*?)>/gi,
    (match, beforeAttrs, afterAttrs) => {
      if (/\bid=['"](colB|colD)['"]/.test(match)) {
        return `<input${beforeAttrs}${afterAttrs}>`;
      }
      return match;
    }
  );

  // 2) Leave all <textarea> defaults intact.
  const finalHTML = stripValues;

  return new Response(finalHTML, {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}

self.addEventListener('fetch', (evt) => {
  const req = evt.request;

  // If this is a navigation (i.e. HTML page), fetch from network and strip as above
  if (
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html')
  ) {
    evt.respondWith(
      fetch(req)
        .then((networkResponse) => stripFormDefaultsIfHTML(networkResponse))
        .catch(() => {
          // Offline fallback: serve cached page if available
          return caches.match(req).then((cached) => {
            if (cached) return cached;
            return new Response('Offline and no cached page.', {
              status: 503,
              statusText: 'Offline',
            });
          });
        })
    );
    return;
  }

  // For all other requests (CSS, JS, images, etc.), serve from cache first, then network
  evt.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(req).then((networkResponse) => {
        // Only cache GET requests with status 200
        if (req.method === 'GET' && networkResponse && networkResponse.status === 200) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, copy);
          });
        }
        return networkResponse;
      }).catch(() => {
        return new Response('Offline: resource not cached.', {
          status: 503,
          statusText: 'Offline',
        });
      });
    })
  );
});
