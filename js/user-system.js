// 用户系统 - 注册、登录、个人中心

class UserSystem {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // 从localStorage加载用户信息
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            window.currentUser = this.currentUser;
            this.updateUIForLoggedInUser();
        }

        // 绑定事件
        this.bindEvents();
    }

    bindEvents() {
        // 登录按钮
        const userBtn = document.getElementById('userBtn');
        if (userBtn) {
            userBtn.addEventListener('click', () => {
                if (this.currentUser) {
                    this.showUserCenter();
                } else {
                    this.showLoginModal();
                }
            });
        }
    }

    // 显示登录模态框
    showLoginModal() {
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.classList.add('show');
            this.initAuthModal();
        }
    }

    // 初始化登录/注册模态框
    initAuthModal() {
        const authModal = document.getElementById('authModal');
        const closeBtn = authModal.querySelector('.close');
        const sendCodeBtn = document.getElementById('sendCodeBtn');
        const authSubmitBtn = document.getElementById('authSubmitBtn');
        const phoneInput = document.getElementById('authPhone');
        const codeInput = document.getElementById('authCode');

        // 关闭按钮
        closeBtn.onclick = () => {
            authModal.classList.remove('show');
        };

        // 发送验证码
        let countdown = 0;
        sendCodeBtn.onclick = () => {
            const phone = phoneInput.value.trim();
            
            if (!this.validatePhone(phone)) {
                this.showError('phoneError', '请输入正确的手机号');
                return;
            }

            if (countdown > 0) return;

            // 模拟发送验证码
            this.sendVerificationCode(phone);
            
            // 倒计时
            countdown = 60;
            sendCodeBtn.disabled = true;
            const timer = setInterval(() => {
                countdown--;
                sendCodeBtn.textContent = `${countdown}秒后重发`;
                if (countdown <= 0) {
                    clearInterval(timer);
                    sendCodeBtn.disabled = false;
                    sendCodeBtn.textContent = '发送验证码';
                }
            }, 1000);
        };

        // 提交登录
        authSubmitBtn.onclick = () => {
            const phone = phoneInput.value.trim();
            const code = codeInput.value.trim();

            if (!this.validatePhone(phone)) {
                this.showError('phoneError', '请输入正确的手机号');
                return;
            }

            if (!code || code.length !== 6) {
                this.showError('codeError', '请输入6位验证码');
                return;
            }

            // 验证验证码
            if (this.verifyCode(phone, code)) {
                this.login(phone);
                authModal.classList.remove('show');
                this.showToast('登录成功', 'success');
            } else {
                this.showError('codeError', '验证码错误');
            }
        };

        // 清除错误提示
        phoneInput.addEventListener('input', () => {
            this.showError('phoneError', '');
        });
        codeInput.addEventListener('input', () => {
            this.showError('codeError', '');
        });
    }

    // 验证手机号
    validatePhone(phone) {
        return /^1[3-9]\d{9}$/.test(phone);
    }

    // 发送验证码（模拟）
    sendVerificationCode(phone) {
        // 实际项目中需要调用后端API
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        
        // 保存验证码到sessionStorage（实际应该在后端）
        sessionStorage.setItem(`code_${phone}`, code);
        sessionStorage.setItem(`code_time_${phone}`, Date.now());
        
        console.log(`验证码已发送到 ${phone}: ${code}`);
        this.showToast(`验证码：${code}（演示用）`, 'info');
    }

    // 验证验证码
    verifyCode(phone, code) {
        const savedCode = sessionStorage.getItem(`code_${phone}`);
        const codeTime = sessionStorage.getItem(`code_time_${phone}`);
        
        // 检查验证码是否过期（5分钟）
        if (Date.now() - parseInt(codeTime) > 5 * 60 * 1000) {
            return false;
        }
        
        return savedCode === code;
    }

    // 登录
    login(phone) {
        // 检查用户是否已存在
        let users = JSON.parse(localStorage.getItem('users') || '{}');
        
        if (!users[phone]) {
            // 新用户注册
            users[phone] = {
                phone: phone,
                nickname: `用户${phone.substr(-4)}`,
                avatar: this.generateAvatar(phone),
                registerTime: Date.now(),
                favorites: [],
                viewHistory: []
            };
            localStorage.setItem('users', JSON.stringify(users));
        }

        // 设置当前用户
        this.currentUser = users[phone];
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        // 同步全局变量（供script.js使用）
        window.currentUser = this.currentUser;
        
        // 更新UI
        this.updateUIForLoggedInUser();
        
        // 记录登录统计
        this.recordLogin();
    }

    // 生成头像
    generateAvatar(phone) {
        const colors = ['#ff9eb5', '#a8d8ea', '#ffd4e5', '#c5e3f0', '#ffb3c6'];
        const index = parseInt(phone.substr(-1)) % colors.length;
        return colors[index];
    }

    // 更新UI为登录状态
    updateUIForLoggedInUser() {
        const userBtn = document.getElementById('userBtn');
        if (userBtn && this.currentUser) {
            userBtn.innerHTML = `<i class="fas fa-user"></i> ${this.currentUser.nickname}`;
            userBtn.classList.add('logged-in');
        }

        // 显示收藏的政策
        this.updateFavorites();
    }

    // 显示用户中心
    showUserCenter() {
        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3><i class="fas fa-user-circle"></i> 个人中心</h3>
                
                <div style="text-align: center; margin: 2rem 0;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: ${this.currentUser.avatar}; 
                                margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; 
                                color: white; font-size: 2rem;">
                        <i class="fas fa-user"></i>
                    </div>
                    <h4>${this.currentUser.nickname}</h4>
                    <p style="color: #999;">${this.currentUser.phone}</p>
                </div>

                <div class="user-menu">
                    <button class="user-menu-item" onclick="userSystem.showFavorites()">
                        <i class="fas fa-star"></i> 我的收藏 (${this.currentUser.favorites.length})
                    </button>
                    <button class="user-menu-item" onclick="userSystem.showHistory()">
                        <i class="fas fa-history"></i> 浏览历史 (${this.currentUser.viewHistory.length})
                    </button>
                    <button class="user-menu-item" onclick="userSystem.editProfile()">
                        <i class="fas fa-edit"></i> 编辑资料
                    </button>
                    <button class="user-menu-item" onclick="userSystem.logout()">
                        <i class="fas fa-sign-out-alt"></i> 退出登录
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 关闭按钮
        modal.querySelector('.close').onclick = () => {
            modal.remove();
        };

        // 点击外部关闭
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
    }

    // 显示收藏
    showFavorites() {
        // 关闭当前模态框
        document.querySelectorAll('.modal').forEach(m => m.remove());

        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3><i class="fas fa-star"></i> 我的收藏</h3>
                <div id="favoritesList" style="max-height: 400px; overflow-y: auto;">
                    ${this.renderFavorites()}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // 渲染收藏列表
    renderFavorites() {
        if (this.currentUser.favorites.length === 0) {
            return '<p style="text-align: center; color: #999; padding: 2rem;">暂无收藏</p>';
        }

        return this.currentUser.favorites.map(item => `
            <div class="favorite-item" style="padding: 1rem; border-bottom: 1px solid #eee;">
                <h4>${item.title}</h4>
                <p style="color: #666; font-size: 0.9rem;">${item.region}</p>
                <button class="btn-small btn-secondary" onclick="userSystem.removeFavorite('${item.id}')">
                    取消收藏
                </button>
            </div>
        `).join('');
    }

    // 添加收藏
    addFavorite(item) {
        if (!this.currentUser) {
            this.showToast('请先登录', 'error');
            this.showLoginModal();
            return;
        }

        // 检查是否已收藏
        const exists = this.currentUser.favorites.find(f => f.id === item.id);
        if (exists) {
            this.showToast('已经收藏过了', 'info');
            return;
        }

        this.currentUser.favorites.push({
            id: item.id,
            title: item.title,
            region: item.region,
            time: Date.now()
        });

        this.saveUser();
        this.showToast('收藏成功', 'success');
        this.updateFavorites();
    }

    // 取消收藏
    removeFavorite(id) {
        this.currentUser.favorites = this.currentUser.favorites.filter(f => f.id !== id);
        this.saveUser();
        this.showToast('已取消收藏', 'success');
        this.showFavorites();
    }

    // 更新收藏显示
    updateFavorites() {
        const savedSection = document.getElementById('savedPolicies');
        if (savedSection && this.currentUser && this.currentUser.favorites.length > 0) {
            savedSection.style.display = 'block';
            const list = document.getElementById('savedPoliciesList');
            if (list) {
                list.innerHTML = this.renderFavorites();
            }
        }
    }

    // 添加浏览历史
    addToHistory(item) {
        if (!this.currentUser) return;

        // 移除重复项
        this.currentUser.viewHistory = this.currentUser.viewHistory.filter(h => h.id !== item.id);
        
        // 添加到开头
        this.currentUser.viewHistory.unshift({
            id: item.id,
            title: item.title,
            region: item.region,
            time: Date.now()
        });

        // 只保留最近50条
        if (this.currentUser.viewHistory.length > 50) {
            this.currentUser.viewHistory = this.currentUser.viewHistory.slice(0, 50);
        }

        this.saveUser();
    }

    // 显示浏览历史
    showHistory() {
        document.querySelectorAll('.modal').forEach(m => m.remove());

        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3><i class="fas fa-history"></i> 浏览历史</h3>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${this.renderHistory()}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // 渲染历史记录
    renderHistory() {
        if (this.currentUser.viewHistory.length === 0) {
            return '<p style="text-align: center; color: #999; padding: 2rem;">暂无浏览记录</p>';
        }

        return this.currentUser.viewHistory.map(item => `
            <div style="padding: 1rem; border-bottom: 1px solid #eee;">
                <h4>${item.title}</h4>
                <p style="color: #666; font-size: 0.9rem;">${item.region}</p>
                <p style="color: #999; font-size: 0.85rem;">${this.formatTime(item.time)}</p>
            </div>
        `).join('');
    }

    // 编辑资料
    editProfile() {
        document.querySelectorAll('.modal').forEach(m => m.remove());

        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3><i class="fas fa-edit"></i> 编辑资料</h3>
                <div class="form-group">
                    <label>昵称</label>
                    <input type="text" id="editNickname" class="input" value="${this.currentUser.nickname}">
                </div>
                <button class="btn btn-primary" onclick="userSystem.saveProfile()">保存</button>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.close').onclick = () => modal.remove();
    }

    // 保存资料
    saveProfile() {
        const nickname = document.getElementById('editNickname').value.trim();
        if (nickname) {
            this.currentUser.nickname = nickname;
            this.saveUser();
            this.updateUIForLoggedInUser();
            this.showToast('保存成功', 'success');
            document.querySelectorAll('.modal').forEach(m => m.remove());
        }
    }

    // 退出登录
    logout() {
        if (confirm('确定要退出登录吗？')) {
            this.currentUser = null;
            window.currentUser = null;
            localStorage.removeItem('currentUser');
            
            const userBtn = document.getElementById('userBtn');
            if (userBtn) {
                userBtn.innerHTML = '<i class="fas fa-user"></i> 登录';
                userBtn.classList.remove('logged-in');
            }

            document.querySelectorAll('.modal').forEach(m => m.remove());
            this.showToast('已退出登录', 'success');
            
            // 隐藏收藏区域
            const savedSection = document.getElementById('savedPolicies');
            if (savedSection) {
                savedSection.style.display = 'none';
            }
        }
    }

    // 保存用户信息
    saveUser() {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        let users = JSON.parse(localStorage.getItem('users') || '{}');
        users[this.currentUser.phone] = this.currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // 记录登录统计
    recordLogin() {
        if (window.analytics) {
            window.analytics.recordEvent('user_login', {
                phone: this.currentUser.phone,
                time: Date.now()
            });
        }
    }

    // 显示错误
    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // 显示提示
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };

        toast.innerHTML = `
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // 格式化时间
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return '刚刚';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
        if (diff < 604800000) return `${Math.floor(diff / 86400000)}天前`;

        return date.toLocaleDateString();
    }
}

// 初始化用户系统
let userSystem;
// 延迟初始化，确保DOM完全加载
window.addEventListener('DOMContentLoaded', () => {
    userSystem = new UserSystem();
    window.userSystem = userSystem;
    console.log('✅ 用户系统已初始化');
});
