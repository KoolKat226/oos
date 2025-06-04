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
// where only <input id="colB" value="…"> has its value stripped.
// All other <input> (and <textarea>) default values remain as-is.
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response; // Not HTML → return original.
  }

  const text = await response.text();

  // 1) Strip value="…" only if the <input> has id="colB".
  //    Any other <input> (regardless of having a value=…) is left untouched.
  const stripColBInputs = text.replace(
    /<input\b([^>]*?)\svalue=['"][^'"]*['"]([^>]*?)>/gi,
    (match, beforeAttrs, afterAttrs) => {
      // If this input has id="colB", remove its value="…"; else keep it as-is.
      if (/\bid=['"]colB['"]/.test(match)) {
        return `<input${beforeAttrs}${afterAttrs}>`;
      }
      return match;
    }
  );

  // 2) Leave all <textarea> defaults intact (no change to textarea).
  //    If you still want to clear <textarea> defaults, uncomment below:
  //
  // const stripTextareas = stripColBInputs.replace(
  //   /<textarea\b([^>]*)>[\s\S]*?<\/textarea>/gi,
  //   '<textarea$1></textarea>'
  // );
  //
  // But since we want to "save all except id='colB'", we skip textarea stripping:
  const stripTextareas = stripColBInputs;

  return new Response(stripTextareas, {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}

self.addEventListener('fetch', (evt) => {
  const req = evt.request;

  // If this is a navigation (i.e. HTML page), we fetch from network and strip only colB’s value.
  if (
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html')
  ) {
    evt.respondWith(
      fetch(req)
        .then((networkResponse) => stripFormDefaultsIfHTML(networkResponse))
        .catch(() => {
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

  // For all other requests (CSS, JS, images, etc.), serve from cache-first, fallback to network.
  evt.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(req).then((networkResponse) => {
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
