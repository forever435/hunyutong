/**
 * 配置模块 - 全局配置和常量
 */

const AppConfig = {
    // 应用信息
    name: '婚育通',
    version: '2.0.0',
    
    // 默认城市
    defaultCity: '北京',
    
    // 默认地区
    defaultDistrict: '朝阳区',
    
    // 分页配置
    pagination: {
        defaultPageSize: 10,
        maxPageSize: 50
    },
    
    // 搜索配置
    search: {
        debounceTime: 300,
        minQueryLength: 2,
        maxQueryLength: 100
    },
    
    // 动画配置
    animation: {
        duration: 300,
        easing: 'ease-in-out'
    },
    
    // 地图配置
    map: {
        defaultZoom: 12,
        maxZoom: 18,
        minZoom: 5
    },
    
    // API配置
    api: {
        timeout: 10000,
        retryCount: 3
    },
    
    // 缓存配置
    cache: {
        defaultTTL: 3600000, // 1小时
        maxSize: 100
    }
};

// 城市列表
const CityList = [
    '北京', '上海', '广州', '深圳', '杭州', '南京', '成都', '武汉',
    '西安', '重庆', '天津', '苏州', '长沙', '郑州', '沈阳', '青岛',
    '宁波', '东莞', '无锡', '佛山', '合肥', '大连', '福州', '厦门',
    '哈尔滨', '济南', '温州', '南宁', '长春', '泉州', '石家庄', '贵阳',
    '南昌', '金华', '常州', '珠海', '惠州', '嘉兴', '南通', '中山',
    '太原', '保定', '兰州', '台州', '徐州', '绍兴', '烟台', '廊坊'
];

// 地区列表（按城市）
const DistrictList = {
    '北京': ['朝阳区', '海淀区', '西城区', '东城区', '丰台区', '石景山区', '通州区', '昌平区', '大兴区', '顺义区'],
    '上海': ['浦东新区', '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区'],
    '广州': ['天河区', '越秀区', '海珠区', '荔湾区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '增城区'],
    '深圳': ['福田区', '罗湖区', '南山区', '宝安区', '龙岗区', '盐田区', '龙华区', '坪山区', '光明区'],
    '杭州': ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区'],
    '南京': ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水区'],
    '成都': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '双流区'],
    '武汉': ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区']
};

// 服务类型
const ServiceTypes = {
    MARRIAGE: '结婚登记',
    WEDDING: '婚礼筹备',
    REGISTRY: '户口办理',
    SERVICE: '生育服务',
    INSURANCE: '生育保险',
    FAQ: '常见问题'
};

// 页面路由
const Routes = {
    HOME: 'home',
    MARRIAGE: 'married',
    WEDDING: 'wedding',
    REGISTRY: 'registry',
    SERVICE: 'service',
    INSURANCE: 'insurance',
    FAQ: 'faq',
    SEARCH: 'search',
    COMPARE: 'compare'
};

// 主题配置（与 css/styles.css 的 CSS 变量保持一致）
const Themes = {
    light: {
        primary: '#E8636F',
        primaryLight: '#F28B94',
        primaryDark: '#C94D58',
        secondary: '#3B5998',
        secondaryDark: '#2D4373',
        background: '#f8f9fa',
        surface: '#ffffff',
        text: '#2D3748',
        textSecondary: '#718096',
        border: '#E2E8F0',
        success: '#48BB78',
        warning: '#F5A623',
        error: '#E53E3E',
        info: '#4299E1'
    },
    dark: {
        primary: '#F28B94',
        primaryLight: '#F5A5AC',
        primaryDark: '#E8636F',
        secondary: '#5A7FB5',
        secondaryDark: '#3B5998',
        background: '#1a1a1a',
        surface: '#2d2d2d',
        text: '#e0e0e0',
        textSecondary: '#a0a0a0',
        border: '#404040',
        success: '#68D391',
        warning: '#F6C95E',
        error: '#FC8181',
        info: '#63B3ED'
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppConfig,
        CityList,
        DistrictList,
        ServiceTypes,
        Routes,
        Themes
    };
}
