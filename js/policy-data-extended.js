/**
 * 扩展的2025年中国婚育政策数据
 * 补充更多省市区县的政策信息
 * 
 * 数据来源：各省《人口与计划生育条例》修正版
 * 免责声明：本数据仅供参考，具体以当地政府最新公告为准
 */

// 扩展 nationalPolicyData（如果已加载）
if (typeof nationalPolicyData !== 'undefined') {
    // 辅助函数：生成标准区县数据
    function createDistrictData(config) {
        return {
            marriageLeave: config.marriageLeave,
            maternityLeave: config.maternityLeave,
            parentalLeave: config.parentalLeave,
            paternalLeave: config.paternalLeave,
            subsidies: {
                firstChild: {
                    amount: config.subsidyFirst || '国家育儿补贴（以当地标准为准）',
                    monthlyAmount: config.monthlyFirst || '请咨询当地卫健委',
                    condition: config.condition || '符合生育政策',
                    process: config.process || '通过当地政务APP或社区申请',
                    materials: config.materials || ['户口本', '出生医学证明', '身份证']
                },
                secondChild: {
                    amount: config.subsidySecond || '国家育儿补贴（二孩标准）',
                    monthlyAmount: config.monthlySecond || '请咨询当地卫健委',
                    condition: config.condition || '符合生育政策',
                    process: config.process || '通过当地政务APP或社区申请',
                    materials: config.materials || ['户口本', '出生医学证明', '身份证']
                },
                thirdChild: {
                    amount: config.subsidyThird || '国家育儿补贴（三孩标准）',
                    monthlyAmount: config.monthlyThird || '请咨询当地卫健委',
                    condition: config.condition || '符合生育政策',
                    process: config.process || '通过当地政务APP或社区申请',
                    materials: config.materials || ['户口本', '出生医学证明', '身份证']
                }
            },
            specialSubsidies: config.specialSubsidies || ['生育保险报销：按当地统一标准']
        };
    }

    // 北京市 - 补充更多区
    if (nationalPolicyData.provinces['北京市']) {
        const bjBase = {
            marriageLeave: '10天（法定3天+奖励7天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年5个工作日',
            paternalLeave: '15天陪产假',
            process: '通过"北京通"APP或社区卫生服务中心申请',
            specialSubsidies: ['生育保险报销：按北京市统一标准', '生育津贴：按用人单位月平均工资÷30×产假天数']
        };
        Object.assign(nationalPolicyData.provinces['北京市'].cities['北京市'].districts, {
            '西城区': createDistrictData(bjBase),
            '丰台区': createDistrictData(bjBase),
            '石景山区': createDistrictData(bjBase),
            '通州区': createDistrictData(bjBase),
            '顺义区': createDistrictData(bjBase),
            '大兴区': createDistrictData(bjBase),
            '昌平区': createDistrictData(bjBase),
            '房山区': createDistrictData(bjBase),
            '门头沟区': createDistrictData(bjBase),
            '怀柔区': createDistrictData(bjBase),
            '平谷区': createDistrictData(bjBase),
            '密云区': createDistrictData(bjBase),
            '延庆区': createDistrictData(bjBase)
        });
    }

    // 上海市 - 补充更多区
    if (nationalPolicyData.provinces['上海市']) {
        const shBase = {
            marriageLeave: '10天（法定3天+奖励7天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年5天',
            paternalLeave: '10天陪产假',
            process: '通过"随申办"APP或社区事务受理中心申请',
            specialSubsidies: ['生育保险报销：按上海市统一标准', '普惠托育补贴']
        };
        Object.assign(nationalPolicyData.provinces['上海市'].cities['上海市'].districts, {
            '徐汇区': createDistrictData(shBase),
            '长宁区': createDistrictData(shBase),
            '静安区': createDistrictData(shBase),
            '普陀区': createDistrictData(shBase),
            '虹口区': createDistrictData(shBase),
            '杨浦区': createDistrictData(shBase),
            '闵行区': createDistrictData(shBase),
            '宝山区': createDistrictData(shBase),
            '嘉定区': createDistrictData(shBase),
            '金山区': createDistrictData(shBase),
            '松江区': createDistrictData(shBase),
            '青浦区': createDistrictData(shBase),
            '奉贤区': createDistrictData(shBase),
            '崇明区': createDistrictData(shBase)
        });
    }

    // 广东省 - 补充更多城市和区
    if (nationalPolicyData.provinces['广东省']) {
        const gdBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '178天（法定98天+奖励80天）',
            parentalLeave: '子女3周岁以内，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            specialSubsidies: ['生育保险报销：按广东省统一标准', '生育津贴']
        };

        // 广州更多区
        Object.assign(nationalPolicyData.provinces['广东省'].cities['广州市'].districts, {
            '越秀区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '海珠区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '荔湾区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '白云区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '黄埔区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '番禺区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '花都区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '南沙区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '从化区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'}),
            '增城区': createDistrictData({...gdBase, process: '通过"穗好办"APP申请'})
        });

        // 深圳更多区
        const szBase = {
            ...gdBase,
            process: '通过"i深圳"APP申请',
            subsidyFirst: '深圳市育儿补贴：一孩累计7500元（分3年发放）',
            subsidySecond: '深圳市育儿补贴：二孩累计11000元（分3年发放）',
            subsidyThird: '深圳市育儿补贴：三孩累计19000元（分3年发放）',
            condition: '深圳户籍或持有效居住证',
            specialSubsidies: ['深圳市育儿补贴（2023年1月1日后出生）', '生育保险报销']
        };
        Object.assign(nationalPolicyData.provinces['广东省'].cities['深圳市'].districts, {
            '罗湖区': createDistrictData(szBase),
            '盐田区': createDistrictData(szBase),
            '宝安区': createDistrictData(szBase),
            '龙岗区': createDistrictData(szBase),
            '龙华区': createDistrictData(szBase),
            '坪山区': createDistrictData(szBase),
            '光明区': createDistrictData(szBase)
        });

        // 东莞市
        nationalPolicyData.provinces['广东省'].cities['东莞市'] = {
            districts: {
                '莞城街道': createDistrictData({...gdBase, process: '通过"莞家政务"APP申请'}),
                '南城街道': createDistrictData({...gdBase, process: '通过"莞家政务"APP申请'})
            }
        };

        // 佛山市
        nationalPolicyData.provinces['广东省'].cities['佛山市'] = {
            districts: {
                '禅城区': createDistrictData({...gdBase, process: '通过"佛山通"APP申请'}),
                '南海区': createDistrictData({...gdBase, process: '通过"佛山通"APP申请'}),
                '顺德区': createDistrictData({...gdBase, process: '通过"佛山通"APP申请'})
            }
        };
    }

    // 浙江省 - 补充更多城市
    if (nationalPolicyData.provinces['浙江省']) {
        const zjBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"浙里办"APP申请',
            specialSubsidies: ['生育保险报销：按浙江省统一标准', '普惠托育补贴']
        };

        nationalPolicyData.provinces['浙江省'].cities['温州市'] = {
            districts: { '鹿城区': createDistrictData(zjBase) }
        };
        nationalPolicyData.provinces['浙江省'].cities['嘉兴市'] = {
            districts: { '南湖区': createDistrictData(zjBase) }
        };
        nationalPolicyData.provinces['浙江省'].cities['绍兴市'] = {
            districts: { '越城区': createDistrictData(zjBase) }
        };
        nationalPolicyData.provinces['浙江省'].cities['金华市'] = {
            districts: { '婺城区': createDistrictData(zjBase) }
        };
    }

    // 江苏省 - 补充更多城市
    if (nationalPolicyData.provinces['江苏省']) {
        const jsBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            specialSubsidies: ['生育保险报销：按江苏省统一标准', '生育津贴']
        };

        nationalPolicyData.provinces['江苏省'].cities['无锡市'] = {
            districts: { '梁溪区': createDistrictData({...jsBase, process: '通过"灵锡"APP申请'}) }
        };
        nationalPolicyData.provinces['江苏省'].cities['常州市'] = {
            districts: { '天宁区': createDistrictData({...jsBase, process: '通过"我的常州"APP申请'}) }
        };
        nationalPolicyData.provinces['江苏省'].cities['徐州市'] = {
            districts: { '云龙区': createDistrictData({...jsBase, process: '通过"快哉徐州"APP申请'}) }
        };
    }

    // 四川省 - 补充更多城市
    if (nationalPolicyData.provinces['四川省']) {
        const scBase = {
            marriageLeave: '3天（四川省未额外增加婚假天数）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女3周岁以下，夫妻每人每年10天',
            paternalLeave: '20天陪产假',
            process: '通过"天府通办"APP申请',
            specialSubsidies: ['四川省陪产假20天', '生育保险报销']
        };

        nationalPolicyData.provinces['四川省'].cities['绵阳市'] = {
            districts: { '涪城区': createDistrictData(scBase) }
        };
        nationalPolicyData.provinces['四川省'].cities['攀枝花市'] = {
            districts: {
                '东区': createDistrictData({
                    ...scBase,
                    subsidySecond: '攀枝花市育儿补贴：二孩每月每孩500元（至3岁）',
                    subsidyThird: '攀枝花市育儿补贴：三孩每月每孩500元（至3岁）',
                    monthlySecond: '500元/月（0-3岁）',
                    monthlyThird: '500元/月（0-3岁）',
                    specialSubsidies: ['攀枝花市：全国首个发放育儿补贴的城市', '二孩三孩每月每孩500元（至3岁）', '生育保险报销']
                })
            }
        };
    }

    // 山东省 - 补充更多城市
    if (nationalPolicyData.provinces['山东省']) {
        const sdBase = {
            marriageLeave: '3天（山东省未额外增加婚假天数）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女不满3周岁，夫妻每人每年不少于10天',
            paternalLeave: '不少于15天陪产假',
            process: '通过"爱山东"APP申请',
            specialSubsidies: ['生育保险报销：按山东省统一标准']
        };

        nationalPolicyData.provinces['山东省'].cities['烟台市'] = {
            districts: { '芝罘区': createDistrictData(sdBase) }
        };
        nationalPolicyData.provinces['山东省'].cities['潍坊市'] = {
            districts: { '奎文区': createDistrictData(sdBase) }
        };
        nationalPolicyData.provinces['山东省'].cities['临沂市'] = {
            districts: { '兰山区': createDistrictData(sdBase) }
        };
    }

    // 河南省 - 补充更多城市
    if (nationalPolicyData.provinces['河南省']) {
        const hnBase = {
            marriageLeave: '28天（法定3天+奖励25天）',
            maternityLeave: '190天（法定98天+延长3个月）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '30天陪产假',
            process: '通过"豫事办"APP申请',
            specialSubsidies: ['河南省婚假28天（全国最长）', '河南省陪产假30天', '生育保险报销']
        };

        nationalPolicyData.provinces['河南省'].cities['洛阳市'] = {
            districts: { '洛龙区': createDistrictData(hnBase) }
        };
        nationalPolicyData.provinces['河南省'].cities['开封市'] = {
            districts: { '鼓楼区': createDistrictData(hnBase) }
        };
        nationalPolicyData.provinces['河南省'].cities['南阳市'] = {
            districts: { '卧龙区': createDistrictData(hnBase) }
        };
    }

    // 湖北省 - 补充更多区和城市
    if (nationalPolicyData.provinces['湖北省']) {
        const hbBase = {
            marriageLeave: '3天（湖北省未额外增加婚假天数）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"鄂汇办"APP申请',
            specialSubsidies: ['生育保险报销：按湖北省统一标准']
        };

        Object.assign(nationalPolicyData.provinces['湖北省'].cities['武汉市'].districts, {
            '江汉区': createDistrictData(hbBase),
            '硚口区': createDistrictData(hbBase),
            '汉阳区': createDistrictData(hbBase),
            '洪山区': createDistrictData(hbBase)
        });

        nationalPolicyData.provinces['湖北省'].cities['宜昌市'] = {
            districts: {
                '西陵区': createDistrictData({
                    ...hbBase,
                    subsidySecond: '宜昌市育儿补贴：二孩每年不低于1200元',
                    subsidyThird: '宜昌市育儿补贴：三孩每年不低于2400元',
                    specialSubsidies: ['宜昌市：较早实施育儿补贴的城市', '生育保险报销']
                })
            }
        };
    }

    // 湖南省 - 补充更多城市
    if (nationalPolicyData.provinces['湖南省']) {
        const hunBase = {
            marriageLeave: '3天（湖南省未额外增加婚假天数）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"湘易办"APP申请',
            specialSubsidies: ['生育保险报销：按湖南省统一标准']
        };

        nationalPolicyData.provinces['湖南省'].cities['株洲市'] = {
            districts: { '天元区': createDistrictData(hunBase) }
        };
        nationalPolicyData.provinces['湖南省'].cities['衡阳市'] = {
            districts: { '雁峰区': createDistrictData(hunBase) }
        };
    }

    // 重庆市 - 补充更多区
    if (nationalPolicyData.provinces['重庆市']) {
        const cqBase = {
            marriageLeave: '3天（重庆市未额外增加婚假天数）',
            maternityLeave: '178天（法定98天+延长80天）',
            parentalLeave: '子女满6周岁前，夫妻每人每年5-10天',
            paternalLeave: '20天陪产假',
            process: '通过"渝快办"APP申请',
            specialSubsidies: ['重庆市产假178天', '重庆市陪产假20天', '生育保险报销']
        };

        Object.assign(nationalPolicyData.provinces['重庆市'].cities['重庆市'].districts, {
            '江北区': createDistrictData(cqBase),
            '沙坪坝区': createDistrictData(cqBase),
            '九龙坡区': createDistrictData(cqBase),
            '南岸区': createDistrictData(cqBase),
            '北碚区': createDistrictData(cqBase),
            '渝北区': createDistrictData(cqBase),
            '巴南区': createDistrictData(cqBase),
            '大渡口区': createDistrictData(cqBase)
        });
    }

    // 天津市 - 补充更多区
    if (nationalPolicyData.provinces['天津市']) {
        const tjBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '128天（法定98天+延长30天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"津心办"APP申请',
            specialSubsidies: ['生育保险报销：按天津市统一标准']
        };

        Object.assign(nationalPolicyData.provinces['天津市'].cities['天津市'].districts, {
            '南开区': createDistrictData(tjBase),
            '河西区': createDistrictData(tjBase),
            '河东区': createDistrictData(tjBase),
            '河北区': createDistrictData(tjBase),
            '红桥区': createDistrictData(tjBase),
            '滨海新区': createDistrictData(tjBase),
            '西青区': createDistrictData(tjBase),
            '津南区': createDistrictData(tjBase),
            '北辰区': createDistrictData(tjBase),
            '武清区': createDistrictData(tjBase),
            '东丽区': createDistrictData(tjBase)
        });
    }

    // 河北省 - 补充更多城市
    if (nationalPolicyData.provinces['河北省']) {
        const hebBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天，三孩再+90天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"冀时办"APP申请',
            specialSubsidies: ['河北省三孩产假可达248天', '生育保险报销']
        };

        nationalPolicyData.provinces['河北省'].cities['唐山市'] = {
            districts: { '路北区': createDistrictData(hebBase) }
        };
        nationalPolicyData.provinces['河北省'].cities['保定市'] = {
            districts: { '竞秀区': createDistrictData(hebBase) }
        };
        nationalPolicyData.provinces['河北省'].cities['邯郸市'] = {
            districts: { '丛台区': createDistrictData(hebBase) }
        };
    }

    // 安徽省 - 补充更多城市
    if (nationalPolicyData.provinces['安徽省']) {
        const ahBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女6周岁以内，夫妻每人每年10天',
            paternalLeave: '30天陪产假',
            process: '通过"皖事通"APP申请',
            specialSubsidies: ['安徽省陪产假30天', '安徽省育儿假延长至子女6周岁', '生育保险报销']
        };

        nationalPolicyData.provinces['安徽省'].cities['芜湖市'] = {
            districts: { '镜湖区': createDistrictData(ahBase) }
        };
        nationalPolicyData.provinces['安徽省'].cities['蚌埠市'] = {
            districts: { '蚌山区': createDistrictData(ahBase) }
        };
    }

    // 福建省 - 补充更多区
    if (nationalPolicyData.provinces['福建省']) {
        const fjBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158-180天',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"闽政通"APP申请',
            specialSubsidies: ['生育保险报销：按福建省统一标准']
        };

        nationalPolicyData.provinces['福建省'].cities['泉州市'] = {
            districts: { '丰泽区': createDistrictData(fjBase) }
        };
    }

    // 陕西省 - 补充更多城市
    if (nationalPolicyData.provinces['陕西省']) {
        const sxBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '158天（法定98天+延长60天，三孩再+15天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年不低于30天',
            paternalLeave: '15天陪产假（三孩+5天）',
            process: '通过"秦务员"APP申请',
            specialSubsidies: ['陕西省育儿假每年30天（全国最长）', '生育保险报销']
        };

        nationalPolicyData.provinces['陕西省'].cities['咸阳市'] = {
            districts: { '秦都区': createDistrictData(sxBase) }
        };
        nationalPolicyData.provinces['陕西省'].cities['宝鸡市'] = {
            districts: { '渭滨区': createDistrictData(sxBase) }
        };
    }

    // 辽宁省 - 补充更多区
    if (nationalPolicyData.provinces['辽宁省']) {
        const lnBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '20天陪产假',
            process: '通过"辽事通"APP申请',
            specialSubsidies: ['辽宁省陪产假20天', '生育保险报销']
        };

        Object.assign(nationalPolicyData.provinces['辽宁省'].cities['沈阳市'].districts, {
            '沈河区': createDistrictData(lnBase),
            '铁西区': createDistrictData(lnBase),
            '皇姑区': createDistrictData(lnBase)
        });
    }

    // 山西省 - 补充更多城市
    if (nationalPolicyData.provinces['山西省']) {
        const sxiBase = {
            marriageLeave: '33天（法定3天+奖励30天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女不满3周岁，夫妻每人每年15天',
            paternalLeave: '15天陪产假',
            process: '通过"三晋通"APP申请',
            specialSubsidies: ['山西省婚假33天（全国最长之一）', '生育保险报销']
        };

        nationalPolicyData.provinces['山西省'].cities['大同市'] = {
            districts: { '平城区': createDistrictData(sxiBase) }
        };
    }

    // 甘肃省 - 补充更多城市
    if (nationalPolicyData.provinces['甘肃省']) {
        const gsBase = {
            marriageLeave: '33天（法定3天+奖励30天）',
            maternityLeave: '180天（法定98天+延长82天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年15天',
            paternalLeave: '30天陪产假',
            process: '通过"甘快办"APP申请',
            specialSubsidies: ['甘肃省婚假33天', '甘肃省陪产假30天', '生育保险报销']
        };

        nationalPolicyData.provinces['甘肃省'].cities['天水市'] = {
            districts: { '秦州区': createDistrictData(gsBase) }
        };
    }

    // 江西省 - 补充更多城市
    if (nationalPolicyData.provinces['江西省']) {
        const jxBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '188天（法定98天+延长90天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '30天陪产假',
            process: '通过"赣服通"APP申请',
            specialSubsidies: ['江西省产假188天', '江西省陪产假30天', '生育保险报销']
        };

        nationalPolicyData.provinces['江西省'].cities['赣州市'] = {
            districts: { '章贡区': createDistrictData(jxBase) }
        };
        nationalPolicyData.provinces['江西省'].cities['九江市'] = {
            districts: { '浔阳区': createDistrictData(jxBase) }
        };
    }

    // 云南省 - 补充更多城市
    if (nationalPolicyData.provinces['云南省']) {
        const ynBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '30天陪产假',
            process: '通过"办事通"APP申请',
            specialSubsidies: ['云南省陪产假30天', '生育保险报销']
        };

        nationalPolicyData.provinces['云南省'].cities['大理白族自治州'] = {
            districts: { '大理市': createDistrictData(ynBase) }
        };
        nationalPolicyData.provinces['云南省'].cities['曲靖市'] = {
            districts: { '麒麟区': createDistrictData(ynBase) }
        };
    }

    // 吉林省 - 补充更多城市
    if (nationalPolicyData.provinces['吉林省']) {
        const jlBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"吉事办"APP申请',
            specialSubsidies: ['生育保险报销：按吉林省统一标准']
        };

        nationalPolicyData.provinces['吉林省'].cities['吉林市'] = {
            districts: { '船营区': createDistrictData(jlBase) }
        };
    }

    // 黑龙江省 - 补充更多城市
    if (nationalPolicyData.provinces['黑龙江省']) {
        const hljBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"全省事"APP申请',
            specialSubsidies: ['生育保险报销：按黑龙江省统一标准']
        };

        nationalPolicyData.provinces['黑龙江省'].cities['齐齐哈尔市'] = {
            districts: { '建华区': createDistrictData(hljBase) }
        };
    }

    // 海南省 - 补充更多区
    if (nationalPolicyData.provinces['海南省']) {
        const haiBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '190天（法定98天+延长3个月）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"海易办"APP申请',
            specialSubsidies: ['海南省产假190天', '生育保险报销']
        };

        nationalPolicyData.provinces['海南省'].cities['三亚市'] = {
            districts: { '吉阳区': createDistrictData(haiBase) }
        };
    }

    // 贵州省 - 补充更多城市
    if (nationalPolicyData.provinces['贵州省']) {
        const gzBase = {
            marriageLeave: '13天（法定3天+奖励10天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过"贵人服务"APP申请',
            specialSubsidies: ['生育保险报销：按贵州省统一标准']
        };

        nationalPolicyData.provinces['贵州省'].cities['遵义市'] = {
            districts: { '红花岗区': createDistrictData(gzBase) }
        };
    }

    // 广西 - 补充更多城市
    if (nationalPolicyData.provinces['广西壮族自治区']) {
        const gxBase = {
            marriageLeave: '3天（广西未额外增加婚假天数）',
            maternityLeave: '148天（法定98天+延长50天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '25天陪产假',
            process: '通过"广西政务"APP申请',
            specialSubsidies: ['广西陪产假25天', '生育保险报销']
        };

        nationalPolicyData.provinces['广西壮族自治区'].cities['柳州市'] = {
            districts: { '城中区': createDistrictData(gxBase) }
        };
        nationalPolicyData.provinces['广西壮族自治区'].cities['桂林市'] = {
            districts: { '秀峰区': createDistrictData(gxBase) }
        };
    }

    // 内蒙古 - 补充更多城市
    if (nationalPolicyData.provinces['内蒙古自治区']) {
        const nmgBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '25天陪产假',
            process: '通过"蒙速办"APP申请',
            specialSubsidies: ['内蒙古陪产假25天', '生育保险报销']
        };

        nationalPolicyData.provinces['内蒙古自治区'].cities['包头市'] = {
            districts: { '昆都仑区': createDistrictData(nmgBase) }
        };
    }

    // 宁夏 - 补充更多城市
    if (nationalPolicyData.provinces['宁夏回族自治区']) {
        const nxBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '25天陪产假',
            process: '通过"我的宁夏"APP申请',
            specialSubsidies: ['宁夏陪产假25天', '生育保险报销']
        };

        nationalPolicyData.provinces['宁夏回族自治区'].cities['石嘴山市'] = {
            districts: { '大武口区': createDistrictData(nxBase) }
        };
    }

    // 新疆 - 补充更多城市
    if (nationalPolicyData.provinces['新疆维吾尔自治区']) {
        const xjBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '158天（法定98天+延长60天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
            paternalLeave: '15天陪产假',
            process: '通过社区或街道办申请',
            specialSubsidies: ['生育保险报销：按新疆统一标准']
        };

        nationalPolicyData.provinces['新疆维吾尔自治区'].cities['克拉玛依市'] = {
            districts: { '克拉玛依区': createDistrictData(xjBase) }
        };
    }

    // 青海省 - 补充更多城市
    if (nationalPolicyData.provinces['青海省']) {
        const qhBase = {
            marriageLeave: '18天（法定3天+奖励15天）',
            maternityLeave: '188天（法定98天+延长90天）',
            parentalLeave: '子女满3周岁前，夫妻每人每年15天',
            paternalLeave: '15天陪产假',
            process: '通过"青松办"APP申请',
            specialSubsidies: ['青海省产假188天', '生育保险报销']
        };

        nationalPolicyData.provinces['青海省'].cities['海东市'] = {
            districts: { '乐都区': createDistrictData(qhBase) }
        };
    }

    // 西藏 - 补充更多城市
    if (nationalPolicyData.provinces['西藏自治区']) {
        const xzBase = {
            marriageLeave: '3天（西藏未额外增加婚假天数）',
            maternityLeave: '365天（西藏产假全国最长，含哺乳假）',
            parentalLeave: '按西藏自治区规定执行',
            paternalLeave: '30天陪产假',
            process: '通过社区或街道办申请',
            specialSubsidies: ['西藏产假365天（全国最长）', '西藏陪产假30天', '生育保险报销']
        };

        nationalPolicyData.provinces['西藏自治区'].cities['日喀则市'] = {
            districts: { '桑珠孜区': createDistrictData(xzBase) }
        };
    }
}
