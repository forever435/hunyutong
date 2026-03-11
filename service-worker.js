// 婚育服务通 PWA Service Worker
const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `hunyutong-${CACHE_VERSION}`;

// 核心缓存文件（使用相对路径，兼容GitHub Pages）
const CORE_ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './css/map-styles.css',
  './css/accessibility.css',
  './js/script.js',
  './js/policy-data-2025.js',
  './js/policy-data-extended.js',
  './js/policy-helper.js',
  './js/ux-enhancements.js',
  './js/user-system.js',
  './js/accessibility.js',
  './js/city-coords.js',
  './js/all-districts.js',
  './manifest.json'
];

// 安装 - 缓存核心资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] 安装失败:', err))
  );
});

// 激活 - 清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// 请求拦截 - 网络优先，回退缓存
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // 对HTML页面使用网络优先策略
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 对静态资源使用缓存优先策略
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
      .catch(() => new Response('离线中', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }))
  );
});

// 消息处理
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
