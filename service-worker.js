// ────────────────────────────────────────────────────────────────────
// File: /service-worker.js
// ────────────────────────────────────────────────────────────────────

const CACHE_NAME = 'oosv2.2';

// ─── Install Event: Activate Immediately ────────────────────────────
self.addEventListener('install', (evt) => {
  self.skipWaiting(); // Activate without waiting
});

// ─── Activate Event: Take control immediately ───────────────────────
self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

// ─── Allow manual forceClaim from page via message ──────────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'forceClaim') {
    self.skipWaiting().then(() => self.clients.claim());
  }
});

// ─── Helper: Strip form default values from HTML ────────────────────
async function stripFormDefaultsIfHTML(response) {
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const text = await response.text();

  // Remove value=… from most <input>s except certain ones
  const stripInputs = text.replace(/<input\b[^>]*>/gi, (match) => {
    if (/\bid=['"](scriptUrl|gsUnique_shareLink|creator)['"]/.test(match)) {
      return match;
    }
    return match.replace(/\svalue=['"][^'"]*['"]/i, '');
  });

  // Blank <textarea> content
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

// ─── Fetch Handler ──────────────────────────────────────────────────
self.addEventListener('fetch', (evt) => {
  const req = evt.request;
  const url = new URL(req.url);
  const accept = req.headers.get('accept') || '';

  // ── 1) NEVER cache Google Sheets CSV exports ──
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
        .then(networkResponse => networkResponse)
        .catch(() =>
          caches.match(req).then(cached => cached || new Response('Offline and no cached CSV data.', {
            status: 503, statusText: 'Offline'
          }))
        )
    );
    return;
  }

  // ── 2) NEVER cache "gviz/tq" queries ──
  if (
    url.hostname === 'docs.google.com' &&
    url.pathname.startsWith('/spreadsheets/d/') &&
    url.pathname.includes('/gviz/tq')
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() =>
          caches.match(req).then(cached => cached || new Response('Offline and no cached sheet data.', {
            status: 503, statusText: 'Offline'
          }))
        )
    );
    return;
  }

  // ── 3) NEVER cache Google Apps Script endpoints ──
  if (url.hostname === 'script.google.com') {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() => new Response('Offline and no cached Apps Script data.', {
          status: 503, statusText: 'Offline'
        }))
    );
    return;
  }

  // ── 4) NEVER cache ?action=get requests ──
  if (
    url.searchParams.has('action') &&
    url.searchParams.get('action') === 'get'
  ) {
    evt.respondWith(
      fetch(req)
        .then(networkResponse => networkResponse)
        .catch(() =>
          caches.match(req).then(cached => cached || new Response('Offline and no cached data.', {
            status: 503, statusText: 'Offline'
          }))
        )
    );
    return;
  }

  // ── 5) HTML pages: cache-first, then sanitize ──
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    evt.respondWith(
      caches.match(req).then(cached => {
        if (cached) {
          return stripFormDefaultsIfHTML(cached);
        }
        return fetch(req)
          .then(networkResponse => stripFormDefaultsIfHTML(networkResponse))
          .catch(() =>
            new Response('Offline and no cached page.', {
              status: 503, statusText: 'Offline'
            })
          );
      })
    );
    return;
  }

  // ── 6) Other resources (JS/CSS/images/etc.): cache-first ──
  evt.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(networkResponse => {
        if (
          req.method === 'GET' &&
          networkResponse &&
          networkResponse.status === 200
        ) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return networkResponse;
      }).catch(() =>
        new Response('Offline: resource not cached.', {
          status: 503, statusText: 'Offline'
        })
      );
    })
  );
});
