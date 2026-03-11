// 数据统计分析系统

class Analytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.init();
    }

    init() {
        // 记录页面访问
        this.recordPageView();
        
        // 监听点击事件
        this.trackClicks();
        
        // 监听广告点击
        this.trackAdClicks();
        
        // 记录用户行为
        this.trackUserBehavior();
        
        // 定期上报数据
        this.startReporting();
    }

    // 生成会话ID
    generateSessionId() {
        return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // 记录页面访问
    recordPageView() {
        const pageData = {
            type: 'page_view',
            url: window.location.href,
            title: document.title,
            referrer: document.referrer,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            userAgent: navigator.userAgent,
            screenSize: `${window.screen.width}x${window.screen.height}`,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`
        };

        this.saveEvent(pageData);
        console.log('📊 页面访问:', pageData);
    }

    // 追踪点击事件
    trackClicks() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, [data-track]');
            if (!target) return;

            const clickData = {
                type: 'click',
                element: target.tagName,
                text: target.textContent.trim().substring(0, 50),
                href: target.href || '',
                id: target.id || '',
                className: target.className || '',
                timestamp: Date.now(),
                sessionId: this.sessionId,
                x: e.clientX,
                y: e.clientY
            };

            this.saveEvent(clickData);
        });
    }

    // 追踪广告点击
    trackAdClicks() {
        document.querySelectorAll('.ad-container a, .ad-mock').forEach(ad => {
            ad.addEventListener('click', (e) => {
                const adData = {
                    type: 'ad_click',
                    adId: ad.closest('.ad-container')?.id || 'unknown',
                    adPosition: this.getAdPosition(ad),
                    adTitle: ad.querySelector('.ad-mock-title')?.textContent || '',
                    targetUrl: ad.href || '',
                    timestamp: Date.now(),
                    sessionId: this.sessionId
                };

                this.saveEvent(adData);
                this.recordAdConversion(adData);
                
                console.log('🎯 广告点击:', adData);
            });
        });
    }

    // 获取广告位置
    getAdPosition(element) {
        if (element.closest('.ad-banner')) return 'banner';
        if (element.closest('.ad-sidebar')) return 'sidebar';
        if (element.closest('.ad-inline')) return 'inline';
        return 'unknown';
    }

    // 记录广告转化
    recordAdConversion(adData) {
        let conversions = JSON.parse(localStorage.getItem('ad_conversions') || '{}');
        const date = new Date().toISOString().split('T')[0];
        
        if (!conversions[date]) {
            conversions[date] = {};
        }
        
        if (!conversions[date][adData.adId]) {
            conversions[date][adData.adId] = {
                clicks: 0,
                views: 0,
                conversions: 0
            };
        }
        
        conversions[date][adData.adId].clicks++;
        localStorage.setItem('ad_conversions', JSON.stringify(conversions));
    }

    // 追踪用户行为
    trackUserBehavior() {
        // 滚动深度
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = Math.floor(scrollPercent);
                
                if (maxScroll % 25 === 0) { // 每25%记录一次
                    this.saveEvent({
                        type: 'scroll',
                        depth: maxScroll,
                        timestamp: Date.now(),
                        sessionId: this.sessionId
                    });
                }
            }
        });

        // 页面停留时间
        let startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const duration = Date.now() - startTime;
            this.saveEvent({
                type: 'page_duration',
                duration: duration,
                timestamp: Date.now(),
                sessionId: this.sessionId
            });
        });

        // 表单交互
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('focus', () => {
                this.saveEvent({
                    type: 'form_interaction',
                    field: input.id || input.name || 'unknown',
                    action: 'focus',
                    timestamp: Date.now(),
                    sessionId: this.sessionId
                });
            });
        });
    }

    // 保存事件
    saveEvent(eventData) {
        let events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        events.push(eventData);
        
        // 只保留最近1000条
        if (events.length > 1000) {
            events = events.slice(-1000);
        }
        
        localStorage.setItem('analytics_events', JSON.stringify(events));
    }

    // 记录自定义事件
    recordEvent(eventName, data = {}) {
        const eventData = {
            type: 'custom_event',
            name: eventName,
            data: data,
            timestamp: Date.now(),
            sessionId: this.sessionId
        };

        this.saveEvent(eventData);
        console.log('📈 自定义事件:', eventData);
    }

    // 定期上报数据
    startReporting() {
        // 每5分钟上报一次（实际项目中应该发送到服务器）
        setInterval(() => {
            this.reportData();
        }, 5 * 60 * 1000);
    }

    // 上报数据
    reportData() {
        const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        
        if (events.length === 0) return;

        console.log('📤 上报数据:', {
            count: events.length,
            sessionId: this.sessionId,
            timestamp: Date.now()
        });

        // 实际项目中应该发送到服务器
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(events)
        // });
    }

    // 获取统计数据
    getStats() {
        const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        const conversions = JSON.parse(localStorage.getItem('ad_conversions') || '{}');

        return {
            totalEvents: events.length,
            pageViews: events.filter(e => e.type === 'page_view').length,
            clicks: events.filter(e => e.type === 'click').length,
            adClicks: events.filter(e => e.type === 'ad_click').length,
            conversions: conversions,
            events: events
        };
    }

    // 生成数据报告
    generateReport(days = 7) {
        const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        const now = Date.now();
        const dayMs = 24 * 60 * 60 * 1000;
        const startTime = now - (days * dayMs);

        // 筛选时间范围内的事件
        const recentEvents = events.filter(e => e.timestamp >= startTime);

        // 按日期分组
        const byDate = {};
        recentEvents.forEach(event => {
            const date = new Date(event.timestamp).toISOString().split('T')[0];
            if (!byDate[date]) {
                byDate[date] = {
                    pageViews: 0,
                    clicks: 0,
                    adClicks: 0,
                    users: new Set()
                };
            }

            if (event.type === 'page_view') byDate[date].pageViews++;
            if (event.type === 'click') byDate[date].clicks++;
            if (event.type === 'ad_click') byDate[date].adClicks++;
            if (event.sessionId) byDate[date].users.add(event.sessionId);
        });

        // 转换为数组
        const report = Object.keys(byDate).map(date => ({
            date: date,
            pageViews: byDate[date].pageViews,
            clicks: byDate[date].clicks,
            adClicks: byDate[date].adClicks,
            uniqueUsers: byDate[date].users.size
        }));

        return report.sort((a, b) => a.date.localeCompare(b.date));
    }
}

// 数据看板类
class AnalyticsDashboard {
    constructor(analyticsInstance) {
        this.analytics = analyticsInstance || window.analytics;
    }

    // 显示数据看板
    show() {
        if (!this.analytics) {
            this.analytics = window.analytics;
        }
        
        if (!this.analytics) {
            alert('数据统计系统未初始化，请刷新页面重试');
            return;
        }
        
        const stats = this.analytics.getStats();
        const report = this.analytics.generateReport(7);

        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 800px;">
                <span class="close">&times;</span>
                <h3><i class="fas fa-chart-line"></i> 数据统计看板</h3>
                
                <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
                    <div class="stat-card" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold;">${stats.pageViews}</div>
                        <div style="opacity: 0.9;">页面浏览量</div>
                    </div>
                    <div class="stat-card" style="background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold;">${stats.clicks}</div>
                        <div style="opacity: 0.9;">总点击次数</div>
                    </div>
                    <div class="stat-card" style="background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold;">${stats.adClicks}</div>
                        <div style="opacity: 0.9;">广告点击量</div>
                    </div>
                    <div class="stat-card" style="background: linear-gradient(135deg, var(--success) 0%, #38f9d7 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold;">${this.calculateCTR(stats)}%</div>
                        <div style="opacity: 0.9;">广告点击率</div>
                    </div>
                </div>

                <h4 style="margin: 2rem 0 1rem;">近7天趋势</h4>
                <div class="report-table" style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #dee2e6;">日期</th>
                                <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #dee2e6;">浏览量</th>
                                <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #dee2e6;">点击量</th>
                                <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #dee2e6;">广告点击</th>
                                <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #dee2e6;">独立用户</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${report.map(day => `
                                <tr>
                                    <td style="padding: 0.75rem; border-bottom: 1px solid #dee2e6;">${day.date}</td>
                                    <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #dee2e6;">${day.pageViews}</td>
                                    <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #dee2e6;">${day.clicks}</td>
                                    <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #dee2e6;">${day.adClicks}</td>
                                    <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #dee2e6;">${day.uniqueUsers}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">
                        <i class="fas fa-info-circle"></i> 
                        数据说明：以上数据基于本地存储，实际项目中应该从服务器获取。
                    </p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // 计算点击率
    calculateCTR(stats) {
        if (stats.pageViews === 0) return 0;
        return ((stats.adClicks / stats.pageViews) * 100).toFixed(2);
    }
}

// 初始化统计系统
let analytics, dashboard;

// 初始化函数
function initAnalytics() {
    if (analytics && dashboard) {
        return; // 已经初始化过了
    }
    
    // 先初始化 analytics
    analytics = new Analytics();
    window.analytics = analytics;
    
    // 再初始化 dashboard，并传入 analytics 实例
    dashboard = new AnalyticsDashboard(analytics);
    window.dashboard = dashboard;
    
    console.log('✅ 数据统计系统已初始化');
    console.log('   - analytics:', typeof window.analytics);
    console.log('   - dashboard:', typeof window.dashboard);
    console.log('   - dashboard.show:', typeof window.dashboard.show);
}

// 确保初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
    initAnalytics();
}

// 额外保险：页面完全加载后再检查一次
window.addEventListener('load', function() {
    if (!window.dashboard || !window.analytics) {
        console.warn('⚠️ 页面加载完成后重新初始化数据系统');
        initAnalytics();
    }
});
