/**
 * 存储管理器 - 封装localStorage操作
 * 提供数据持久化功能
 */

const StorageManager = {
    /**
     * 保存数据到localStorage
     * @param {string} key - 存储键名
     * @param {*} data - 要存储的数据
     */
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('保存数据失败:', e);
        }
    },

    /**
     * 从localStorage读取数据
     * @param {string} key - 存储键名
     * @param {*} defaultValue - 默认值
     * @returns {*} 存储的数据或默认值
     */
    load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('读取数据失败:', e);
            return defaultValue;
        }
    },

    /**
     * 删除指定键名的数据
     * @param {string} key - 存储键名
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('删除数据失败:', e);
        }
    },

    /**
     * 清空所有localStorage数据
     */
    clear() {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('清空数据失败:', e);
        }
    }
};

/**
 * 搜索历史管理
 */
const SearchHistory = {
    maxItems: 10,

    /**
     * 添加搜索关键词到历史
     * @param {string} keyword - 搜索关键词
     */
    add(keyword) {
        let history = StorageManager.load('searchHistory', []);
        history = history.filter(item => item !== keyword);
        history.unshift(keyword);
        if (history.length > this.maxItems) {
            history = history.slice(0, this.maxItems);
        }
        StorageManager.save('searchHistory', history);
    },

    /**
     * 获取搜索历史
     * @returns {string[]} 搜索历史数组
     */
    get() {
        return StorageManager.load('searchHistory', []);
    },

    /**
     * 清空搜索历史
     */
    clear() {
        StorageManager.remove('searchHistory');
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StorageManager, SearchHistory };
}
