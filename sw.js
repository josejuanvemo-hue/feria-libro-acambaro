const CACHE='feria-libro-v1';
const ARCHIVOS=['/feria-libro-acambaro/','/feria-libro-acambaro/index.html','/feria-libro-acambaro/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARCHIVOS).catch(()=>{})));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
