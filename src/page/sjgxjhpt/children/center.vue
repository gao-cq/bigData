<template>
    <div class="template">
        <div class="dt">
            <header class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="row justify-content-center text-center">
                            <div class="col-3 px-0 pl-1">
                                <p>共享数据总量</p>
                                <span>{{gxsjzl}}</span>
                            </div>
                            <div class="col-3 px-0 ">
                                <p>平台数据总量</p>
                                <span>{{ptslzl}}</span>
                            </div>
                            <div class="col-3 px-0 pr-1">
                                <p>交换数据总量</p>
                                <span>{{jhslzl}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="dt"></div>
        </div>
        <div class="cb mx-4 px-3">
            <div class="row mx-0 pt-1">
                <div class="col-12 mx p-0">数据交换平台</div>
                <div class="col-3 p-0">当前数量：{{ sjjhpt.dqsl }}</div>
                <div class="col-3 p-0">任务数量：{{ sjjhpt.rwsl }}</div>
                <div class="col-3 p-0">规划数量：{{ sjjhpt.ghsl }}</div>
                <div class="col-3 p-0">服务数量：{{ sjjhpt.fwsl }}</div>
            </div>
            <div class="row mx-0">
                <div class="col-12 mx p-0">活跃性</div>
                <div class="col-3 p-0">每小时：{{ hyx.hour }}</div>
                <div class="col-3 p-0">每天：{{ hyx.day }}</div>
                <div class="col-3 p-0">每周：{{ hyx.week }}</div>
                <div class="col-3 p-0">每月：{{ hyx.month }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
// import '../../../../node_modules/echarts/map/js/province/shanxi1'
import '../../../../node_modules/echarts/map/js/china'
import { resize } from '../../../config/rem'
import {sx_option as option} from '../config/echarts_api'
export default {
    data(){
        return {
            gxsjzl:12345,
            ptslzl:12345,
            jhslzl:12345,
            sjjhpt:{
                dqsl:111,
                rwsl:111,
                ghsl:111,
                fwsl:111,
            },
            hyx:{
                hour:10,
                day:240,
                week:1680,
                month:7200
            }
        }
    },
    mounted(){
        this.init1()
    },
    methods:{
        init1(){
            let geoCoordMap={ 
                '台湾': [ 121.509062, 25.044332 ],
                '河北': [ 114.502461, 38.045474 ],
                '山西': [ 112.549248, 37.857014 ],
                '内蒙古': [ 111.670801, 40.818311 ],
                '辽宁': [ 123.429096, 41.796767 ],
                '吉林': [ 125.3245, 43.886841 ],
                '黑龙江': [ 126.642464, 45.756967 ],
                '江苏': [ 118.767413, 32.041544 ],
                '浙江': [ 120.153576, 30.287459 ],
                '安徽': [ 117.283042, 31.86119 ],
                '福建': [ 119.306239, 26.075302 ],
                '江西': [ 115.892151, 28.676493 ],
                '山东': [ 117.000923, 36.675807 ],
                '河南': [ 113.665412, 34.757975 ],
                '湖北': [ 114.298572, 30.584355 ],
                '湖南': [ 112.982279, 28.19409 ],
                '广东': [ 113.280637, 23.125178 ],
                '广西': [ 108.320004, 22.82402 ],
                '海南': [ 110.33119, 20.031971 ],
                '四川': [ 104.065735, 30.659462 ],
                '贵州': [ 106.713478, 26.578343 ],
                '云南': [ 102.712251, 25.040609 ],
                '西藏': [ 91.132212, 29.660361 ],
                '陕西': [ 108.948024, 34.263161 ],
                '甘肃': [ 103.823557, 36.058039 ],
                '青海': [ 101.778916, 36.623178 ],
                '宁夏': [ 106.278179, 38.46637 ],
                '新疆': [ 87.617733, 43.792818 ],
                '北京': [ 116.405285, 39.904989 ],
                '天津': [ 117.190182, 39.125596 ],
                '上海': [ 121.472644, 31.231706 ],
                '重庆': [ 106.504962, 29.533155 ],
                '香港': [ 114.173355, 22.320048 ],
                '澳门': [ 113.54909, 22.198951 ] }
                option.series[0].data=[]
                option.series[1].data=[]
            for(let i in geoCoordMap){
                option.series[1].data.push({
                    name:i,
                    value:geoCoordMap[i].concat([10])
                })
                if(i!=="陕西")
                option.series[0].data.push([{
					coord: geoCoordMap['陕西'],
					value: 10,
				}, {
					coord:  geoCoordMap[i],
				}])
            }
            let myChart =echarts.init(document.getElementById('dt'))
            myChart.setOption(option)
            resize( myChart.resize )
        },
        init(){
            let myChart =echarts.init(document.getElementById('dt'))
            myChart.setOption(option)
            resize( myChart.resize )
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../../../styles/mixin';
.template{
    height: 43rem; 
    .dt{
        height: 35rem;
        padding-top: 0.8rem;
        header{
            height: 4rem;
            @include bis('../../../images/sjgxjhpt_ct.png');
            p{
                color:#f1e40d;
                line-height: 2;
                margin-bottom: 0;
                margin-top: 0.2rem;
                font-size: 0.9rem;
            }
            span{
                color:#24ecfe
            }
        }
        #dt{
            height: 30.2rem;
        }
    }
    .cb{
        height: 8rem;
        @include bis('../../../images/sjgxjhpt_cb.png');
        color:#24ecfe;
        font-size: 0.8rem;
        line-height: 2;
        .mx{
            font-size: 1rem;
        }
    }
}
</style>
