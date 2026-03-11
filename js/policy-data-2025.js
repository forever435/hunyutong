/**
 * 2025年中国婚育政策数据库
 * 
 * 数据来源：
 * - 国家层面：《人口与计划生育法》(2021修正)、《女职工劳动保护特别规定》、
 *   国务院办公厅《关于加快完善生育支持政策体系推动建设生育友好型社会的若干措施》(2024)
 * - 省级层面：各省《人口与计划生育条例》(2021-2024修正版)
 * - 育儿补贴：2024年10月国务院办公厅发布的育儿补贴制度
 * 
 * 重要说明：
 * 1. 婚假、产假、育儿假、陪产假天数基于各省人口与计划生育条例
 * 2. 生育补贴金额因地区差异较大，标注的为省级或市级公开政策
 * 3. 具体补贴标准请以当地卫健委、医保局最新公告为准
 * 4. 数据更新日期：2025年3月
 * 
 * 免责声明：本数据仅供参考，不构成法律建议。政策可能随时调整，
 * 请以各地政府官方发布的最新文件为准。
 */

const nationalPolicyData = {
    // 国家级政策
    national: {
        name: '国家统一政策',
        effectiveDate: '2025年1月1日',
        legalBasis: '《人口与计划生育法》《女职工劳动保护特别规定》《国务院办公厅关于加快完善生育支持政策体系的若干措施》',
        childcareSubsidy: {
            description: '国家育儿补贴制度（2024年10月起实施）',
            amount: '自2024年10月起，对符合政策条件的家庭，按照生育孩子数量发放育儿补贴',
            duration: '0-3岁',
            coverage: '二孩、三孩家庭（各地执行标准不同）',
            note: '中央财政给予适当补助，具体标准由各省制定'
        },
        marriageLeave: {
            base: 3,
            description: '国家法定婚假3天（《劳动法》规定）'
        },
        maternityLeave: {
            base: 98,
            description: '国家法定产假98天（难产+15天，多胞胎每多一胎+15天）'
        },
        parentalLeave: {
            description: '各省根据本地条例规定育儿假天数'
        }
    },

    // 省级政策数据 - 基于各省《人口与计划生育条例》
    provinces: {
        // ==================== 北京市 ====================
        '北京市': {
            legalBasis: '《北京市人口与计划生育条例》(2021年11月修正)',
            cities: {
                '北京市': {
                    districts: {
                        '东城区': {
                            marriageLeave: '10天（法定3天+奖励7天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年5个工作日',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（标准以市卫健委公告为准）',
                                    monthlyAmount: '请咨询东城区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '父母身份证', '结婚证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询东城区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '父母身份证', '结婚证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询东城区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '父母身份证', '结婚证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险：产前检查费用最高报销3000元',
                                '住院分娩定额报销：自然分娩5000元，剖宫产5800元',
                                '生育津贴：按用人单位月平均工资÷30×产假天数计算'
                            ]
                        },
                        '朝阳区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5个工作日（子女满3周岁前）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（标准以市卫健委公告为准）',
                                    monthlyAmount: '请咨询朝阳区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询朝阳区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询朝阳区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按北京市统一标准',
                                '普惠托育补贴：部分普惠托育机构有政府补贴'
                            ]
                        },
                        '海淀区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5个工作日（子女满3周岁前）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（标准以市卫健委公告为准）',
                                    monthlyAmount: '请咨询海淀区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询海淀区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询海淀区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"北京通"APP或社区卫生服务中心申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按北京市统一标准',
                                '海淀区普惠托育试点补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 上海市 ====================
        '上海市': {
            legalBasis: '《上海市人口与计划生育条例》(2021年11月修正)',
            cities: {
                '上海市': {
                    districts: {
                        '浦东新区': {
                            marriageLeave: '10天（法定3天+奖励7天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年5天',
                            paternalLeave: '10天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（标准以市卫健委公告为准）',
                                    monthlyAmount: '请咨询浦东新区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP或社区事务受理中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证', '结婚证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询浦东新区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP或社区事务受理中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证', '结婚证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询浦东新区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP或社区事务受理中心申请',
                                    materials: ['户口本', '出生医学证明', '身份证', '结婚证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险：产前检查费用报销，住院分娩定额报销',
                                '生育津贴：按本人生产当月所在用人单位实际缴费基数÷30×产假天数',
                                '普惠托育补贴：入托普惠性托育机构可享受政府补贴'
                            ]
                        },
                        '黄浦区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5天（子女满3周岁前）',
                            paternalLeave: '10天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询黄浦区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询黄浦区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询黄浦区卫健委',
                                    condition: '符合生育政策，子女0-3岁',
                                    process: '通过"随申办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按上海市统一标准',
                                '普惠托育补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 广东省 ====================
        '广东省': {
            legalBasis: '《广东省人口与计划生育条例》(2024年7月修正)',
            cities: {
                '广州市': {
                    districts: {
                        '天河区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '178天（法定98天+奖励80天）',
                            parentalLeave: '子女3周岁以内，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性生育补贴（以广州市标准为准）',
                                    monthlyAmount: '请咨询天河区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"穗好办"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '一次性生育补贴（二孩标准）',
                                    monthlyAmount: '请咨询天河区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"穗好办"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '一次性生育补贴（三孩标准）',
                                    monthlyAmount: '请咨询天河区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"穗好办"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险：产前检查报销+住院分娩报销',
                                '生育津贴：按用人单位上年度月平均工资÷30×产假天数',
                                '广州市三孩家庭购房优惠政策'
                            ]
                        }
                    }
                },
                '深圳市': {
                    districts: {
                        '南山区': {
                            marriageLeave: '13天',
                            maternityLeave: '178天',
                            parentalLeave: '每年10天（子女3周岁以内）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '深圳市育儿补贴：一孩累计7500元（分3年发放）',
                                    monthlyAmount: '第一年3000元，第二年2000元，第三年2500元',
                                    condition: '父母一方为深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP或社区工作站申请',
                                    materials: ['户口本或居住证', '出生医学证明', '身份证', '银行账户']
                                },
                                secondChild: {
                                    amount: '深圳市育儿补贴：二孩累计11000元（分3年发放）',
                                    monthlyAmount: '第一年5000元，第二年3000元，第三年3000元',
                                    condition: '父母一方为深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP或社区工作站申请',
                                    materials: ['户口本或居住证', '出生医学证明', '身份证', '银行账户']
                                },
                                thirdChild: {
                                    amount: '深圳市育儿补贴：三孩累计19000元（分3年发放）',
                                    monthlyAmount: '第一年7000元，第二年5000元，第三年7000元',
                                    condition: '父母一方为深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP或社区工作站申请',
                                    materials: ['户口本或居住证', '出生医学证明', '身份证', '银行账户']
                                }
                            },
                            specialSubsidies: [
                                '深圳市育儿补贴：2023年1月1日后出生的婴幼儿可申请',
                                '生育保险：产检+分娩费用报销',
                                '普惠托育补贴：入托普惠性托育机构享受补贴'
                            ]
                        },
                        '福田区': {
                            marriageLeave: '13天',
                            maternityLeave: '178天',
                            parentalLeave: '每年10天（子女3周岁以内）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '深圳市育儿补贴：一孩累计7500元',
                                    monthlyAmount: '分3年发放',
                                    condition: '深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP申请',
                                    materials: ['户口本或居住证', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '深圳市育儿补贴：二孩累计11000元',
                                    monthlyAmount: '分3年发放',
                                    condition: '深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP申请',
                                    materials: ['户口本或居住证', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '深圳市育儿补贴：三孩累计19000元',
                                    monthlyAmount: '分3年发放',
                                    condition: '深圳户籍或持有效居住证',
                                    process: '通过"i深圳"APP申请',
                                    materials: ['户口本或居住证', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '深圳市育儿补贴（2023年1月1日后出生）',
                                '生育保险报销'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 浙江省 ====================
        '浙江省': {
            legalBasis: '《浙江省人口与计划生育条例》(2024年1月修正)',
            cities: {
                '杭州市': {
                    districts: {
                        '西湖区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '杭州市育儿补助（以最新公告为准）',
                                    monthlyAmount: '请咨询西湖区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '杭州市育儿补助（二孩标准）',
                                    monthlyAmount: '请咨询西湖区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '杭州市育儿补助（三孩标准，补助力度更大）',
                                    monthlyAmount: '请咨询西湖区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按浙江省统一标准',
                                '浙江省三孩家庭住房公积金贷款额度上浮20%',
                                '普惠托育补贴'
                            ]
                        }
                    }
                },
                '宁波市': {
                    districts: {
                        '海曙区': {
                            marriageLeave: '13天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天（子女满3周岁前）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '宁波市育儿补助',
                                    monthlyAmount: '请咨询海曙区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '宁波市育儿补助（二孩标准）',
                                    monthlyAmount: '请咨询海曙区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '宁波市育儿补助（三孩标准）',
                                    monthlyAmount: '请咨询海曙区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"浙里办"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销',
                                '普惠托育补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 江苏省 ====================
        '江苏省': {
            legalBasis: '《江苏省人口与计划生育条例》(2022年2月修正)',
            cities: {
                '南京市': {
                    districts: {
                        '鼓楼区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以南京市标准为准）',
                                    monthlyAmount: '请咨询鼓楼区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"我的南京"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询鼓楼区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"我的南京"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询鼓楼区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"我的南京"APP或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按江苏省统一标准',
                                '生育津贴：按用人单位月平均工资÷30×产假天数'
                            ]
                        }
                    }
                },
                '苏州市': {
                    districts: {
                        '姑苏区': {
                            marriageLeave: '18天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天（子女满3周岁前）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询姑苏区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"苏周到"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询姑苏区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"苏周到"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询姑苏区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"苏周到"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 四川省 ====================
        '四川省': {
            legalBasis: '《四川省人口与计划生育条例》(2022年3月修正)',
            cities: {
                '成都市': {
                    districts: {
                        '武侯区': {
                            marriageLeave: '3天（四川省未额外增加婚假天数）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女3周岁以下，夫妻每人每年10天',
                            paternalLeave: '20天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以成都市标准为准）',
                                    monthlyAmount: '请咨询武侯区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"天府市民云"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询武侯区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"天府市民云"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）+ 攀枝花等地有额外补贴',
                                    monthlyAmount: '请咨询武侯区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"天府市民云"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按四川省统一标准',
                                '四川省陪产假20天（全国最长之一）',
                                '攀枝花市：二孩三孩每月每孩500元育儿补贴（至3岁）'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 湖北省 ====================
        '湖北省': {
            legalBasis: '《湖北省人口与计划生育条例》(2022年5月修正)',
            cities: {
                '武汉市': {
                    districts: {
                        '武昌区': {
                            marriageLeave: '3天（湖北省未额外增加婚假天数）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以武汉市标准为准）',
                                    monthlyAmount: '请咨询武昌区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"鄂汇办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询武昌区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"鄂汇办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询武昌区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"鄂汇办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按湖北省统一标准',
                                '生育津贴：按用人单位月平均工资÷30×产假天数'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 湖南省 ====================
        '湖南省': {
            legalBasis: '《湖南省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '长沙市': {
                    districts: {
                        '岳麓区': {
                            marriageLeave: '3天（湖南省未额外增加婚假天数）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以长沙市标准为准）',
                                    monthlyAmount: '请咨询岳麓区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"湘易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询岳麓区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"湘易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询岳麓区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"湘易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按湖南省统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 河南省 ====================
        '河南省': {
            legalBasis: '《河南省人口与计划生育条例》(2021年11月修正)',
            cities: {
                '郑州市': {
                    districts: {
                        '金水区': {
                            marriageLeave: '28天（法定3天+奖励25天，全国最长）',
                            maternityLeave: '190天（法定98天+延长3个月）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '30天陪产假（全国最长之一）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以郑州市标准为准）',
                                    monthlyAmount: '请咨询金水区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"豫事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询金水区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"豫事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询金水区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"豫事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '河南省婚假28天（全国最长）',
                                '河南省陪产假30天（全国最长之一）',
                                '生育保险报销：按河南省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 山东省 ====================
        '山东省': {
            legalBasis: '《山东省人口与计划生育条例》(2022年1月修正)',
            cities: {
                '济南市': {
                    districts: {
                        '历下区': {
                            marriageLeave: '3天（山东省未额外增加婚假天数）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女不满3周岁，夫妻每人每年不少于10天',
                            paternalLeave: '不少于15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴（以济南市标准为准）',
                                    monthlyAmount: '请咨询历下区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询历下区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询历下区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按山东省统一标准',
                                '济南市三孩家庭住房公积金贷款额度提高'
                            ]
                        }
                    }
                },
                '青岛市': {
                    districts: {
                        '市南区': {
                            marriageLeave: '3天',
                            maternityLeave: '158天',
                            parentalLeave: '每年不少于10天（子女不满3周岁）',
                            paternalLeave: '不少于15天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询市南区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询市南区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询市南区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"爱山东"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销',
                                '青岛市三孩家庭购房补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 河北省 ====================
        '河北省': {
            legalBasis: '《河北省人口与计划生育条例》(2021年11月修正)',
            cities: {
                '石家庄市': {
                    districts: {
                        '长安区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天，三孩再+90天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询长安区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"冀时办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询长安区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"冀时办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询长安区卫健局',
                                    condition: '符合生育政策，三孩产假可达248天',
                                    process: '通过"冀时办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '河北省三孩产假延长至248天（98+60+90）',
                                '生育保险报销：按河北省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 福建省 ====================
        '福建省': {
            legalBasis: '《福建省人口与计划生育条例》(2022年3月修正)',
            cities: {
                '福州市': {
                    districts: {
                        '鼓楼区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158-180天（法定98天+延长60-82天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询鼓楼区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询鼓楼区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询鼓楼区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按福建省统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                },
                '厦门市': {
                    districts: {
                        '思明区': {
                            marriageLeave: '18天',
                            maternityLeave: '158-180天',
                            parentalLeave: '每年10天（子女满3周岁前）',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询思明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询思明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询思明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"闽政通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销',
                                '厦门市普惠托育补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 安徽省 ====================
        '安徽省': {
            legalBasis: '《安徽省人口与计划生育条例》(2022年1月修正)',
            cities: {
                '合肥市': {
                    districts: {
                        '蜀山区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女6周岁以内，夫妻每人每年10天',
                            paternalLeave: '30天陪产假（全国最长之一）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询蜀山区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"皖事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询蜀山区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"皖事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询蜀山区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"皖事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '安徽省陪产假30天（全国最长之一）',
                                '安徽省育儿假延长至子女6周岁（全国最长）',
                                '生育保险报销：按安徽省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 陕西省 ====================
        '陕西省': {
            legalBasis: '《陕西省人口与计划生育条例》(2022年5月修正)',
            cities: {
                '西安市': {
                    districts: {
                        '雁塔区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '158天（法定98天+延长60天，三孩再+15天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年不低于30天（全国最长）',
                            paternalLeave: '15天陪产假（三孩+5天）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询雁塔区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"秦务员"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询雁塔区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"秦务员"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询雁塔区卫健局',
                                    condition: '符合生育政策，三孩产假173天',
                                    process: '通过"秦务员"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '陕西省育儿假每年30天（全国最长）',
                                '三孩产假额外+15天，陪产假额外+5天',
                                '生育保险报销：按陕西省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 重庆市 ====================
        '重庆市': {
            legalBasis: '《重庆市人口与计划生育条例》(2021年11月修正)',
            cities: {
                '重庆市': {
                    districts: {
                        '渝中区': {
                            marriageLeave: '3天（重庆市未额外增加婚假天数）',
                            maternityLeave: '178天（法定98天+延长80天）',
                            parentalLeave: '子女满6周岁前，夫妻每人每年5-10天',
                            paternalLeave: '20天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询渝中区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"渝快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询渝中区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"渝快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询渝中区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"渝快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '重庆市产假178天（全国较长）',
                                '重庆市陪产假20天',
                                '生育保险报销：按重庆市统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 天津市 ====================
        '天津市': {
            legalBasis: '《天津市人口与计划生育条例》(2021年11月修正)',
            cities: {
                '天津市': {
                    districts: {
                        '和平区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '128天（法定98天+延长30天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询和平区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"津心办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询和平区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"津心办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询和平区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"津心办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按天津市统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 山西省 ====================
        '山西省': {
            legalBasis: '《山西省人口与计划生育条例》(2021年11月修正)',
            cities: {
                '太原市': {
                    districts: {
                        '小店区': {
                            marriageLeave: '33天（法定3天+奖励30天，全国最长之一）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女不满3周岁，夫妻每人每年15天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询小店区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"三晋通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询小店区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"三晋通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询小店区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"三晋通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '山西省婚假33天（全国最长之一）',
                                '生育保险报销：按山西省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 辽宁省 ====================
        '辽宁省': {
            legalBasis: '《辽宁省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '沈阳市': {
                    districts: {
                        '和平区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '20天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询和平区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询和平区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询和平区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '辽宁省陪产假20天',
                                '生育保险报销：按辽宁省统一标准'
                            ]
                        }
                    }
                },
                '大连市': {
                    districts: {
                        '中山区': {
                            marriageLeave: '13天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天（子女满3周岁前）',
                            paternalLeave: '20天',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询中山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询中山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询中山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"辽事通"APP申请',
                                    materials: ['户口本', '出生医学证明']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销',
                                '大连市普惠托育补贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 吉林省 ====================
        '吉林省': {
            legalBasis: '《吉林省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '长春市': {
                    districts: {
                        '南关区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询南关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"吉事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询南关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"吉事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询南关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"吉事办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按吉林省统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 黑龙江省 ====================
        '黑龙江省': {
            legalBasis: '《黑龙江省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '哈尔滨市': {
                    districts: {
                        '南岗区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询南岗区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"全省事"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询南岗区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"全省事"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询南岗区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"全省事"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按黑龙江省统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 江西省 ====================
        '江西省': {
            legalBasis: '《江西省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '南昌市': {
                    districts: {
                        '东湖区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '188天（法定98天+延长90天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '30天陪产假（全国最长之一）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询东湖区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"赣服通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询东湖区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"赣服通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询东湖区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"赣服通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '江西省产假188天（全国最长之一）',
                                '江西省陪产假30天（全国最长之一）',
                                '生育保险报销：按江西省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 云南省 ====================
        '云南省': {
            legalBasis: '《云南省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '昆明市': {
                    districts: {
                        '五华区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '30天陪产假（全国最长之一）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询五华区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"办事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询五华区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"办事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询五华区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"办事通"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '云南省陪产假30天（全国最长之一）',
                                '生育保险报销：按云南省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 贵州省 ====================
        '贵州省': {
            legalBasis: '《贵州省人口与计划生育条例》(2021年12月修正)',
            cities: {
                '贵阳市': {
                    districts: {
                        '南明区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询南明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"贵人服务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询南明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"贵人服务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询南明区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"贵人服务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按贵州省统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 广西壮族自治区 ====================
        '广西壮族自治区': {
            legalBasis: '《广西壮族自治区人口和计划生育条例》(2022年3月修正)',
            cities: {
                '南宁市': {
                    districts: {
                        '青秀区': {
                            marriageLeave: '3天（广西未额外增加婚假天数）',
                            maternityLeave: '148天（法定98天+延长50天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '25天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询青秀区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"广西政务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询青秀区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"广西政务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询青秀区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"广西政务"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '广西陪产假25天',
                                '生育保险报销：按广西统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 海南省 ====================
        '海南省': {
            legalBasis: '《海南省人口与计划生育条例》(2022年1月修正)',
            cities: {
                '海口市': {
                    districts: {
                        '龙华区': {
                            marriageLeave: '13天（法定3天+奖励10天）',
                            maternityLeave: '190天（法定98天+延长3个月）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询龙华区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"海易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询龙华区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"海易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询龙华区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过"海易办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '海南省产假190天（全国较长）',
                                '生育保险报销：按海南省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 甘肃省 ====================
        '甘肃省': {
            legalBasis: '《甘肃省人口与计划生育条例》(2021年11月修正)',
            cities: {
                '兰州市': {
                    districts: {
                        '城关区': {
                            marriageLeave: '33天（法定3天+奖励30天，全国最长之一）',
                            maternityLeave: '180天（法定98天+延长82天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年15天',
                            paternalLeave: '30天陪产假（全国最长之一）',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询城关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"甘快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询城关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"甘快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询城关区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"甘快办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '甘肃省婚假33天（全国最长之一）',
                                '甘肃省陪产假30天（全国最长之一）',
                                '生育保险报销：按甘肃省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 青海省 ====================
        '青海省': {
            legalBasis: '《青海省人口与计划生育条例》(2022年1月修正)',
            cities: {
                '西宁市': {
                    districts: {
                        '城西区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '188天（法定98天+延长90天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年15天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询城西区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"青松办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询城西区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"青松办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询城西区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"青松办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '青海省产假188天（全国较长）',
                                '生育保险报销：按青海省统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 内蒙古自治区 ====================
        '内蒙古自治区': {
            legalBasis: '《内蒙古自治区人口与计划生育条例》(2021年11月修正)',
            cities: {
                '呼和浩特市': {
                    districts: {
                        '赛罕区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '25天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询赛罕区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"蒙速办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询赛罕区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"蒙速办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询赛罕区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"蒙速办"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '内蒙古陪产假25天',
                                '生育保险报销：按内蒙古统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 宁夏回族自治区 ====================
        '宁夏回族自治区': {
            legalBasis: '《宁夏回族自治区人口与计划生育条例》(2021年12月修正)',
            cities: {
                '银川市': {
                    districts: {
                        '兴庆区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '25天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询兴庆区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"我的宁夏"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询兴庆区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"我的宁夏"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询兴庆区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过"我的宁夏"APP或社区申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '宁夏陪产假25天',
                                '生育保险报销：按宁夏统一标准'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 新疆维吾尔自治区 ====================
        '新疆维吾尔自治区': {
            legalBasis: '《新疆维吾尔自治区人口与计划生育条例》(2021年12月修正)',
            cities: {
                '乌鲁木齐市': {
                    districts: {
                        '天山区': {
                            marriageLeave: '18天（法定3天+奖励15天）',
                            maternityLeave: '158天（法定98天+延长60天）',
                            parentalLeave: '子女满3周岁前，夫妻每人每年10天',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询天山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询天山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询天山区卫健局',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '生育保险报销：按新疆统一标准',
                                '生育津贴'
                            ]
                        }
                    }
                }
            }
        },

        // ==================== 西藏自治区 ====================
        '西藏自治区': {
            legalBasis: '《西藏自治区生育条例》(2021年修正)',
            cities: {
                '拉萨市': {
                    districts: {
                        '城关区': {
                            marriageLeave: '3天（西藏未额外增加婚假天数）',
                            maternityLeave: '365天（西藏产假全国最长，含哺乳假）',
                            parentalLeave: '按西藏自治区规定执行',
                            paternalLeave: '30天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '国家育儿补贴',
                                    monthlyAmount: '请咨询城关区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                secondChild: {
                                    amount: '国家育儿补贴（二孩标准）',
                                    monthlyAmount: '请咨询城关区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                },
                                thirdChild: {
                                    amount: '国家育儿补贴（三孩标准）',
                                    monthlyAmount: '请咨询城关区卫健委',
                                    condition: '符合生育政策',
                                    process: '通过社区或街道办申请',
                                    materials: ['户口本', '出生医学证明', '身份证']
                                }
                            },
                            specialSubsidies: [
                                '西藏产假365天（全国最长）',
                                '西藏陪产假30天',
                                '生育保险报销：按西藏统一标准'
                            ]
                        }
                    }
                }
            }
        }
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = nationalPolicyData;
}
