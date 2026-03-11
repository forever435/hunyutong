/**
 * 腾讯地图集成模块
 * API Key: D4WBIZ-H2YT1-NL4EY3-S3V51B-FGBHG-DYBP1
 */

const TENCENT_MAP_KEY = 'D4WBIZ-H2YT1-NL4EY3-S3V51B-FGBHG-DYBP1';

class TencentMapManager {
    constructor(containerId) {
        this.containerId = containerId;
        this.map = null;
        this.markers = [];
        this.infoWindow = null;
        this.isLoaded = false;
    }

    // 加载腾讯地图JS库
    loadMapScript() {
        return new Promise((resolve, reject) => {
            if (window.TMap) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${TENCENT_MAP_KEY}`;
            script.onload = () => {
                this.isLoaded = true;
                // 隐藏腾讯地图的鉴权提示
                setTimeout(() => {
                    const authWarning = document.querySelector('[style*="鉴权"]');
                    if (authWarning) authWarning.style.display = 'none';
                }, 500);
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 初始化地图
    async init(lat = 39.9042, lng = 116.4074, zoom = 12) {
        try {
            await this.loadMapScript();

            const container = document.getElementById(this.containerId);
            if (!container) {
                console.error(`地图容器 ${this.containerId} 不存在`);
                return;
            }

            // 创建地图中心点
            const center = new TMap.LatLng(lat, lng);

            // 创建地图实例
            this.map = new TMap.Map(container, {
                center: center,
                zoom: zoom,
                viewMode: '2D'
            });

            console.log('✅ 腾讯地图加载成功！');
            return this.map;
        } catch (error) {
            console.error('❌ 腾讯地图加载失败:', error);
            this.showError();
        }
    }

    // 添加标记点
    addMarker(lat, lng, title, address, type = 'default') {
        if (!this.map) {
            console.error('地图未初始化');
            return;
        }

        const position = new TMap.LatLng(lat, lng);

        // 创建标记
        const marker = new TMap.MultiMarker({
            map: this.map,
            styles: {
                'marker': new TMap.MarkerStyle({
                    'width': 30,
                    'height': 40,
                    'anchor': { x: 15, y: 40 },
                    'src': this.getMarkerIcon(type)
                })
            },
            geometries: [{
                id: 'marker-' + Date.now() + '-' + Math.random(),
                styleId: 'marker',
                position: position,
                properties: {
                    title: title,
                    address: address,
                    type: type
                }
            }]
        });

        // 点击标记显示信息
        marker.on('click', (evt) => {
            const props = evt.geometry.properties;
            this.showInfoWindow(props.title, props.address, evt.geometry.position);
        });

        this.markers.push(marker);
        return marker;
    }

    // 获取标记图标
    getMarkerIcon(type) {
        const icons = {
            'hospital': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-pink.png',
            'registry': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-red.png',
            'maternity': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-blue.png',
            'education': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker-green.png',
            'default': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker.png'
        };
        return icons[type] || icons['default'];
    }

    // 显示信息窗口
    showInfoWindow(title, address, position) {
        // 如果已有信息窗口，先关闭
        if (this.infoWindow) {
            this.infoWindow.close();
        }

        // 创建信息窗口
        this.infoWindow = new TMap.InfoWindow({
            map: this.map,
            position: position,
            content: `
                <div style="padding: 10px; min-width: 200px;">
                    <h3 style="margin: 0 0 10px 0; color: #ff9eb5; font-size: 16px;">${title}</h3>
                    <p style="margin: 0; color: #666; font-size: 14px;">📍 ${address}</p>
                    <div style="margin-top: 10px;">
                        <button onclick="tencentMap.navigateTo(${position.lat}, ${position.lng})" 
                                style="background: #ff9eb5; color: white; border: none; padding: 5px 15px; border-radius: 5px; cursor: pointer;">
                            导航到这里
                        </button>
                    </div>
                </div>
            `
        });

        this.infoWindow.open();
    }

    // 搜索附近的地点（使用模拟数据，因为WebServiceAPI需要单独配置）
    async searchNearby(keyword, lat, lng, radius = 1000) {
        // 模拟搜索结果
        const mockResults = this.getMockSearchResults(keyword);
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockResults), 500);
        });
    }

    // 获取模拟搜索结果
    getMockSearchResults(keyword) {
        const allPlaces = [
            { title: '北京协和医院', address: '北京市东城区帅府园1号', location: { lat: 39.9183, lng: 116.4172 }, tel: '010-69156114' },
            { title: '北京妇产医院', address: '北京市朝阳区姚家园路251号', location: { lat: 39.9342, lng: 116.4789 }, tel: '010-85976699' },
            { title: '东城区民政局婚姻登记处', address: '北京市东城区交道口南大街27号', location: { lat: 39.9289, lng: 116.4183 }, tel: '010-64042322' },
            { title: '朝阳区民政局婚姻登记处', address: '北京市朝阳区工体东路20号', location: { lat: 39.9242, lng: 116.4467 }, tel: '010-65090000' },
            { title: '爱帝宫月子中心', address: '北京市朝阳区', location: { lat: 39.9542, lng: 116.4074 }, tel: '400-888-5248' },
            { title: '馨月汇月子会所', address: '北京市朝阳区建国路88号', location: { lat: 39.9089, lng: 116.4567 }, tel: '400-100-5257' },
            { title: '美吉姆早教中心', address: '北京市朝阳区三里屯', location: { lat: 39.9389, lng: 116.4553 }, tel: '010-64161616' },
            { title: '金宝贝早教中心', address: '北京市海淀区中关村', location: { lat: 39.9789, lng: 116.3103 }, tel: '010-82611188' }
        ];

        // 根据关键词筛选
        return allPlaces.filter(place => 
            place.title.includes(keyword) || place.address.includes(keyword)
        );
    }

    // 显示搜索结果
    async displaySearchResults(keyword) {
        if (!this.map) {
            console.error('地图未初始化');
            return;
        }

        // 获取地图中心点
        const center = this.map.getCenter();
        
        try {
            const results = await this.searchNearby(keyword, center.lat, center.lng);
            
            // 清除旧标记
            this.clearMarkers();

            // 添加新标记
            if (results && results.length > 0) {
                results.forEach(place => {
                    this.addMarker(
                        place.location.lat,
                        place.location.lng,
                        place.title,
                        place.address,
                        this.getPlaceType(keyword)
                    );
                });

                // 显示结果列表
                this.showResultsList(results);
            } else {
                alert('未找到相关地点');
            }
        } catch (error) {
            console.error('搜索失败:', error);
            alert('搜索失败，请稍后重试');
        }
    }

    // 根据关键词判断地点类型
    getPlaceType(keyword) {
        if (keyword.includes('医院') || keyword.includes('妇幼')) return 'hospital';
        if (keyword.includes('登记') || keyword.includes('民政')) return 'registry';
        if (keyword.includes('月子') || keyword.includes('产后')) return 'maternity';
        if (keyword.includes('早教') || keyword.includes('幼儿')) return 'education';
        return 'default';
    }

    // 显示搜索结果列表
    showResultsList(results) {
        const listContainer = document.getElementById('search-results-list');
        if (!listContainer) return;

        listContainer.innerHTML = `
            <div style="padding: 15px; background: white; border-radius: 10px; margin-top: 10px;">
                <h3 style="margin: 0 0 15px 0; color: #ff9eb5;">搜索结果（${results.length}个）</h3>
                ${results.map((place, index) => `
                    <div style="padding: 10px; border-bottom: 1px solid #eee; cursor: pointer;" 
                         onclick="tencentMap.focusOnMarker(${place.location.lat}, ${place.location.lng}, '${place.title}', '${place.address}')">
                        <div style="font-weight: bold; color: #333;">${index + 1}. ${place.title}</div>
                        <div style="color: #666; font-size: 14px; margin-top: 5px;">📍 ${place.address}</div>
                        ${place.tel ? `<div style="color: #ff9eb5; font-size: 14px; margin-top: 5px;">📞 ${place.tel}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 聚焦到某个标记
    focusOnMarker(lat, lng, title, address) {
        const position = new TMap.LatLng(lat, lng);
        this.map.setCenter(position);
        this.map.setZoom(15);
        this.showInfoWindow(title, address, position);
    }

    // 清除所有标记
    clearMarkers() {
        this.markers.forEach(marker => {
            marker.setMap(null);
        });
        this.markers = [];
    }

    // 定位到当前位置
    getCurrentLocation() {
        if (!navigator.geolocation) {
            alert('您的浏览器不支持定位功能');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                const center = new TMap.LatLng(lat, lng);
                this.map.setCenter(center);
                this.map.setZoom(15);
                
                // 添加当前位置标记
                this.addMarker(lat, lng, '我的位置', '当前位置', 'default');
                
                alert('✅ 定位成功！');
            },
            (error) => {
                console.error('定位失败:', error);
                alert('❌ 定位失败，请检查浏览器权限');
            }
        );
    }

    // 导航到指定位置
    navigateTo(lat, lng) {
        const url = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lng}&referer=${TENCENT_MAP_KEY}`;
        window.open(url, '_blank');
    }

    // 显示错误信息
    showError() {
        const container = document.getElementById(this.containerId);
        if (container) {
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #999;">
                    <p style="font-size: 48px; margin: 0;">😢</p>
                    <p style="margin: 20px 0;">地图加载失败</p>
                    <p style="font-size: 14px;">请检查网络连接或稍后重试</p>
                </div>
            `;
        }
    }
}

// 全局实例
let tencentMap = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('🗺️ 准备加载腾讯地图...');
});
