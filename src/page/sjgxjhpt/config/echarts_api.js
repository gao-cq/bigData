//共享数据top10
export const gxsj_option = {
    title: {
        text: '共享数据TOP10',
        x: 'center',
        top: '1%',
        textStyle: {
            color: "#2fd5ff",
            fontSize: 14
        }
    },
    color: {
        type: 'linear',
        x: 0,
        x2: 1,
        colorStops: [{
            offset: 0,
            color: '#0338ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#01aeff' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '9%',
        left: '8%',
        right: '20%',
        bottom: '-2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false,
        boundaryGap: [0, 0.01],
        axisLabel: {
            color: '#ddd'
        },
        splitLine: {
            lineStyle: {
                color: '#00ccff',
                opacity: 0.3
            }
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['公安厅', '民政厅', '人社厅', '农业厅', '工信厅', '发改委', '教育厅', '卫健委', '自然资源局', '商务厅'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // show: false,
            color: '#ddd'
        },
    },
    series: [{
        name: '数据量',
        type: 'bar',
        label: {
            show: true,
            position: ['100%', '0%'],
            offset: [10, 0],
            color: '#ddd',
            formatter: '{c}' + '万条'
        },
        barCategoryGap: '65%',
        data: [1111, 1000, 950, 930, 900, 850, 820, 800, 750, 700]
    }]
}


//数据交换方向
var itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};
export const sjjhfx_option = {
    title: {
        text: '数据交换方向',
        textAlign: 'center',
        left: '50%',
        top: '1%',
        textStyle: {
            color: "#2fd5ff",
            fontSize: 14
        }
    },
    color: {
        type: 'linear',
        y: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#0338ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#01aeff' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    xAxis: {
        data: ['07', '08', '09', '10', '11', '12'],
        name: '',
        silent: false,
        axisLine: {
            onZero: true,
            lineStyle: {
                color: '#aaa'
            }
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            color: '#ddd'
        }
    },
    yAxis: {
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#ddd'
        },
        axisLine: {
            lineStyle: {
                color: '#aaa'
            }
        }
    },
    grid: {
        top: '18%',
        bottom: '15%',
        left: '15%',
    },
    series: [{
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            barCategoryGap: '60%',
            data: [-55, -24, -33, -46, -12, -26]
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            barCategoryGap: '60%',
            itemStyle: itemStyle,
            data: [35, 25, 35, 55, 25, 30]
        }
    ]
};


//dq_option
export const dq_option = {
    globe: {
        baseTexture: require('../../../images/earth.jpg'),
        heightTexture: require('../../../images/bathymetry_bw_composite_4k.jpg'),

        displacementScale: 0.02,

        shading: 'lambert',
        top:'5%',
        bottom:'5%',

        light: {
            ambient: {
                intensity: 0.3
            },
            main: {
                intensity: 1,
            }
        },
        viewControl:{
            autoRotateAfterStill:2
        }
    },
    series: []
}

export const sx_option={
    geo: {
        map: 'china',
        zoom: 1.15,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0.2)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        }
    },
    series: [{
        name: 'lines',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 3, //箭头指向速度，值越小速度越快
            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 6, //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3, //尾迹线条曲直度
                color: function (e) {
                    if (e.value < 50) {
                        return 'lime'
                    }
                }
            },
            emphasis: {
                width: 2
            }
        },
        data: []
    }, {
        name: 'effect',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        hoverAnimation: true,
        zlevel: 2,
        rippleEffect: { //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 3 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
            normal: {
                // show: true,
                position: 'right', //显示位置
                formatter: function (params) { //圆环显示文字
                    return params.data.name;
                },
                fontSize: 12
            },
            emphasis:{
                show: true,
            }
        },
        symbol: 'circle',
        symbolSize: function (val) {
            return 8 + val[2] / 100; //圆环大小
        },
        itemStyle: {
            normal: {
                show: false,
                color: function (e) {
                    if (e.value[2] < 50) {
                        return 'lime'
                    }
                    return '#ff3333'
                }
            }
        },
        data: []
    }]
}


