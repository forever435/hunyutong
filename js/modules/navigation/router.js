/**
 * 路由模块 - 页面导航管理
 */

const Router = {
    // 当前页面
    currentPage: 'home',
    
    // 页面历史
    history: [],
    
    // 页面配置
    pages: {
        'home': { title: '首页', icon: 'fa-home' },
        'married': { title: '结婚登记', icon: 'fa-heart' },
        'wedding': { title: '婚礼筹备', icon: 'fa-glass-cheers' },
        'registry': { title: '户口办理', icon: 'fa-id-card' },
        'service': { title: '生育服务', icon: 'fa-baby' },
        'insurance': { title: '生育保险', icon: 'fa-shield-alt' },
        'faq': { title: '常见问题', icon: 'fa-question-circle' },
        'search': { title: '搜索结果', icon: 'fa-search' },
        'compare': { title: '政策对比', icon: 'fa-balance-scale' }
    },

    /**
     * 初始化路由
     */
    init() {
        // 监听浏览器返回按钮
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.navigateTo(e.state.page, false);
            }
        });

        // 初始化导航链接
        this.initNavLinks();
        
        // 检查URL参数
        this.checkUrlParams();
    },

    /**
     * 初始化导航链接
     */
    initNavLinks() {
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigateTo(page);
            });
        });
    },

    /**
     * 检查URL参数
     */
    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        if (page && this.pages[page]) {
            this.navigateTo(page, false);
        }
    },

    /**
     * 导航到指定页面
     * @param {string} page - 页面ID
     * @param {boolean} pushState - 是否推入历史记录
     */
    navigateTo(page, pushState = true) {
        if (!this.pages[page]) {
            console.error(`页面不存在: ${page}`);
            return;
        }

        // 保存当前页面到历史
        if (this.currentPage !== page) {
            this.history.push(this.currentPage);
        }

        // 更新当前页面
        this.currentPage = page;

        // 更新浏览器历史
        if (pushState) {
            const url = page === 'home' ? 'index.html' : `index.html?page=${page}`;
            window.history.pushState({ page }, this.pages[page].title, url);
        }

        // 更新页面标题
        document.title = `${this.pages[page].title} - 婚育通`;

        // 触发页面切换事件
        this.emit('pageChange', { page, from: this.history[this.history.length - 1] });

        // 更新UI
        this.updateUI(page);

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    /**
     * 返回上一页
     */
    goBack() {
        if (this.history.length > 0) {
            const previousPage = this.history.pop();
            this.navigateTo(previousPage);
        } else {
            this.navigateTo('home');
        }
    },

    /**
     * 更新UI
     * @param {string} page - 当前页面
     */
    updateUI(page) {
        // 更新导航激活状态
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

        // 显示对应页面内容
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(`${page}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // 更新面包屑
        this.updateBreadcrumb(page);
    },

    /**
     * 更新面包屑导航
     * @param {string} page - 当前页面
     */
    updateBreadcrumb(page) {
        const breadcrumb = document.getElementById('breadcrumb');
        if (!breadcrumb) return;

        if (page === 'home') {
            breadcrumb.innerHTML = '<span class="breadcrumb-item">首页</span>';
        } else {
            breadcrumb.innerHTML = `
                <a href="#" class="breadcrumb-item" data-page="home">首页</a>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-item active">${this.pages[page].title}</span>
            `;
            
            // 重新绑定首页链接事件
            const homeLink = breadcrumb.querySelector('[data-page="home"]');
            if (homeLink) {
                homeLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.navigateTo('home');
                });
            }
        }
    },

    /**
     * 获取当前页面
     * @returns {string} 当前页面ID
     */
    getCurrentPage() {
        return this.currentPage;
    },

    /**
     * 获取页面信息
     * @param {string} page - 页面ID
     * @returns {Object} 页面信息
     */
    getPageInfo(page) {
        return this.pages[page] || null;
    },

    /**
     * 注册页面切换监听器
     * @param {Function} callback - 回调函数
     */
    onPageChange(callback) {
        this.on('pageChange', callback);
    },

    /**
     * 事件发射器
     */
    events: {},

    /**
     * 监听事件
     * @param {string} event - 事件名
     * @param {Function} callback - 回调函数
     */
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    /**
     * 触发事件
     * @param {string} event - 事件名
     * @param {*} data - 事件数据
     */
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Router;
}
