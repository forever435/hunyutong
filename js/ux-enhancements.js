// 用户体验增强功能
// 注意：返回顶部和键盘快捷键已在 accessibility.js 中实现，此处不重复

// 1. 错误处理
function showError(message, duration = 5000) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.setAttribute('role', 'alert');
  errorDiv.innerHTML = `
    <strong>❌ 错误：</strong> ${message}
    <button onclick="this.parentElement.remove()" style="
      float: right;
      background: none;
      border: none;
      color: #c62828;
      cursor: pointer;
      font-size: 18px;
    ">×</button>
  `;
  document.body.insertBefore(errorDiv, document.body.firstChild);
  
  if (duration > 0) {
    setTimeout(() => errorDiv.remove(), duration);
  }
}

// 2. 成功提示
function showSuccess(message, duration = 3000) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.setAttribute('role', 'status');
  successDiv.innerHTML = `
    <strong>✅ 成功：</strong> ${message}
    <button onclick="this.parentElement.remove()" style="
      float: right;
      background: none;
      border: none;
      color: #33691e;
      cursor: pointer;
      font-size: 18px;
    ">×</button>
  `;
  document.body.insertBefore(successDiv, document.body.firstChild);
  
  if (duration > 0) {
    setTimeout(() => successDiv.remove(), duration);
  }
}

// 3. 警告提示
function showWarning(message, duration = 4000) {
  const warningDiv = document.createElement('div');
  warningDiv.className = 'warning-message';
  warningDiv.setAttribute('role', 'alert');
  warningDiv.innerHTML = `
    <strong>⚠️ 警告：</strong> ${message}
    <button onclick="this.parentElement.remove()" style="
      float: right;
      background: none;
      border: none;
      color: #e65100;
      cursor: pointer;
      font-size: 18px;
    ">×</button>
  `;
  document.body.insertBefore(warningDiv, document.body.firstChild);
  
  if (duration > 0) {
    setTimeout(() => warningDiv.remove(), duration);
  }
}

// 4. 平滑滚动到元素
function smoothScrollTo(element) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 5. 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 6. 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 7. 页面可见性检测
function onPageVisibilityChange(callback) {
  document.addEventListener('visibilitychange', () => {
    callback(document.hidden);
  });
}
