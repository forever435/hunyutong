/**
 * 2025年中国生育补贴政策数据库
 * 数据来源：基于公开政策信息整理
 * 最后更新：2025年
 * 
 * 内容包括：婚假、产假、育儿假、一孩/二孩/三孩补贴、特殊补贴等
 */

const nationalPolicyData = {
    // 国家级政策（2025年最新）
    national: {
        name: '国家统一政策',
        effectiveDate: '2025年1月1日',
        childcareSubsidy: {
            description: '国家育儿补贴制度',
            amount: '每孩每年3600元',
            duration: '0-3岁',
            coverage: '一孩、二孩、三孩均可享受',
            note: '中央政府直接发放，地方政府可额外补充'
        },
        marriageLeave: {
            base: 3,
            description: '国家法定婚假3天'
        },
        maternityLeave: {
            base: 98,
            description: '国家法定产假98天（难产增加15天，多胞胎每多一胎增加15天）'
        },
        parentalLeave: {
            description: '各地根据实际情况制定'
        }
    },

    // 省级政策数据
    provinces: {
        '北京市': {
            cities: {
                '北京市': {
                    districts: {
                        '东城区': {
                            marriageLeave: '10天（含法定3天）',
                            maternityLeave: '158天（国家98天+地方60天）',
                            parentalLeave: '每年5天/人（夫妻双方）',
                            paternalLeave: '15天陪产假',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴5000元 + 国家补贴3600元/年（0-3岁）',
                                    monthlyAmount: '合计约8600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '1.准备户口本、出生证明 2.填写申请表 3.社区审核 4.财政拨款',
                                    materials: ['户口本', '出生证明', '申请表', '父母身份证']
                                },
                                secondChild: {
                                    amount: '一次性补贴8000元 + 国家补贴3600元/年（0-3岁）',
                                    monthlyAmount: '合计约11600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '线上申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                },
                                thirdChild: {
                                    amount: '一次性补贴10000元 + 国家补贴3600元/年（0-3岁）',
                                    monthlyAmount: '合计约13600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '线上申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                }
                            },
                            specialSubsidies: [
                                '困难家庭额外补助：每月500元',
                                '单亲家庭补助：每月300元',
                                '多子女家庭（3孩及以上）：幼儿园学费减免50%'
                            ]
                        },
                        '朝阳区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '社区申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                },
                                secondChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '社区申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                },
                                thirdChild: {
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '社区申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月最高1000元',
                                '困难家庭补助：每月500元'
                            ]
                        },
                        '海淀区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '高新技术企业员工额外补助：每月200元',
                                '教育补贴：幼儿园学费减免30%'
                            ]
                        }
                    }
                }
            }
        },
        '上海市': {
            cities: {
                '上海市': {
                    districts: {
                        '浦东新区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5天/人',
                            paternalLeave: '10天',
                            subsidies: {
                                firstChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '线上申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                },
                                secondChild: {
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '线上申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                },
                                thirdChild: {
                                    amount: '12000元/年 + 国家3600元/年',
                                    monthlyAmount: '15600元/年',
                                    condition: '户籍在本区，孩子0-3岁',
                                    process: '线上申请-审核-发放',
                                    materials: ['户口本', '出生证明', '申请表']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月最高1500元',
                                '困难家庭补助：每月600元',
                                '多子女家庭购房优惠：最高50万元'
                            ]
                        },
                        '黄浦区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年5天/人',
                            paternalLeave: '10天',
                            subsidies: {
                                firstChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '12000元/年 + 国家3600元/年',
                                    monthlyAmount: '15600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月1200元',
                                '教育补贴：幼儿园学费减免40%'
                            ]
                        }
                    }
                }
            }
        },
        '广东省': {
            cities: {
                '广州市': {
                    districts: {
                        '天河区': {
                            marriageLeave: '10天',
                            maternityLeave: '178天（国家98天+地方80天）',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴3000元 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '一次性补贴5000元 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '一次性补贴10000元 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月800元',
                                '多子女家庭购房补贴：最高30万元'
                            ]
                        }
                    }
                },
                '深圳市': {
                    districts: {
                        '南山区': {
                            marriageLeave: '10天',
                            maternityLeave: '178天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '7500元/年 + 国家3600元/年',
                                    monthlyAmount: '11100元/年',
                                    condition: '户籍在本区或持居住证满3年',
                                    process: '线上申请',
                                    materials: ['户口本或居住证', '出生证明']
                                },
                                secondChild: {
                                    amount: '11000元/年 + 国家3600元/年',
                                    monthlyAmount: '14600元/年',
                                    condition: '户籍在本区或持居住证满3年',
                                    process: '线上申请',
                                    materials: ['户口本或居住证', '出生证明']
                                },
                                thirdChild: {
                                    amount: '19000元/年 + 国家3600元/年',
                                    monthlyAmount: '22600元/年',
                                    condition: '户籍在本区或持居住证满3年',
                                    process: '线上申请',
                                    materials: ['户口本或居住证', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月1500元',
                                '高新技术企业员工额外补助：每月500元',
                                '多子女家庭购房优先摇号'
                            ]
                        },
                        '福田区': {
                            marriageLeave: '10天',
                            maternityLeave: '178天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '7500元/年 + 国家3600元/年',
                                    monthlyAmount: '11100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '11000元/年 + 国家3600元/年',
                                    monthlyAmount: '14600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '19000元/年 + 国家3600元/年',
                                    monthlyAmount: '22600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月1200元',
                                '教育补贴：幼儿园学费减免50%'
                            ]
                        }
                    }
                }
            }
        },
        '浙江省': {
            cities: {
                '杭州市': {
                    districts: {
                        '西湖区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴5000元 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '一次性补贴8000元 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '一次性补贴20000元 + 国家3600元/年',
                                    monthlyAmount: '23600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月1000元',
                                '多子女家庭购房补贴：最高40万元',
                                '教育补贴：义务教育阶段免费'
                            ]
                        }
                    }
                },
                '宁波市': {
                    districts: {
                        '海曙区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '15000元/年 + 国家3600元/年',
                                    monthlyAmount: '18600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月800元',
                                '困难家庭补助：每月400元'
                            ]
                        }
                    }
                }
            }
        },
        '江苏省': {
            cities: {
                '南京市': {
                    districts: {
                        '鼓楼区': {
                            marriageLeave: '13天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴3000元 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '一次性补贴5000元 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '一次性补贴10000元 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月600元',
                                '多子女家庭购房优惠：最高20万元'
                            ]
                        }
                    }
                },
                '苏州市': {
                    districts: {
                        '姑苏区': {
                            marriageLeave: '13天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴2000元 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '一次性补贴4000元 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '一次性补贴8000元 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '教育补贴：幼儿园学费减免30%'
                            ]
                        }
                    }
                }
            }
        },
        '四川省': {
            cities: {
                '成都市': {
                    districts: {
                        '武侯区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '20天',
                            subsidies: {
                                firstChild: {
                                    amount: '一次性补贴3000元 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '一次性补贴6000元 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '一次性补贴10000元 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '困难家庭补助：每月300元'
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
