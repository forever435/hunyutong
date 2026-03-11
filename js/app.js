/**
 * 婚育通 - 主应用入口
 * 模块化架构主文件
 * 
 * 注意：当前阶段，导航和页面切换功能仍由 script.js 处理。
 * Router、CitySelector 等新模块暂不启用，避免与 script.js 冲突。
 * 待 script.js 功能逐步迁移完成后再启用。
 */

const App = {
    version: '2.0.0',
    initialized: false,

    /**
     * 初始化应用
     */
    init() {
        if (this.initialized) return;
        
        console.log('婚育通 v' + this.version + ' 模块化架构加载中...');
        
        // 核心模块（config.js, utils.js, storage.js）已通过 script 标签加载
        console.log('核心模块已加载: AppConfig, StorageManager, 工具函数');
        
        // 注意：以下模块暂不启用，避免与 script.js 的导航/交互逻辑冲突
        // 待 script.js 功能逐步迁移到模块后再启用
        // 
        // Router.init();           // 导航功能目前由 script.js 的 initNavigation() 处理
        // CitySelector.init();     // 城市选择目前由 script.js 处理
        // MarriageRegistration.init(); // 结婚登记目前由 script.js 处理
        
        this.initialized = true;
        console.log('婚育通模块化架构就绪（兼容模式）');
        
        document.dispatchEvent(new CustomEvent('app:initialized'));
    },

    /**
     * 获取应用信息
     */
    getInfo() {
        return {
            name: '婚育通',
            version: this.version,
            initialized: this.initialized,
            mode: 'compatible' // 兼容模式：script.js 仍为主控
        };
    }
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
