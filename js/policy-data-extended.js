/**
 * 扩展的2025年中国生育补贴政策数据
 * 补充更多省市区县的政策信息
 */

// 扩展 nationalPolicyData（如果已加载）
if (typeof nationalPolicyData !== 'undefined') {
    // 添加更多省份数据
    Object.assign(nationalPolicyData.provinces, {
        '湖北省': {
            cities: {
                '武汉市': {
                    districts: {
                        '武昌区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '困难家庭补助：每月300元'
                            ]
                        },
                        '江岸区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
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
        },
        '湖南省': {
            cities: {
                '长沙市': {
                    districts: {
                        '岳麓区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
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
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月600元',
                                '教育补贴：幼儿园学费减免25%'
                            ]
                        }
                    }
                }
            }
        },
        '河南省': {
            cities: {
                '郑州市': {
                    districts: {
                        '金水区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '山东省': {
            cities: {
                '济南市': {
                    districts: {
                        '历下区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '教育补贴：幼儿园学费减免20%'
                            ]
                        }
                    }
                },
                '青岛市': {
                    districts: {
                        '市南区': {
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
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月700元',
                                '教育补贴：幼儿园学费减免30%'
                            ]
                        }
                    }
                }
            }
        },
        '河北省': {
            cities: {
                '石家庄市': {
                    districts: {
                        '长安区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '福建省': {
            cities: {
                '福州市': {
                    districts: {
                        '鼓楼区': {
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
                                    amount: '6500元/年 + 国家3600元/年',
                                    monthlyAmount: '10100元/年',
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
                                '托育补贴：每月600元',
                                '教育补贴：幼儿园学费减免25%'
                            ]
                        }
                    }
                },
                '厦门市': {
                    districts: {
                        '思明区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
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
                                    amount: '12000元/年 + 国家3600元/年',
                                    monthlyAmount: '15600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月800元',
                                '教育补贴：幼儿园学费减免35%'
                            ]
                        }
                    }
                }
            }
        },
        '安徽省': {
            cities: {
                '合肥市': {
                    districts: {
                        '蜀山区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '陕西省': {
            cities: {
                '西安市': {
                    districts: {
                        '雁塔区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '教育补贴：幼儿园学费减免20%'
                            ]
                        }
                    }
                }
            }
        },
        '重庆市': {
            cities: {
                '重庆市': {
                    districts: {
                        '渝中区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
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
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月600元',
                                '教育补贴：幼儿园学费减免25%'
                            ]
                        }
                    }
                }
            }
        },
        '天津市': {
            cities: {
                '天津市': {
                    districts: {
                        '和平区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
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
                                    amount: '12000元/年 + 国家3600元/年',
                                    monthlyAmount: '15600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月1000元',
                                '教育补贴：幼儿园学费减免40%'
                            ]
                        }
                    }
                }
            }
        },
        '山西省': {
            cities: {
                '太原市': {
                    districts: {
                        '小店区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '辽宁省': {
            cities: {
                '沈阳市': {
                    districts: {
                        '和平区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '教育补贴：幼儿园学费减免20%'
                            ]
                        }
                    }
                },
                '大连市': {
                    districts: {
                        '中山区': {
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
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月700元',
                                '教育补贴：幼儿园学费减免30%'
                            ]
                        }
                    }
                }
            }
        },
        '吉林省': {
            cities: {
                '长春市': {
                    districts: {
                        '南关区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '黑龙江省': {
            cities: {
                '哈尔滨市': {
                    districts: {
                        '南岗区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '江西省': {
            cities: {
                '南昌市': {
                    districts: {
                        '东湖区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '海南省': {
            cities: {
                '海口市': {
                    districts: {
                        '龙华区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '教育补贴：幼儿园学费减免20%'
                            ]
                        }
                    }
                },
                '三亚市': {
                    districts: {
                        '吉阳区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
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
                                    amount: '10000元/年 + 国家3600元/年',
                                    monthlyAmount: '13600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月600元',
                                '教育补贴：幼儿园学费减免25%'
                            ]
                        }
                    }
                }
            }
        },
        '贵州省': {
            cities: {
                '贵阳市': {
                    districts: {
                        '云岩区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '云南省': {
            cities: {
                '昆明市': {
                    districts: {
                        '五华区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '甘肃省': {
            cities: {
                '兰州市': {
                    districts: {
                        '城关区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '青海省': {
            cities: {
                '西宁市': {
                    districts: {
                        '城东区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元',
                                '高原地区特殊补助：每月100元'
                            ]
                        }
                    }
                }
            }
        },
        '内蒙古自治区': {
            cities: {
                '呼和浩特市': {
                    districts: {
                        '新城区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '广西壮族自治区': {
            cities: {
                '南宁市': {
                    districts: {
                        '青秀区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                },
                '桂林市': {
                    districts: {
                        '秀峰区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '西藏自治区': {
            cities: {
                '拉萨市': {
                    districts: {
                        '城关区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '3000元/年 + 国家3600元/年',
                                    monthlyAmount: '6600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '5000元/年 + 国家3600元/年',
                                    monthlyAmount: '8600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '8000元/年 + 国家3600元/年',
                                    monthlyAmount: '11600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月500元',
                                '高原地区特殊补助：每月300元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        },
        '宁夏回族自治区': {
            cities: {
                '银川市': {
                    districts: {
                        '兴庆区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2000元/年 + 国家3600元/年',
                                    monthlyAmount: '5600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '3500元/年 + 国家3600元/年',
                                    monthlyAmount: '7100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '6000元/年 + 国家3600元/年',
                                    monthlyAmount: '9600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月300元',
                                '困难家庭补助：每月200元'
                            ]
                        }
                    }
                }
            }
        },
        '新疆维吾尔自治区': {
            cities: {
                '乌鲁木齐市': {
                    districts: {
                        '天山区': {
                            marriageLeave: '10天',
                            maternityLeave: '158天',
                            parentalLeave: '每年10天/人',
                            paternalLeave: '15天',
                            subsidies: {
                                firstChild: {
                                    amount: '2500元/年 + 国家3600元/年',
                                    monthlyAmount: '6100元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                secondChild: {
                                    amount: '4000元/年 + 国家3600元/年',
                                    monthlyAmount: '7600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                },
                                thirdChild: {
                                    amount: '7000元/年 + 国家3600元/年',
                                    monthlyAmount: '10600元/年',
                                    condition: '户籍在本区',
                                    process: '线上申请',
                                    materials: ['户口本', '出生证明']
                                }
                            },
                            specialSubsidies: [
                                '托育补贴：每月400元',
                                '困难家庭补助：每月250元'
                            ]
                        }
                    }
                }
            }
        }
    });
}
