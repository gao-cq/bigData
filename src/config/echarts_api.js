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



