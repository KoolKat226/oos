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
// <input id="scriptUrl">, <input id="gsUnique_shareLink">, and <input id="creator">
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const text = await response.text();

  // 1) Remove value="…" from every <input> unless its id is "scriptUrl", "gsUnique_shareLink", or "creator"
  const stripInputs = text.replace(/<input\b[^>]*>/gi, (match) => {
    if (/\bid=['"](scriptUrl|gsUnique_shareLink|creator)['"]/.test(match)) {
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

  // ── 1) NEVER cache any Google-Sheets CSV requests ──
  //    matches both ?format=csv exports and ?output=csv publishes
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    (
      url.searchParams.get('format') === 'csv' ||
      url.searchParams.get('output') === 'csv'
    )
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
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    url.pathname.includes('/gviz/tq')
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() => {
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

  // ── NEVER cache any Google Apps Script endpoints ──
  if (url.hostname === 'script.google.com') {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() => {
          return new Response('Offline and no cached Apps Script data.', {
            status: 503,
            statusText: 'Offline'
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

  // ── 4) HTML navigations: CACHE FIRST + strip form defaults ──
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    evt.respondWith(
      caches.match(req).then(cached => {
        if (cached) {
          // Serve the cached HTML immediately…
          return stripFormDefaultsIfHTML(cached);
        }
        // Otherwise fetch from network and strip defaults
        return fetch(req)
          .then(networkResponse => stripFormDefaultsIfHTML(networkResponse))
          .catch(() => {
            // If offline and not in cache, show offline fallback
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
