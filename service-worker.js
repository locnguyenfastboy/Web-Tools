self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                'https://script.google.com/macros/s/AKfycbx8iUDiceaU81rtl9d4wthZKIYX3_GsRbFV33KxHCmwvIQOKxxmkpmyCSogfX1431gO_w/exec' // Caching the iframe content may not work due to CORS
            ]);
        })
    );
});