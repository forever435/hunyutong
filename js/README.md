# 婚育通 - JavaScript 模块化架构

## 目录结构

```
js/
├── core/                          # 核心基础设施
│   ├── config.js                  # 全局配置和常量
│   ├── utils.js                   # 通用工具函数
│   └── storage.js                 # 存储管理器
│
├── modules/                       # 业务模块
│   ├── navigation/                # 导航模块
│   │   ├── router.js              # 路由管理
│   │   └── city-selector.js       # 城市选择器
│   │
│   ├── married/                   # 已婚人群模块
│   │   └── marriage-registration.js # 结婚登记
│   │
│   ├── wedding/                   # 婚礼筹备模块
│   ├── registry/                  # 户口办理模块
│   ├── service/                   # 生育服务模块
│   ├── insurance/                 # 生育保险模块
│   ├── faq/                       # 常见问题模块
│   ├── search/                    # 搜索模块
│   └── compare/                   # 政策对比模块
│
├── data/                          # 数据层（预留）
│
├── features/                      # 功能特性（预留）
│
├── app.js                         # 主应用入口
└── script.js                      # 原有主脚本（保持兼容）
```

## 模块说明

### 核心模块 (core/)

#### config.js
- **用途**: 全局配置和常量定义
- **导出**:
  - `AppConfig`: 应用配置对象
  - `CityList`: 城市列表
  - `DistrictList`: 地区列表
  - `ServiceTypes`: 服务类型
  - `Routes`: 页面路由
  - `Themes`: 主题配置

#### utils.js
- **用途**: 通用工具函数
- **导出**:
  - `debounce`: 防抖函数
  - `throttle`: 节流函数
  - `formatDate`: 日期格式化
  - `daysBetween`: 计算天数差
  - `$` / `$$`: DOM选择器
  - `createElement`: 创建DOM元素
  - `showLoading` / `hideLoading`: 加载状态
  - `showError` / `showSuccess`: 消息提示
  - `copyToClipboard`: 复制到剪贴板
  - `generateId`: 生成唯一ID
  - `deepClone`: 深拷贝
  - `mergeObjects`: 合并对象
  - `formatNumber`: 格式化数字
  - `truncateText`: 截断文本

#### storage.js
- **用途**: 本地存储管理
- **导出**:
  - `StorageManager`: 存储管理器
    - `save(key, data)`: 保存数据
    - `load(key, defaultValue)`: 读取数据
    - `remove(key)`: 删除数据
    - `clear()`: 清空所有数据
  - `SearchHistory`: 搜索历史管理
    - `add(keyword)`: 添加搜索记录
    - `get()`: 获取搜索历史
    - `clear()`: 清空搜索历史

### 导航模块 (modules/navigation/)

#### router.js
- **用途**: 页面路由管理
- **导出**: `Router` 对象
  - `init()`: 初始化路由
  - `navigateTo(page, pushState)`: 导航到指定页面
  - `goBack()`: 返回上一页
  - `getCurrentPage()`: 获取当前页面
  - `onPageChange(callback)`: 监听页面切换

#### city-selector.js
- **用途**: 城市和地区选择
- **导出**: `CitySelector` 对象
  - `init()`: 初始化选择器
  - `getCurrentCity()`: 获取当前城市
  - `getCurrentDistrict()`: 获取当前地区
  - `getLocation()`: 获取完整位置信息
  - `onChange(callback)`: 监听变更

### 功能模块 (modules/)

#### married/marriage-registration.js
- **用途**: 结婚登记相关功能
- **导出**: `MarriageRegistration` 对象
  - `init()`: 初始化模块
  - `getMarriageInfo(city)`: 获取登记信息
  - `showOffices()`: 显示登记处列表
  - `openBookingModal()`: 打开预约窗口
  - `checkEligibility()`: 资格检查
  - `updateCity(city)`: 更新城市

## 主应用入口 (app.js)

### App 对象
- **用途**: 应用主控制器
- **方法**:
  - `init()`: 初始化应用
  - `getInfo()`: 获取应用信息
  - `handleCityChange(data)`: 处理城市变更

### 初始化流程
1. 加载核心模块 (config, utils, storage)
2. 初始化导航 (router, city-selector)
3. 初始化功能模块
4. 绑定全局事件

## 使用方式

### 在HTML中引用

```html
<!-- 核心模块 -->
<script src="js/core/config.js"></script>
<script src="js/core/utils.js"></script>
<script src="js/core/storage.js"></script>

<!-- 导航模块 -->
<script src="js/modules/navigation/router.js"></script>
<script src="js/modules/navigation/city-selector.js"></script>

<!-- 功能模块 -->
<script src="js/modules/married/marriage-registration.js"></script>

<!-- 主应用入口 -->
<script src="js/app.js"></script>

<!-- 原有脚本（保持兼容） -->
<script src="js/script.js"></script>
```

### 在模块中使用

```javascript
// 使用工具函数
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');

// 使用存储管理器
StorageManager.save('userPreference', { theme: 'dark' });
const preference = StorageManager.load('userPreference', {});

// 使用城市选择器
CitySelector.onChange((data) => {
    console.log('城市变更为:', data.city);
});

// 使用路由器
Router.navigateTo('married');
```

## 开发规范

### 模块定义
```javascript
const ModuleName = {
    // 属性
    prop: 'value',
    
    // 方法
    method() {
        // 实现
    },
    
    // 初始化
    init() {
        this.bindEvents();
    },
    
    // 事件绑定
    bindEvents() {
        // 绑定事件
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModuleName;
}
```

### 命名规范
- **文件**: 小写，连字符分隔 (e.g., `city-selector.js`)
- **模块**: 大驼峰 (e.g., `CitySelector`)
- **方法**: 小驼峰 (e.g., `getCurrentCity`)
- **常量**: 全大写 (e.g., `CityList`)

### 注释规范
```javascript
/**
 * 函数描述
 * @param {string} param1 - 参数1说明
 * @param {number} param2 - 参数2说明
 * @returns {boolean} 返回值说明
 */
```

## 迁移指南

### 从旧架构迁移
1. 逐步将功能从 `script.js` 迁移到对应模块
2. 使用新的工具函数替换旧代码
3. 使用 `StorageManager` 替换直接的 localStorage 操作
4. 使用 `Router` 进行页面导航
5. 使用 `CitySelector` 进行城市选择

### 兼容性
- 原有 `script.js` 继续保留，确保功能正常
- 新模块与旧代码可以共存
- 逐步迁移，无需一次性完成

## 未来扩展

### 计划中的模块
- `modules/wedding/wedding-planner.js` - 婚礼筹备
- `modules/registry/household-registry.js` - 户口办理
- `modules/service/birth-service.js` - 生育服务
- `modules/insurance/maternity-insurance.js` - 生育保险
- `modules/faq/faq-manager.js` - 常见问题
- `modules/search/search-engine.js` - 搜索引擎
- `modules/compare/policy-compare.js` - 政策对比

### 计划中的数据层
- `data/policy-data.js` - 政策数据管理
- `data/user-data.js` - 用户数据管理
- `data/api-client.js` - API客户端

## 版本历史

### v2.0.0 (2025-03-11)
- 引入模块化架构
- 创建核心模块 (config, utils, storage)
- 创建导航模块 (router, city-selector)
- 创建结婚登记模块
- 创建主应用入口
