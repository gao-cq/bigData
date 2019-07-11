export const rk_option = {
    tooltip: {
        formatter: (e) => {
            if (e.dataIndex == 1) {
                return null
            } else {
                return `${e.name}: ${e.value/10000}万 (${e.percent}%)`
            }
        }
    },
    title: [{
            text: '人口数量',
            textStyle: {
                color: '#01c3ff',
                fontSize: 16,
            },
            top:'5%',
            left: '5%',
        },
        {
            text: '',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            textAlign: 'center',
            bottom: '10%',
            left: '',
        }
    ],
    color: ['#fb841b', '#7a501f', '#a5e828', '#587427', '#6394fa', '#224a9b', '#2ff1a6', '#0f7f62', '#18ccff', '#064b72'],
    series: [{
        type: 'pie',
        radius: ['30%', '42%'],
        clockwise: false,
        label: {
            show:true,
            // formatter:'{c}',
            // position: 'center',
        },
        data: []
    }]
};


//人口分类
export const rkfl_option={
    title:{
        text: '人口分类',
        textStyle: {
            color: '#01c3ff',
            fontSize: 16,
        },
        top: '4%',
        left: '5%',
    },
    legend: {
        data:["就业人口","未就业人口"],
        textStyle:{
            color:"#ddd"
        },
        top:'12%',
        right:"5%"
    },
    grid:{
        left:'5%',
        right:'65%',
        bottom:'25%',
        top:'15%'
    },
    tooltip:{},
    yAxis: {
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
    xAxis: {
        type: 'category',
        data: ['老\n人', '中\n年', '青\n年','少\n年','幼\n年'],
        axisLabel: {
            color: '#fff'
        },
    },
    series:[
        {
            type:'bar',
            barCategoryGap: '70%',
            data: [1,2,3,4,3],
            color: ["#0087f5"]
        },
        {
            type:'pie',
            center:['69%',"62%"],
            radius: '47%',
            color: ["#03a9f5", "#e3ba24"],
            label:{
                
            },
            data:[
                {value:10,name:"就业人口"},
                {value:5,name:"未就业人口"}
            ]
        }
    ]
}

//人口密度
export const rkmd_option = {
    title: {
        text: '人口密度',
        textStyle: {
            color: '#01c3ff',
            fontSize: 16,
        },
        top: '4%',
        left: '5%',
    },
    color: ["#beac45", "#2278e5", "#6855c2"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['城市', '农村', '外来'],
        inactiveColor:"#000",
        textStyle: {
            color: "#ddd"
        },
        top: '10%',
        right: "5%"
    },
    grid: {
        left: '5%',
        right: '7%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#aaa'
        },
        data: ['西安', '宝鸡', '渭南', '铜川', '汉中', '安康', '延安', '榆林']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#aaa'
        },
        splitLine:{
            show:false
        }
    }],
    series: [{
            name: '城市',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210, 150]
        },
        {
            name: '农村',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 230, 310, 260]
        },
        {
            name: '外来',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 230, 210, 320]
        }
    ]
};

//企业规划占比
export const qyzb_option={
    title: [{
        text: '规上企业占比',
        textStyle: {
            color: '#01c3ff',
            fontSize: 16,
        },
        top: '4%',
        left: '5%',
    }, {
        text: '小微企业占比',
        textStyle: {
            color: '#01c3ff',
            fontSize: 16,
        },
        top: '4%',
        left: '50%',
    }],
    grid: {
        left: '5%',
        right: '65%',
        bottom: '25%',
        top: '15%'
    },
    tooltip: {},
    series: [
        {
            type: 'pie',
            center: ['30%', "60%"],
            radius: '55%',
            color: ["#03a9f5", "#e3ba24"],
            label: {
               show:false 
            },
            data: [{
                    value: 10,
                    name: "就业人口"
                },
                {
                    value: 5,
                    name: "未就业人口"
                }
            ]
        },
        {
            type: 'pie',
            center: ['75%', "60%"],
            radius: '55%',
            color: ["#03a9f5", "#e3ba24"],
            label: {
                show: false
            },
            data: [{
                    value: 10,
                    name: "就业人口"
                },
                {
                    value: 5,
                    name: "未就业人口"
                }
            ]
        }
    ]
} 


export const zhyl_option={
    title: {
        text: '人口分类',
        textStyle: {
            color: '#01c3ff',
            fontSize: 16,
        },
        top: '3%',
        left: '5%',
    },
    grid: {
        top: '60%',
        left: '20%',
        right: '9%',
        bottom: '10%',
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        // show: false,
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
        data: ['一级医院', '二级医院', '三级医院'],
        axisLabel: {
            color: '#fff'
        },
    },
    legend: {
        data: ['床位数', '人员数'],
        textStyle: {
            color: "#ddd"
        },
        top: '50%',
        right: "5%"
    },
    series: [
        {
            type: 'pie',
            center: ['50%', "29%"],
            radius: '27%',
            color: ["#03a9f5", "#7c55f2", "#e3ba24"],
            label: {

            },
            data: [{
                    value: 10,
                    name: "一级医院"
                },
                {
                    value: 10,
                    name: "二级医院"
                },
                {
                    value: 6,
                    name: "三级医院"
                }
            ]
        },
        {
            type: 'bar',
            name:'床位数',
            barCategoryGap: '60%',
            data: [1, 2, 3],
            color: ["#ffae00"],
        },
        {
            type: 'bar',
            name: '人员数',
            barCategoryGap: '60%',
            data: [1, 2, 3],
            color: ["#0087f5"]
        }
    ]
}


//中国地图
export const china_option={
    geo: {
        map: 'china',
        zoom: 1.05,
        label: {
            // show:true,
            color:'#fff',
            emphasis: {
                show: true,
                color: '#fff',
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
                        color: 'rgba(0, 55, 82, 0.8)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 55, 82, .9)' // 100% 处的颜色
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
                        color: 'rgba(0, 55, 82, 0.9)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 55, 82, 1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        }
    }
}