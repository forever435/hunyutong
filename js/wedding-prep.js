// ===== 备婚攻略站 JS =====

// 快捷入口滚动
function showPrepChecklist() {
    document.getElementById('prepChecklist')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showWeddingCostCalc() {
    document.getElementById('weddingCostCalc')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showPreMaritalCheckup() {
    document.getElementById('preMaritalCheckup')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showMarriageLaw() {
    document.getElementById('marriageLaw')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== 备婚清单 =====
(function initChecklist() {
    const STORAGE_KEY = 'hunyutong_prep_checklist';

    function loadChecklist() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch { return {}; }
    }

    function saveChecklist(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function updateProgress() {
        const checks = document.querySelectorAll('.prep-check');
        const total = checks.length;
        const done = document.querySelectorAll('.prep-check:checked').length;
        const fill = document.getElementById('checklistProgressFill');
        const text = document.getElementById('checklistProgressText');
        if (fill) fill.style.width = total ? (done / total * 100) + '%' : '0%';
        if (text) text.textContent = done + '/' + total + ' 已完成';
    }

    document.addEventListener('DOMContentLoaded', function() {
        const saved = loadChecklist();
        const checks = document.querySelectorAll('.prep-check');

        checks.forEach(function(cb, i) {
            if (saved[i]) cb.checked = true;
            cb.addEventListener('change', function() {
                const data = loadChecklist();
                data[i] = cb.checked;
                saveChecklist(data);
                updateProgress();
            });
        });

        updateProgress();
    });
})();

// ===== 结婚成本计算器 =====
document.addEventListener('DOMContentLoaded', function() {
    var calcBtn = document.getElementById('calcWeddingCost');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', function() {
        var items = [
            { id: 'costBanquet', label: '婚宴' },
            { id: 'costPhoto', label: '婚纱摄影' },
            { id: 'costDecor', label: '婚庆布置' },
            { id: 'costRing', label: '婚戒首饰' },
            { id: 'costBrideprice', label: '彩礼/嫁妆' },
            { id: 'costHome', label: '新房装修' },
            { id: 'costHoneymoon', label: '蜜月旅行' },
            { id: 'costOther', label: '其他费用' }
        ];

        var total = 0;
        var breakdownHTML = '';

        items.forEach(function(item) {
            var val = parseFloat(document.getElementById(item.id)?.value) || 0;
            total += val;
            if (val > 0) {
                breakdownHTML += '<div class="cost-breakdown-item"><span>' + item.label + '</span><span>¥' + val.toLocaleString() + '</span></div>';
            }
        });

        document.getElementById('costTotalAmount').textContent = '¥' + total.toLocaleString();
        document.getElementById('costBreakdown').innerHTML = breakdownHTML || '<div class="cost-breakdown-item"><span>请输入费用后计算</span><span></span></div>';
        document.getElementById('costResult').style.display = 'block';
        document.getElementById('costResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// ===== 法律知识FAQ折叠 =====
function toggleLawFaq(el) {
    el.classList.toggle('active');
}
