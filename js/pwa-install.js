// PWA 安装提示功能
// 婚育服务通 - 引导用户安装到主屏幕

let deferredPrompt;
let installButton;

// 初始化PWA安装功能
function initPWAInstall() {
  console.log('[PWA] 初始化安装功能');
  
  // 检查是否支持PWA
  if (!('serviceWorker' in navigator)) {
    console.warn('[PWA] 浏览器不支持 Service Worker');
    return;
  }

  // 注册 Service Worker
  registerServiceWorker();

  // 监听安装提示事件
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('[PWA] 捕获到安装提示事件');
    
    // 阻止默认的安装提示
    e.preventDefault();
    
    // 保存事件，稍后使用
    deferredPrompt = e;
    
    // 显示自定义安装按钮
    showInstallPromotion();
  });

  // 监听安装完成事件
  window.addEventListener('appinstalled', () => {
    console.log('[PWA] 应用已安装');
    deferredPrompt = null;
    hideInstallPromotion();
    showToast('安装成功！您可以在手机桌面找到"婚育服务通"', 'success');
  });

  // 检查是否已经安装
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('[PWA] 应用已在独立模式运行');
    hideInstallPromotion();
  }
}

// 注册 Service Worker
async function registerServiceWorker() {
  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js');
    console.log('[PWA] Service Worker 注册成功:', registration.scope);

    // 检查更新
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      console.log('[PWA] 发现新版本');

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('[PWA] 新版本已安装，等待激活');
          showUpdateNotification();
        }
      });
    });

    // 定期检查更新（每小时）
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);

  } catch (error) {
    console.error('[PWA] Service Worker 注册失败:', error);
  }
}

// 显示安装提示
function showInstallPromotion() {
  // 检查用户是否已经关闭过提示
  const dismissed = localStorage.getItem('pwa-install-dismissed');
  if (dismissed) {
    console.log('[PWA] 用户已关闭安装提示');
    return;
  }

  // 创建安装提示横幅
  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.className = 'pwa-install-banner';
  banner.innerHTML = `
    <div class="pwa-banner-content">
      <div class="pwa-banner-icon">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="pwa-banner-text">
        <strong>安装"婚育服务通"到手机</strong>
        <p>像APP一样使用，更快更方便</p>
      </div>
      <div class="pwa-banner-actions">
        <button id="pwa-install-btn" class="btn-install">安装</button>
        <button id="pwa-dismiss-btn" class="btn-dismiss">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // 添加样式
  if (!document.getElementById('pwa-install-styles')) {
    const style = document.createElement('style');
    style.id = 'pwa-install-styles';
    style.textContent = `
      .pwa-install-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #ff9eb5 0%, #ffc4d6 100%);
        color: white;
        padding: 1rem;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideUp 0.3s ease-out;
      }

      @keyframes slideUp {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }

      .pwa-banner-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .pwa-banner-icon {
        font-size: 2rem;
        flex-shrink: 0;
      }

      .pwa-banner-text {
        flex: 1;
      }

      .pwa-banner-text strong {
        display: block;
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }

      .pwa-banner-text p {
        margin: 0;
        font-size: 0.85rem;
        opacity: 0.9;
      }

      .pwa-banner-actions {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .btn-install {
        background: white;
        color: #ff9eb5;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        white-space: nowrap;
      }

      .btn-install:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .btn-dismiss {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }

      .btn-dismiss:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      @media (max-width: 768px) {
        .pwa-banner-content {
          flex-wrap: wrap;
        }

        .pwa-banner-text p {
          font-size: 0.75rem;
        }

        .btn-install {
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 绑定事件
  setTimeout(() => {
    document.getElementById('pwa-install-btn').addEventListener('click', installApp);
    document.getElementById('pwa-dismiss-btn').addEventListener('click', dismissInstallPromotion);
  }, 100);
}

// 隐藏安装提示
function hideInstallPromotion() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.style.animation = 'slideDown 0.3s ease-out';
    setTimeout(() => banner.remove(), 300);
  }
}

// 关闭安装提示
function dismissInstallPromotion() {
  localStorage.setItem('pwa-install-dismissed', 'true');
  hideInstallPromotion();
}

// 安装应用
async function installApp() {
  if (!deferredPrompt) {
    console.warn('[PWA] 没有可用的安装提示');
    showToast('请在浏览器菜单中选择"添加到主屏幕"', 'info');
    return;
  }

  // 显示安装提示
  deferredPrompt.prompt();

  // 等待用户响应
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`[PWA] 用户选择: ${outcome}`);

  if (outcome === 'accepted') {
    console.log('[PWA] 用户接受安装');
  } else {
    console.log('[PWA] 用户拒绝安装');
  }

  // 清除保存的事件
  deferredPrompt = null;
  hideInstallPromotion();
}

// 显示更新通知
function showUpdateNotification() {
  const updateBanner = document.createElement('div');
  updateBanner.className = 'pwa-update-banner';
  updateBanner.innerHTML = `
    <div class="pwa-banner-content">
      <div class="pwa-banner-icon">
        <i class="fas fa-sync-alt"></i>
      </div>
      <div class="pwa-banner-text">
        <strong>发现新版本</strong>
        <p>点击更新以获取最新功能</p>
      </div>
      <div class="pwa-banner-actions">
        <button id="pwa-update-btn" class="btn-install">立即更新</button>
      </div>
    </div>
  `;

  document.body.appendChild(updateBanner);

  document.getElementById('pwa-update-btn').addEventListener('click', () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  });
}

// PWA内部不再重新定义showToast，直接使用主脚本的全局showToast函数

// iOS Safari 特殊处理
function isIOSSafari() {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  return iOSSafari;
}

// 显示iOS安装指南
function showIOSInstallGuide() {
  if (isIOSSafari() && !window.matchMedia('(display-mode: standalone)').matches) {
    const guide = document.createElement('div');
    guide.className = 'ios-install-guide';
    guide.innerHTML = `
      <div class="guide-content">
        <h3>如何安装到iPhone</h3>
        <ol>
          <li>点击底部的 <i class="fas fa-share"></i> 分享按钮</li>
          <li>选择"添加到主屏幕"</li>
          <li>点击"添加"完成安装</li>
        </ol>
        <button class="btn-close-guide">知道了</button>
      </div>
    `;
    document.body.appendChild(guide);

    guide.querySelector('.btn-close-guide').addEventListener('click', () => {
      guide.remove();
    });
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPWAInstall);
} else {
  initPWAInstall();
}

// 导出函数供外部使用
window.PWAInstall = {
  init: initPWAInstall,
  install: installApp,
  dismiss: dismissInstallPromotion
};
