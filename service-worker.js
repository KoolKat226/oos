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
// with all <input value="…"> stripped (except id="scriptUrl"), and blank out any <textarea>
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const text = await response.text();

  // 1) Remove value="…" from every <input> unless id="scriptUrl"
  const stripInputs = text.replace(/<input\b[^>]*>/gi, (match) => {
    if (/\bid=['"]scriptUrl['"]/.test(match)) {
      return match;
    }
    return match.replace(/\svalue=['"][^'"]*['"]/i, '');
  });

  // 2) Blank out any <textarea>…</textarea>
  const stripTextareas = stripInputs.replace(
    /<textarea\b([^>]*)>[\s\S]*?<\/textarea>/gi,
    '<textarea$1></textarea>'
  );

  return new Response(stripTextareas, {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}

self.addEventListener('fetch', (evt) => {
  const req = evt.request;
  const url = new URL(req.url);
  const accept = req.headers.get('accept') || '';

  // ── 1) Never cache any Google Sheets “gviz/tq” requests ──
  //    (URLs like https://docs.google.com/spreadsheets/d/.../gviz/tq?...)
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    url.pathname.includes('/gviz/tq')
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => {
          // Return fresh data; do NOT cache it under any circumstances
          return networkResponse;
        })
        .catch(() => {
          // If offline or network fails, optionally return a cached copy if it exists
          return caches.match(req).then(cached => {
            if (cached) return cached;
            return new Response('Offline and no cached sheet data.', {
              status: 503,
              statusText: 'Offline'
            });
          });
        })
    );
    return;
  }

  // ── 2) If this is your “?action=get” endpoint (e.g. Apps Script), also skip caching ──
  if (
    url.searchParams.has('action') &&
    url.searchParams.get('action') === 'get'
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() => {
          return caches.match(req).then(cached => {
            if (cached) return cached;
            return new Response('Offline and no cached data.', {
              status: 503,
              statusText: 'Offline'
            });
          });
        })
    );
    return;
  }

  // ── 3) HTML navigations: fetch from network and strip form defaults ──
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => stripFormDefaultsIfHTML(networkResponse))
        .catch(() => {
          return caches.match(req).then(cached => {
            if (cached) return cached;
            return new Response('Offline and no cached page.', {
              status: 503,
              statusText: 'Offline'
            });
          });
        })
    );
    return;
  }

  // ── 4) All other requests (CSS, JS, images, fonts, etc.): cache‐first ──
  evt.respondWith(
    caches.match(req).then(cached => {
      if (cached) {
        return cached;
      }
      return fetch(req).then(networkResponse => {
        if (
          req.method === 'GET' &&
          networkResponse &&
          networkResponse.status === 200
        ) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(req, copy);
          });
        }
        return networkResponse;
      }).catch(() => {
        return new Response('Offline: resource not cached.', {
          status: 503,
          statusText: 'Offline'
        });
      });
    })
  );
});
