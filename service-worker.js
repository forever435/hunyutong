// 婚育服务通 PWA Service Worker
// 版本号 - 更新时修改此版本号以清除旧缓存
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `hunyutong-${CACHE_VERSION}`;

// 需要缓存的核心文件（简单离线模式）
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/map-styles.css',
  '/js/script.js',
  '/js/user-system.js',
  '/js/analytics.js',
  '/js/accessibility.js',
  '/js/policy-data-2025.js',
  '/js/policy-data-extended.js',
  '/js/policy-helper.js',
  '/js/map-integration.js',
  '/js/map-mock.js',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 安装事件 - 缓存核心资源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] 安装中...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] 缓存核心文件');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] 安装完成');
        return self.skipWaiting(); // 立即激活新的 Service Worker
      })
      .catch((error) => {
        console.error('[Service Worker] 安装失败:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] 激活中...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] 删除旧缓存:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] 激活完成');
        return self.clients.claim(); // 立即控制所有页面
      })
  );
});

// 请求拦截 - 缓存优先策略（简单离线）
self.addEventListener('fetch', (event) => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // 如果缓存中有，直接返回缓存
        if (cachedResponse) {
          console.log('[Service Worker] 从缓存返回:', event.request.url);
          return cachedResponse;
        }

        // 缓存中没有，从网络获取
        return fetch(event.request)
          .then((networkResponse) => {
            // 检查响应是否有效
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // 克隆响应（因为响应只能使用一次）
            const responseToCache = networkResponse.clone();

            // 将新资源添加到缓存
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch((error) => {
            console.error('[Service Worker] 网络请求失败:', error);
            
            // 如果是导航请求（页面请求），返回离线页面
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            // 其他请求失败，返回错误
            return new Response('网络连接失败，请检查您的网络设置', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain; charset=utf-8'
              })
            });
          });
      })
  );
});

// 消息事件 - 用于手动更新缓存
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// 后台同步（可选功能）
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// 同步数据函数
function syncData() {
  return fetch('/api/sync')
    .then((response) => response.json())
    .then((data) => {
      console.log('[Service Worker] 数据同步成功:', data);
    })
    .catch((error) => {
      console.error('[Service Worker] 数据同步失败:', error);
    });
}