//基础分类
export const jcfl_option = {
    title: {
        text: '基础分类',
        x: 'center',
        top: '2%',
        textStyle: {
            color: "#2fd5ff",
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: '2%',
        bottom: '10%',
        data: ["基础库", "工业", "农业", "服务业", "旅游业", "制造业"],
        // data: ['结构化', '半结构化', '非结构化'],
        // selectedMode: 'single',
        // selected: {
        //     结构化: true
        // },
        orient: 'vertical',
        textStyle: {
            color: '#ddd'
        }
    },
    color: ["#6054ff", "#00c6ff", "#f19610", "#8a00e1", "#34d160", "#0278e7"],
    calculable: true,
    series: [{
            name: '基础分类',
            type: 'pie',
            radius: ["20%", "55%"],
            center: ['60%', '55%'],
            roseType: 'area',
            label: {
                color: "#fff"
            },
            data: [{
                value: 10,
                name: '基础库'
            }, {
                value: 15,
                name: '工业'
            }, {
                value: 15,
                name: '农业'
            }, {
                value: 25,
                name: '服务业'
            }, {
                value: 20,
                name: '旅游业'
            }, {
                value: 35,
                name: '制造业'
            }]
        },
        // {
        //     // name: '半结构化',
        //     type: 'pie',
        //     radius: ["20%", "55%"],
        //     center: ['60%', '55%'],
        //     roseType: 'area',
        //     label: {
        //         color: "#fff"
        //     },
        //     data: [{
        //             value: 10,
        //             name: '基础库'
        //         },
        //         {
        //             value: 15,
        //             name: '工业'
        //         },
        //         {
        //             value: 15,
        //             name: '农业'
        //         },
        //         {
        //             value: 25,
        //             name: '服务业'
        //         },
        //         {
        //             value: 30,
        //             name: '旅游业'
        //         },
        //         {
        //             value: 35,
        //             name: '制造业'
        //         }
        //     ]
        // },
        // {
        //     name: '非结构化',
        //     type: 'pie',
        //     radius: ["20%", "55%"],
        //     center: ['60%', '55%'],
        //     roseType: 'area',
        //     label: {
        //         color: "#fff"
        //     },
        //     data: [{
        //             value: 10,
        //             name: '基础库'
        //         },
        //         {
        //             value: 15,
        //             name: '工业'
        //         },
        //         {
        //             value: 15,
        //             name: '农业'
        //         },
        //         {
        //             value: 25,
        //             name: '服务业'
        //         },
        //         {
        //             value: 20,
        //             name: '旅游业'
        //         },
        //         {
        //             value: 35,
        //             name: '制造业'
        //         }
        //     ]
        // },
    ]
};


//交换数据量
export const jhsjl_option = {
    title: {
        text: '交换数据量',
        textAlign: 'center',
        left: '50%',
        top: '1%',
        textStyle: {
            color: "#2fd5ff",
            fontSize: 14
        }
    },
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0.2,
            color: '#1187b4' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(17,135,180,0.3)' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    tooltip: {},
    grid: {
        top: '18%',
        left: '3%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#ddd'
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#ddd'
        },
        splitNumber: 3,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
    }],
    series: [{
        name: '入库数据量',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: []
    }]
};


//共享数据量
export const gxsjl_option = {
    title: {
        text: '共享数据量',
        textAlign: 'center',
        left: '50%',
        top: '1%',
        textStyle: {
            color: "#2fd5ff",
            fontSize: 14
        }
    },
    xAxis: {
        data: ['7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        silent: false,
        axisLabel: {
            textStyle: {
                color: '#eee'
            }
        }
    },
    grid: {
        top: '12%',
        right: '3%',
        bottom: '20%'
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#ddd'
        },
        splitNumber: 3,

    },
    color: ['#54feff', "#106ecc"],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '40%',
        symbolOffset: ["-25%", 0],
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.9
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [50, 30, 50, 40, 60, 70],
        z: 10
    }, {
        name: 'hill1',
        type: 'pictorialBar',
        barCategoryGap: '40%',
        symbolOffset: ["25%", 0],
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.9,
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [50, 30, 50, 40, 60, 70],
        z: 10
    }]
}