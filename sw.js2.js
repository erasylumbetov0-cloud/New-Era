const C='ne-ai-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json'])).then(()=>self.skipWaiting())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||e.request.url.includes('workers.dev'))return;e.respondWith(fetch(e.request).then(n=>{const c=n.clone();caches.open(C).then(x=>x.put(e.request,c));return n}).catch(()=>caches.match(e.request)))});
