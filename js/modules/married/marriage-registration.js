/**
 * 结婚登记模块 - 结婚登记相关功能
 */

const MarriageRegistration = {
    // 当前选中的城市
    currentCity: '北京',
    
    // 登记处数据缓存
    officeCache: {},

    /**
     * 初始化模块
     */
    init() {
        this.bindEvents();
        this.loadMarriageInfo();
    },

    /**
     * 绑定事件
     */
    bindEvents() {
        // 预约登记按钮
        const bookBtn = document.getElementById('marriage-book-btn');
        if (bookBtn) {
            bookBtn.addEventListener('click', () => this.openBookingModal());
        }

        // 查看登记处按钮
        const officeBtn = document.getElementById('marriage-office-btn');
        if (officeBtn) {
            officeBtn.addEventListener('click', () => this.showOffices());
        }

        // 条件检查按钮
        const checkBtn = document.getElementById('marriage-check-btn');
        if (checkBtn) {
            checkBtn.addEventListener('click', () => this.checkEligibility());
        }
    },

    /**
     * 加载结婚登记信息
     */
    loadMarriageInfo() {
        const container = document.getElementById('marriage-info-container');
        if (!container) return;

        const info = this.getMarriageInfo(this.currentCity);
        container.innerHTML = this.renderMarriageInfo(info);
    },

    /**
     * 获取结婚登记信息
     * @param {string} city - 城市名称
     * @returns {Object} 登记信息
     */
    getMarriageInfo(city) {
        // 基础信息模板
        const baseInfo = {
            conditions: [
                '男女双方自愿结婚',
 '男方年满22周岁，女方年满20周岁',
                '双方均无配偶（未婚、离婚、丧偶）',
                '双方没有直系血亲和三代以内旁系血亲关系'
            ],
            materials: [
                '本人常住户口簿',
                '本人居民身份证',
                '本人无配偶以及与对方当事人没有直系血亲和三代以内旁系血亲关系的签字声明',
                '3张2寸双方近期半身免冠合影照片'
            ],
            process: [
                { step: 1, title: '预约登记', desc: '通过网上预约或电话预约' },
                { step: 2, title: '现场办理', desc: '携带材料到婚姻登记处' },
                { step: 3, title: '填写声明', desc: '填写《申请结婚登记声明书》' },
                { step: 4, title: '审核发证', desc: '审核通过后领取结婚证' }
            ],
            fees: '免费',
            time: '周一至周五 9:00-17:00（法定节假日除外）'
        };

        // 城市特定信息
        const citySpecific = {
            '北京': {
                phone: '010-12345',
                website: 'https://mzj.beijing.gov.cn',
                notes: '可通过"北京通"APP预约'
            },
            '上海': {
                phone: '021-12345',
                website: 'https://mzj.sh.gov.cn',
                notes: '可通过"随申办"APP预约'
            },
            '广州': {
                phone: '020-12345',
                website: 'https://mzj.gz.gov.cn',
                notes: '可通过"穗好办"APP预约'
            },
            '深圳': {
                phone: '0755-12345',
                website: 'https://mzj.sz.gov.cn',
                notes: '可通过"i深圳"APP预约'
            }
        };

        return {
            ...baseInfo,
            city: city,
            ...citySpecific[city]
        };
    },

    /**
     * 渲染结婚登记信息
     * @param {Object} info - 登记信息
     * @returns {string} HTML字符串
     */
    renderMarriageInfo(info) {
        return `
            <div class="marriage-info-card">
                <div class="info-section">
                    <h4><i class="fas fa-check-circle"></i> 登记条件</h4>
                    <ul class="condition-list">
                        ${info.conditions.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4><i class="fas fa-file-alt"></i> 所需材料</h4>
                    <ul class="material-list">
                        ${info.materials.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4><i class="fas fa-list-ol"></i> 办理流程</h4>
                    <div class="process-steps">
                        ${info.process.map(p => `
                            <div class="process-step">
                                <div class="step-number">${p.step}</div>
                                <div class="step-content">
                                    <h5>${p.title}</h5>
                                    <p>${p.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="info-section">
                    <h4><i class="fas fa-info-circle"></i> 其他信息</h4>
                    <div class="other-info">
                        <p><strong>收费标准：</strong>${info.fees}</p>
                        <p><strong>办理时间：</strong>${info.time}</p>
                        ${info.phone ? `<p><strong>咨询电话：</strong><a href="tel:${info.phone}">${info.phone}</a></p>` : ''}
                        ${info.website ? `<p><strong>官方网站：</strong><a href="${info.website}" target="_blank">${info.website}</a></p>` : ''}
                        ${info.notes ? `<p><strong>备注：</strong>${info.notes}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * 显示登记处列表
     */
    showOffices() {
        const modal = document.createElement('div');
        modal.className = 'modal office-modal active';
        modal.id = 'office-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-building"></i> ${this.currentCity}婚姻登记处</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="office-list" id="office-list">
                        ${this.renderOfficeList()}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // 绑定关闭事件
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    },

    /**
     * 渲染登记处列表
     * @returns {string} HTML字符串
     */
    renderOfficeList() {
        const offices = this.getOffices(this.currentCity);
        
        if (offices.length === 0) {
            return '<div class="no-data">暂无登记处信息</div>';
        }

        return offices.map(office => `
            <div class="office-item">
                <div class="office-info">
                    <h4>${office.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${office.address}</p>
                    <p><i class="fas fa-phone"></i> <a href="tel:${office.phone}">${office.phone}</a></p>
                    <p><i class="fas fa-clock"></i> ${office.hours}</p>
                </div>
                <div class="office-actions">
                    <button class="btn btn-primary btn-sm" onclick="MarriageRegistration.getDirections('${office.address}')">
                        <i class="fas fa-directions"></i> 导航
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="MarriageRegistration.callOffice('${office.phone}')">
                        <i class="fas fa-phone"></i> 拨打
                    </button>
                </div>
            </div>
        `).join('');
    },

    /**
     * 获取登记处列表
     * @param {string} city - 城市名称
     * @returns {Array} 登记处列表
     */
    getOffices(city) {
        // 模拟数据，实际应从API获取
        const offices = {
            '北京': [
                { name: '北京市民政局婚姻登记处', address: '北京市朝阳区工体东路20号', phone: '010-65862999', hours: '周一至周五 9:00-17:00' },
                { name: '朝阳区民政局婚姻登记处', address: '北京市朝阳区广渠路28号院', phone: '010-58691628', hours: '周一至周五 9:00-17:00' },
                { name: '海淀区民政局婚姻登记处', address: '北京市海淀区科学院南路31号', phone: '010-62615167', hours: '周一至周五 9:00-17:00' }
            ],
            '上海': [
                { name: '上海市民政局婚姻登记处', address: '上海市黄浦区江西中路215号', phone: '021-63239999', hours: '周一至周五 9:00-17:00' },
                { name: '浦东新区民政局婚姻登记处', address: '上海市浦东新区浦东南路2240号', phone: '021-58802555', hours: '周一至周五 9:00-17:00' }
            ],
            '广州': [
                { name: '广州市民政局婚姻登记处', address: '广州市越秀区越华路118号', phone: '020-83178713', hours: '周一至周五 9:00-17:00' },
                { name: '天河区民政局婚姻登记处', address: '广州市天河区黄埔大道中256号', phone: '020-85650666', hours: '周一至周五 9:00-17:00' }
            ],
            '深圳': [
                { name: '深圳市民政局婚姻登记处', address: '深圳市福田区笋岗西路3002号', phone: '0755-82407833', hours: '周一至周五 9:00-17:00' },
                { name: '福田区民政局婚姻登记处', address: '深圳市福田区福民路123号', phone: '0755-82928033', hours: '周一至周五 9:00-17:00' }
            ]
        };

        return offices[city] || [];
    },

    /**
     * 打开预约模态框
     */
    openBookingModal() {
        const modal = document.createElement('div');
        modal.className = 'modal booking-modal active';
        modal.id = 'booking-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-calendar-check"></i> 预约结婚登记</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="booking-form" class="booking-form">
                        <div class="form-group">
                            <label>选择登记处</label>
                            <select id="booking-office" required>
                                <option value="">请选择登记处</option>
                                ${this.getOffices(this.currentCity).map(o => `
                                    <option value="${o.name}">${o.name}</option>
                                `).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>预约日期</label>
                            <input type="date" id="booking-date" required min="${this.getMinDate()}">
                        </div>
                        <div class="form-group">
                            <label>预约时段</label>
                            <select id="booking-time" required>
                                <option value="">请选择时段</option>
                                <option value="09:00-10:00">09:00-10:00</option>
                                <option value="10:00-11:00">10:00-11:00</option>
                                <option value="11:00-12:00">11:00-12:00</option>
                                <option value="14:00-15:00">14:00-15:00</option>
                                <option value="15:00-16:00">15:00-16:00</option>
                                <option value="16:00-17:00">16:00-17:00</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>男方姓名</label>
                            <input type="text" id="booking-male-name" required placeholder="请输入男方姓名">
                        </div>
                        <div class="form-group">
                            <label>男方身份证号</label>
                            <input type="text" id="booking-male-id" required placeholder="请输入男方身份证号" pattern="\\d{17}[\\dXx]">
                        </div>
                        <div class="form-group">
                            <label>女方姓名</label>
                            <input type="text" id="booking-female-name" required placeholder="请输入女方姓名">
                        </div>
                        <div class="form-group">
                            <label>女方身份证号</label>
                            <input type="text" id="booking-female-id" required placeholder="请输入女方身份证号" pattern="\\d{17}[\\dXx]">
                        </div>
                        <div class="form-group">
                            <label>联系电话</label>
                            <input type="tel" id="booking-phone" required placeholder="请输入联系电话">
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary btn-block">
                                <i class="fas fa-check"></i> 确认预约
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // 绑定表单提交
        const form = document.getElementById('booking-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitBooking(form);
        });

        // 绑定关闭事件
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    },

    /**
     * 提交预约
     * @param {HTMLFormElement} form - 表单元素
     */
    submitBooking(form) {
        const formData = new FormData(form);
        const bookingData = {
            office: formData.get('booking-office'),
            date: formData.get('booking-date'),
            time: formData.get('booking-time'),
            maleName: document.getElementById('booking-male-name').value,
            maleId: document.getElementById('booking-male-id').value,
            femaleName: document.getElementById('booking-female-name').value,
            femaleId: document.getElementById('booking-female-id').value,
            phone: document.getElementById('booking-phone').value,
            city: this.currentCity,
            bookingTime: new Date().toISOString()
        };

        // 保存预约信息
        const bookings = StorageManager.load('marriageBookings', []);
        bookings.push(bookingData);
        StorageManager.save('marriageBookings', bookings);

        // 关闭模态框
        document.getElementById('booking-modal').remove();
        document.body.style.overflow = '';

        // 显示成功消息
        showSuccess('预约成功！请按时前往办理');

        // 发送确认短信（模拟）
        console.log('发送预约确认短信到:', bookingData.phone);
    },

    /**
     * 检查资格
     */
    checkEligibility() {
        const modal = document.createElement('div');
        modal.className = 'modal eligibility-modal active';
        modal.id = 'eligibility-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-clipboard-check"></i> 结婚登记条件自查</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="eligibility-checker">
                        <div class="check-item">
                            <label class="checkbox-label">
                                <input type="checkbox" id="check-age">
                                <span class="check-text">男方年满22周岁，女方年满20周岁</span>
                            </label>
                        </div>
                        <div class="check-item">
                            <label class="checkbox-label">
                                <input type="checkbox" id="check-voluntary">
                                <span class="check-text">双方自愿结婚</span>
                            </label>
                        </div>
                        <div class="check-item">
                            <label class="checkbox-label">
                                <input type="checkbox" id="check-single">
                                <span class="check-text">双方均无配偶（未婚、离婚、丧偶）</span>
                            </label>
                        </div>
                        <div class="check-item">
                            <label class="checkbox-label">
                                <input type="checkbox" id="check-relationship">
                                <span class="check-text">双方没有直系血亲和三代以内旁系血亲关系</span>
                            </label>
                        </div>
                        <div class="check-result" id="check-result"></div>
                        <button class="btn btn-primary btn-block" onclick="MarriageRegistration.calculateEligibility()">
                            <i class="fas fa-calculator"></i> 检查资格
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // 绑定关闭事件
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    },

    /**
     * 计算资格
     */
    calculateEligibility() {
        const checks = [
            document.getElementById('check-age').checked,
            document.getElementById('check-voluntary').checked,
            document.getElementById('check-single').checked,
            document.getElementById('check-relationship').checked
        ];

        const allChecked = checks.every(c => c);
        const resultDiv = document.getElementById('check-result');

        if (allChecked) {
            resultDiv.innerHTML = `
                <div class="result-success">
                    <i class="fas fa-check-circle"></i>
                    <p>恭喜！您符合结婚登记条件</p>
                    <button class="btn btn-primary" onclick="document.getElementById('eligibility-modal').remove(); MarriageRegistration.openBookingModal()">
                        立即预约
                    </button>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="result-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>您暂不符合结婚登记条件，请检查未勾选的项目</p>
                </div>
            `;
        }
    },

    /**
     * 获取导航
     * @param {string} address - 地址
     */
    getDirections(address) {
        const url = `https://map.baidu.com/search/${encodeURIComponent(address)}`;
        window.open(url, '_blank');
    },

    /**
     * 拨打电话
     * @param {string} phone - 电话号码
     */
    callOffice(phone) {
        window.location.href = `tel:${phone}`;
    },

    /**
     * 获取最小日期（明天）
     * @returns {string} 日期字符串
     */
    getMinDate() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    },

    /**
     * 更新城市
     * @param {string} city - 城市名称
     */
    updateCity(city) {
        this.currentCity = city;
        this.loadMarriageInfo();
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarriageRegistration;
}
