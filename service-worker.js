// service-worker.js
const CLOUDFLARE_PATTERNS = [
  'cloudflareinsights.com',
  'static.cloudflareinsights.com',
  'beacon.min.js',
  'cloudflare-static'
];

// Install event - cache necessary files
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker installed');
});

// Activate event - claim clients and delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('Service Worker activated');
});

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Check if request is for Cloudflare analytics
  if (CLOUDFLARE_PATTERNS.some(pattern => url.includes(pattern))) {
    console.log('Blocked request to Cloudflare:', url);
    
    // Return an empty response with status 200
    event.respondWith(
      new Response('', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    );
    return;
  }
  
  // For all other requests, proceed normally
  event.respondWith(fetch(event.request));
});