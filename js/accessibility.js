// 无障碍和用户体验增强功能

// 返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 键盘导航增强
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Alt+S 聚焦搜索框
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            const searchBtn = document.getElementById('searchBtn');
            if (searchBtn) {
                searchBtn.click();
                setTimeout(() => {
                    const searchInput = document.getElementById('globalSearchInput');
                    if (searchInput) searchInput.focus();
                }, 100);
            }
        }
        
        // Esc 关闭所有模态框
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal.show');
            modals.forEach(modal => {
                modal.classList.remove('show');
            });
            
            // 关闭客服菜单
            const csMenu = document.getElementById('csMenu');
            if (csMenu && csMenu.classList.contains('show')) {
                csMenu.classList.remove('show');
            }
        }
    });
}

// 焦点管理 - 模态框打开时
function manageFocusTrap(modalElement) {
    const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modalElement.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
    
    // 自动聚焦第一个元素
    setTimeout(() => firstElement.focus(), 100);
}

// 初始化所有无障碍功能
function initAccessibility() {
    initBackToTop();
    initKeyboardNavigation();
    
    // 为所有模态框添加焦点管理
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (modal.classList.contains('show')) {
                        manageFocusTrap(modal);
                    }
                }
            });
        });
        
        observer.observe(modal, { attributes: true });
    });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
    initAccessibility();
}
