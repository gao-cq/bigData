//全部数据量
export const qbsjl_option = {
    tooltip: {
        formatter:(e)=>{
            if(e.dataIndex==1){
                return null
            }else{
                return `${e.name}: ${e.value} (${e.percent}%)`
            }
        }
    },
    title: [
        {
            text: '',
            textStyle:{
                color:'#fff',
                fontSize:14,
            },
            textAlign:'center',
            left: '17%',
        }

    ],
    color:['#fb841b', '#7a501f','#a5e828','#587427','#6394fa','#224a9b','#2ff1a6','#0f7f62','#18ccff','#064b72'],
    series: [{
        type: 'pie',
        radius: ['30%', '50%'],
        clockwise:false,
        label: {
            normal: {
                show:false
            },
        },
        data:[]
    }]
};

//数据集
export const sjj_option={
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    label:{
        formatter: (e)=>{
            return `${Math.round(e.percent)}% ${e.name}`
        }
    },
    color:['#427ffd','#e05d68','#ccce32','#18ccff','#a682e4','#f19861','#00cbcc'],
    series: [
        {
            name:'数据集',
            type:'pie',
            roseType: 'radius',
            radius: ['0%', '60%'],
            center:['50%','50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    color: '#fff',
                },
            }
        }
    ]
};


//入库数据量

export const rksjl_option = {
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0.2, color: '#1187b4' // 0% 处的颜色
        }, {
            offset: 1, color: 'rgba(17,135,180,0.1)' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    tooltip: {},
    grid: {
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel:{
                color:'#ddd'
            },
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#ddd'
            },
            splitNumber:3,
            splitLine: {
                show: true,
                lineStyle:{
                    color:'rgba(255,255,255,0.1)'
                }
            },
        }
    ],
    series : [
        {
            name:'入库数据量',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[]
        }
    ]
};



//各市数据量
export const citysjl_option={
    title: {
        text: '',
    },
    color: {
        type: 'linear',
        x: 0,
        x2: 1,
        // y: 0,
        // y2: 1,
        colorStops: [{
            offset: 0, color: '#34b5e2' // 0% 处的颜色
        }, {
            offset: 1, color: '#4475c8' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // color:['#117DEF','#1A8AA6'],
    grid: {
        top:'8%',
        left: '10%',
        right: '18%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show:false,
        boundaryGap: [0, 0.01],
        axisLabel: {
            color:'#fff'
        },
        splitLine: {
            lineStyle:{
                color: '#00ccff',
                opacity: 0.3
            }
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['西安市','安康市','西安市','安康市','西安市','安康市','西安市','安康市','西安市'],
        axisLabel: {
            color:'#fff'
        },
    },
    series: [
        {
            name: '数据量',
            type: 'bar',
            label:{
                show:true,
                position: ['100%', '0%'],
                offset:[10,0],
                color:'#ddd'
            },
            barCategoryGap:'65%',
            data: [1803, 2389, 2904, 10490, 13174, 6300,6330,5000,6000]
        }
    ]
}

//共享数据top10

export const gxsj_option = {
    title: {
        text: '共享数据TOP10',
        x:'center',
        top: '1%',
        textStyle:{
            color: "#2fd5ff",
            fontSize:14
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
            color: '#fff'
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
        data: ['公安厅', '民政厅', '人社厅', '农业厅', '工信厅', '发改委', '教育厅', '卫健委', '自然资源局','商务厅'],
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel: {
            // show: false,
            color: '#fff'
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
            formatter:'{c}'+'万条'
        },
        barCategoryGap: '65%',
        data: [1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111]
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
        data: ['07','08','09','10','11','12'],
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
        axisLabel:{
            color:'#ddd'
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
        axisLine:{
            lineStyle:{
                color:'#aaa'
            }
        }
    },
    grid: {
        top: '18%',
        bottom:'15%',
        left: '15%',
    },
    series: [{
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            barCategoryGap:'60%',
            data: [-1,-2,-3,-1,-2,-3]
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            barCategoryGap:'60%',
            itemStyle: itemStyle,
            data: [1,2,3,1,2,3]
        }
    ]
};

//基础分类
export const jcfl_option = {
    title: {
        text: '基础分类',
        x: 'center',
        top:'2%',
        textStyle:{
            color: "#2fd5ff",
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: '2%',
        bottom:'10%',
        data: ['结构化', '半结构化', '非结构化'],
        selectedMode: 'single',
        selected: {
            结构化: true
        },
        orient: 'vertical',
        textStyle:{
            color:'#ddd'
        }
    },
    color: ["#6054ff", "#00c6ff", "#f19610", "#8a00e1", "#34d160", "#0278e7"],
    calculable: true,
    series: [{
            name: '结构化',
            type: 'pie',
            radius: ["20%", "55%"],
            center: ['60%', '55%'],
            roseType: 'area',
            label: {
                color:"#fff"
            },
            data: [
                {
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
                }
            ]
        },
        {
            name: '半结构化',
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
                },
                {
                    value: 15,
                    name: '工业'
                },
                {
                    value: 15,
                    name: '农业'
                },
                {
                    value: 25,
                    name: '服务业'
                },
                {
                    value: 30,
                    name: '旅游业'
                },
                {
                    value: 35,
                    name: '制造业'
                }
            ]
        },
        {
            name: '非结构化',
            type: 'pie',
            radius: ["20%", "55%"],
            center: ['60%', '55%'],
            roseType: 'area',
            label: {
                color: "#fff"
            },
            data: [
                {
                    value: 10,
                    name: '基础库'
                },
                {
                    value: 15,
                    name: '工业'
                },
                {
                    value: 15,
                    name: '农业'
                },
                {
                    value: 25,
                    name: '服务业'
                },
                {
                    value: 20,
                    name: '旅游业'
                },
                {
                    value: 35,
                    name: '制造业'
                }
            ]
        },
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
export const gxsjl_option={
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
        data: ['7月', '8月', '9月', '10月','11月','12月'],
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
        right:'3%',
        bottom:'20%'
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
        data: [50,30,50,40,60,70],
        z: 10
    }]
}

//dq_option

export const dq_option = {
    globe: {
        baseTexture: require('../images/earth.jpg'),
        heightTexture: require('../images/bathymetry_bw_composite_4k.jpg'),

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