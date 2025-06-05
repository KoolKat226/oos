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

// Utility to strip form defaults from HTML, while exempting
// <input id="scriptUrl"> and <input id="gsUnique_shareLink"> from having their value removed.
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const text = await response.text();

  // 1) Remove value="…" from every <input> unless its id is "scriptUrl" or "gsUnique_shareLink"
  const stripInputs = text.replace(/<input\b[^>]*>/gi, (match) => {
    if (/\bid=['"](scriptUrl|gsUnique_shareLink)['"]/.test(match)) {
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

  // ── 1) NEVER cache any Google-Sheets CSV export requests ──
  //    e.g. "https://docs.google.com/spreadsheets/d/.../export?format=csv..."
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    url.searchParams.get('format') === 'csv'
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => {
          // Always return fresh CSV; do NOT cache.
          return networkResponse;
        })
        .catch(() => {
          // If offline, fall back to any cached copy
          return caches.match(req).then(cached => {
            if (cached) return cached;
            return new Response('Offline and no cached CSV data.', {
              status: 503,
              statusText: 'Offline'
            });
          });
        })
    );
    return;
  }

  // ── 2) NEVER cache any Google-Sheets "gviz/tq" requests ──
  //    e.g. "https://docs.google.com/spreadsheets/d/.../gviz/tq?..."
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    url.pathname.includes('/gviz/tq')
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => {
          // Always return fresh JsonP; do NOT cache.
          return networkResponse;
        })
        .catch(() => {
          // If offline, fall back to any cached copy
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

  // ── 3) NEVER cache any “?action=get” endpoints ──
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

  // ── 4) HTML navigations: fetch & strip form defaults ──
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

  // ── 5) Everything else (CSS/JS/images/fonts/etc.): cache-first ──
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
