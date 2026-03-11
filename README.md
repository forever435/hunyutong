# 婚育服务综合平台

> 全国婚育政策查询与服务平台，覆盖所有省市区县

## 项目简介

婚育服务平台是一个面向婚育人群的综合服务平台，提供：
- 全国婚育政策查询（婚假、产假、育儿假、陪产假）
- 生育津贴和育儿补贴申请指南
- 婚恋匹配服务
- 婚姻登记指南
- 本地服务机构地图（腾讯地图）
- 生育保险报销模拟计算
- 广告变现系统（6个落地页）
- 用户系统（注册登录、收藏、历史）
- 数据统计分析看板

## 技术栈

- HTML5 / CSS3 / JavaScript (ES6+)
- Font Awesome 6.4.0（图标）
- 腾讯地图 API（地图服务）
- LocalStorage（本地存储）
- PWA（可安装为手机APP）

## 项目结构

```
├── index.html              # 主页面
├── manifest.json           # PWA配置
├── service-worker.js       # PWA离线支持
├── robots.txt              # SEO爬虫规则
├── sitemap.xml             # SEO网站地图
├── css/
│   ├── styles.css          # 主样式
│   ├── map-styles.css      # 地图样式
│   └── accessibility.css   # 无障碍样式
├── js/
│   ├── script.js           # 主脚本（导航、政策查询、匹配等）
│   ├── user-system.js      # 用户注册登录系统
│   ├── analytics.js        # 数据统计分析
│   ├── accessibility.js    # 无障碍功能
│   ├── tencent-map.js      # 腾讯地图集成
│   ├── city-coords.js      # 城市坐标数据
│   ├── all-districts.js    # 全国区县数据
│   ├── policy-data-2025.js # 政策数据
│   ├── policy-data-extended.js # 扩展政策数据
│   ├── policy-helper.js    # 政策查询辅助函数
│   ├── pwa-install.js      # PWA安装引导
│   └── ux-enhancements.js  # 用户体验增强
├── ads/                    # 广告落地页（6个）
├── icons/                  # PWA图标
├── docs/                   # 项目文档
└── hunyutong-fullstack/    # 全栈版本（Node.js + MySQL）
```

## 快速开始

```bash
# 方式1：直接打开
open index.html

# 方式2：本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

## 两个版本

| | 静态版本 | 全栈版本 |
|---|---|---|
| 位置 | 根目录 index.html | hunyutong-fullstack/ |
| 数据 | 写死在JS中 | MySQL数据库 |
| 部署 | 静态托管（免费） | 需要云服务器 |
| 适合 | 演示、PWA | 商业运营 |

## 商业模式

- 横幅广告 / 侧边广告
- 商家入驻（月子中心、婚纱摄影、保险等）
- 按点击付费广告
- 增值服务

## 许可证

MIT License
