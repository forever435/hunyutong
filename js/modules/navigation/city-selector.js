/**
 * 城市选择器模块 - 城市和地区选择功能
 */

const CitySelector = {
    // 当前选中的城市
    currentCity: '北京',
    
    // 当前选中的地区
    currentDistrict: '朝阳区',
    
    // 城市变更监听器
    listeners: [],

    /**
     * 初始化城市选择器
     */
    init() {
        // 从本地存储加载保存的城市
        const savedCity = StorageManager.load('selectedCity');
        const savedDistrict = StorageManager.load('selectedDistrict');
        
        if (savedCity && CityList.includes(savedCity)) {
            this.currentCity = savedCity;
        }
        
        if (savedDistrict) {
            this.currentDistrict = savedDistrict;
        }

        // 初始化UI
        this.initUI();
        
        // 绑定事件
        this.bindEvents();
        
        // 更新显示
        this.updateDisplay();
    },

    /**
     * 初始化UI
     */
    initUI() {
        // 创建城市选择器模态框
        this.createModal();
    },

    /**
     * 创建城市选择模态框
     */
    createModal() {
        // 检查是否已存在
        if (document.getElementById('city-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'city-modal';
        modal.className = 'modal city-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-map-marker-alt"></i> 选择城市</h3>
                    <button class="modal-close" aria-label="关闭">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="city-search">
                        <input type="text" id="city-search-input" placeholder="搜索城市..." autocomplete="off">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="city-current">
                        <span class="label">当前城市：</span>
                        <span class="city-name" id="current-city-display">${this.currentCity}</span>
                    </div>
                    <div class="city-hot">
                        <h4>热门城市</h4>
                        <div class="city-tags" id="hot-cities">
                            ${this.getHotCitiesHTML()}
                        </div>
                    </div>
                    <div class="city-list-container">
                        <h4>全部城市</h4>
                        <div class="city-list" id="all-cities">
                            ${this.getAllCitiesHTML()}
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 创建地区选择模态框
        this.createDistrictModal();
    },

    /**
     * 创建地区选择模态框
     */
    createDistrictModal() {
        // 检查是否已存在
        if (document.getElementById('district-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'district-modal';
        modal.className = 'modal district-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-map-pin"></i> 选择地区</h3>
                    <button class="modal-close" aria-label="关闭">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="district-current">
                        <span class="label">当前城市：</span>
                        <span class="city-name" id="district-city-display">${this.currentCity}</span>
                    </div>
                    <div class="district-list" id="district-list">
                        ${this.getDistrictsHTML()}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    },

    /**
     * 获取热门城市HTML
     * @returns {string} HTML字符串
     */
    getHotCitiesHTML() {
        const hotCities = ['北京', '上海', '广州', '深圳', '杭州', '南京', '成都', '武汉'];
        return hotCities.map(city => `
            <button class="city-tag ${city === this.currentCity ? 'active' : ''}" data-city="${city}">
                ${city}
            </button>
        `).join('');
    },

    /**
     * 获取所有城市HTML
     * @returns {string} HTML字符串
     */
    getAllCitiesHTML() {
        return CityList.map(city => `
            <button class="city-item ${city === this.currentCity ? 'active' : ''}" data-city="${city}">
                ${city}
            </button>
        `).join('');
    },

    /**
     * 获取地区列表HTML
     * @returns {string} HTML字符串
     */
    getDistrictsHTML() {
        const districts = DistrictList[this.currentCity] || ['全市'];
        return districts.map(district => `
            <button class="district-item ${district === this.currentDistrict ? 'active' : ''}" data-district="${district}">
                ${district}
            </button>
        `).join('');
    },

    /**
     * 绑定事件
     */
    bindEvents() {
        // 城市选择按钮
        const cityBtn = document.getElementById('city-selector-btn');
        if (cityBtn) {
            cityBtn.addEventListener('click', () => this.openCityModal());
        }

        // 地区选择按钮
        const districtBtn = document.getElementById('district-selector-btn');
        if (districtBtn) {
            districtBtn.addEventListener('click', () => this.openDistrictModal());
        }

        // 模态框关闭按钮
        document.addEventListener('click', (e) => {
            if (e.target.closest('.modal-close')) {
                this.closeAllModals();
            }
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });

        // 城市选择
        document.addEventListener('click', (e) => {
            const cityBtn = e.target.closest('[data-city]');
            if (cityBtn) {
                const city = cityBtn.dataset.city;
                this.selectCity(city);
            }
        });

        // 地区选择
        document.addEventListener('click', (e) => {
            const districtBtn = e.target.closest('[data-district]');
            if (districtBtn) {
                const district = districtBtn.dataset.district;
                this.selectDistrict(district);
            }
        });

        // 城市搜索
        const searchInput = document.getElementById('city-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                this.searchCities(e.target.value);
            }, 300));
        }
    },

    /**
     * 打开城市选择模态框
     */
    openCityModal() {
        const modal = document.getElementById('city-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * 打开地区选择模态框
     */
    openDistrictModal() {
        // 更新地区列表
        this.updateDistrictList();
        
        const modal = document.getElementById('district-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * 关闭所有模态框
     */
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    },

    /**
     * 选择城市
     * @param {string} city - 城市名称
     */
    selectCity(city) {
        if (city === this.currentCity) {
            this.closeAllModals();
            return;
        }

        this.currentCity = city;
        
        // 重置地区为第一个
        const districts = DistrictList[city] || ['全市'];
        this.currentDistrict = districts[0];

        // 保存到本地存储
        StorageManager.save('selectedCity', city);
        StorageManager.save('selectedDistrict', this.currentDistrict);

        // 更新UI
        this.updateDisplay();
        this.closeAllModals();

        // 通知监听器
        this.notifyListeners({
            city: this.currentCity,
            district: this.currentDistrict,
            type: 'cityChange'
        });

        // 显示提示
        showSuccess(`已切换到 ${city}`);
    },

    /**
     * 选择地区
     * @param {string} district - 地区名称
     */
    selectDistrict(district) {
        if (district === this.currentDistrict) {
            this.closeAllModals();
            return;
        }

        this.currentDistrict = district;

        // 保存到本地存储
        StorageManager.save('selectedDistrict', district);

        // 更新UI
        this.updateDisplay();
        this.closeAllModals();

        // 通知监听器
        this.notifyListeners({
            city: this.currentCity,
            district: this.currentDistrict,
            type: 'districtChange'
        });

        // 显示提示
        showSuccess(`已选择 ${district}`);
    },

    /**
     * 更新显示
     */
    updateDisplay() {
        // 更新城市显示
        const cityDisplay = document.getElementById('current-city-display');
        if (cityDisplay) {
            cityDisplay.textContent = this.currentCity;
        }

        // 更新地区显示
        const districtDisplay = document.getElementById('district-city-display');
        if (districtDisplay) {
            districtDisplay.textContent = this.currentCity;
        }

        // 更新选择器按钮
        const cityBtn = document.getElementById('city-selector-btn');
        if (cityBtn) {
            cityBtn.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${this.currentCity}`;
        }

        const districtBtn = document.getElementById('district-selector-btn');
        if (districtBtn) {
            districtBtn.innerHTML = `<i class="fas fa-map-pin"></i> ${this.currentDistrict}`;
        }
    },

    /**
     * 更新地区列表
     */
    updateDistrictList() {
        const districtList = document.getElementById('district-list');
        const districtDisplay = document.getElementById('district-city-display');
        
        if (districtDisplay) {
            districtDisplay.textContent = this.currentCity;
        }
        
        if (districtList) {
            districtList.innerHTML = this.getDistrictsHTML();
        }
    },

    /**
     * 搜索城市
     * @param {string} query - 搜索关键词
     */
    searchCities(query) {
        const cityList = document.getElementById('all-cities');
        if (!cityList) return;

        if (!query.trim()) {
            cityList.innerHTML = this.getAllCitiesHTML();
            return;
        }

        const filtered = CityList.filter(city => 
            city.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            cityList.innerHTML = '<div class="no-results">未找到匹配的城市</div>';
        } else {
            cityList.innerHTML = filtered.map(city => `
                <button class="city-item ${city === this.currentCity ? 'active' : ''}" data-city="${city}">
                    ${city}
                </button>
            `).join('');
        }
    },

    /**
     * 获取当前城市
     * @returns {string} 当前城市
     */
    getCurrentCity() {
        return this.currentCity;
    },

    /**
     * 获取当前地区
     * @returns {string} 当前地区
     */
    getCurrentDistrict() {
        return this.currentDistrict;
    },

    /**
     * 获取当前位置信息
     * @returns {Object} 位置信息
     */
    getLocation() {
        return {
            city: this.currentCity,
            district: this.currentDistrict
        };
    },

    /**
     * 注册变更监听器
     * @param {Function} callback - 回调函数
     */
    onChange(callback) {
        this.listeners.push(callback);
    },

    /**
     * 通知所有监听器
     * @param {Object} data - 变更数据
     */
    notifyListeners(data) {
        this.listeners.forEach(callback => {
            try {
                callback(data);
            } catch (e) {
                console.error('城市选择器监听器错误:', e);
            }
        });
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CitySelector;
}
