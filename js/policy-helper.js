// 政策数据辅助函数

// 智能查找政策数据
function findPolicyData(regionKey, policies) {
    // 1. 直接查找
    if (policies[regionKey]) {
        return policies[regionKey];
    }
    
    // 2. 如果是省-市格式，查找该市的第一个区县数据作为代表
    const parts = regionKey.split('-');
    if (parts.length === 2) {
        const [province, city] = parts;
        // 在所有政策中查找匹配的区县
        for (const key in policies) {
            if (key.startsWith(`${province}-${city}-`)) {
                console.log(`✅ 使用 ${key} 的数据代表 ${regionKey}`);
                return policies[key];
            }
        }
    }
    
    // 3. 如果是省份格式，查找该省的第一个城市数据
    if (parts.length === 1) {
        const province = parts[0];
        for (const key in policies) {
            if (key.startsWith(`${province}-`)) {
                console.log(`✅ 使用 ${key} 的数据代表 ${regionKey}`);
                return policies[key];
            }
        }
    }
    
    return null;
}

// 导出到全局
window.findPolicyData = findPolicyData;
