/**
 * 工具函数模块 - 通用工具函数
 * 注意：debounce, throttle, showError, showSuccess, showLoading, hideLoading
 * 在 script.js 和 ux-enhancements.js 中已有定义，此处不再重复定义，避免覆盖冲突。
 * 此文件只提供新增的工具函数。
 */

/**
 * 格式化日期
 * @param {Date|string} date - 日期对象或字符串
 * @param {string} format - 格式模板
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
}

/**
 * 计算两个日期之间的天数差
 * @param {Date|string} date1 - 第一个日期
 * @param {Date|string} date2 - 第二个日期
 * @returns {number} 天数差
 */
function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * 安全地获取单个DOM元素
 * @param {string} selector - CSS选择器
 * @param {Document|Element} context - 查询上下文
 * @returns {Element|null} DOM元素或null
 */
function qs(selector, context = document) {
    return context.querySelector(selector);
}

/**
 * 安全地获取多个DOM元素
 * @param {string} selector - CSS选择器
 * @param {Document|Element} context - 查询上下文
 * @returns {NodeList} DOM元素列表
 */
function qsa(selector, context = document) {
    return context.querySelectorAll(selector);
}

/**
 * 创建DOM元素
 * @param {string} tag - 标签名
 * @param {Object} attributes - 属性对象
 * @param {string} textContent - 文本内容
 * @returns {Element} 创建的DOM元素
 */
function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else {
            element.setAttribute(key, value);
        }
    });
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} 是否复制成功
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('复制失败:', err);
        return false;
    }
}

/**
 * 生成唯一ID
 * @param {string} prefix - ID前缀
 * @returns {string} 唯一ID
 */
function generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 深拷贝对象
 * @param {*} obj - 要拷贝的对象
 * @returns {*} 拷贝后的对象
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

/**
 * 合并对象
 * @param {...Object} objects - 要合并的对象
 * @returns {Object} 合并后的对象
 */
function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

/**
 * 检查对象是否为空
 * @param {Object} obj - 要检查的对象
 * @returns {boolean} 是否为空
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

/**
 * 格式化数字（添加千位分隔符）
 * @param {number} num - 数字
 * @returns {string} 格式化后的字符串
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 截断文本
 * @param {string} text - 原文本
 * @param {number} maxLength - 最大长度
 * @param {string} suffix - 后缀
 * @returns {string} 截断后的文本
 */
function truncateText(text, maxLength, suffix = '...') {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + suffix;
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDate,
        daysBetween,
        qs,
        qsa,
        createElement,
        copyToClipboard,
        generateId,
        deepClone,
        mergeObjects,
        isEmptyObject,
        formatNumber,
        truncateText
    };
}
