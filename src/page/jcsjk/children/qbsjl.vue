<template>
    <div class="template">
        <div class="tit pl-2 mt-3"><span class="icon-shuju iconfont mr-1"></span>全部数据量</div>
        <div class="con mt-2" id="map">
            <div class="row pt-3 px-5">
                <div class="col px-0 text-center" v-for="(item,index) of rknum" :key="index">
                    <span>{{item.name}}</span>
                    <div class="huan mt-2">{{item.value}}</div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import { resize } from '../../../config/rem.js'
import {qbsjl_option as option} from '../../../config/echarts_api.js'
import { qbsjlData } from '../../../services/getDate.js'

export default {
    data(){
        return {
            rknum:[
                {
                    name:'人口库',
                    value:'500万'
                },
                {
                    name:'法人库',
                    value:'100万'
                },
                {
                    name:'空间地理库',
                    value:'25万'
                },
                {
                    name:'宏观经济库',
                    value:'200万'
                },
                {
                    name:'证照库',
                    value:'200万'
                }
            ]
        }
    },
    mounted(){
        // this.init()
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('map'));
            qbsjlData().then((res)=>{
                let num=0;
                for(let i =0;i<res.length;i++){
                    num+=res[i].value
                    option.series[i]=JSON.parse(JSON.stringify(option.series[0]));
                    option.title[i]=JSON.parse(JSON.stringify(option.title[0]));
                    option.title[i].text=res[i].name
                    option.title[i].top='10%'
                    option.title[i].left=76/4*i+11.4+'%'
                }
                for (let i = 0; i < res.length; i++) {
                    option.series[i].center=[76/4*i+12+'%','59%']
                    option.series[i].data=[res[i],{
                        value:num-res[i].value,
                        name:'zs'+i,
                        hoverAnimation:false,
                    }]
                }
                console.log(option)
                myChart.setOption(option)
            }).then(()=>{
                resize(()=>{
                    myChart.resize()
                })
            })
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    .tit{
        line-height: 1.3;
        @include gradients(#0d588a, transparent);
        .iconfont{
            font-size: 1.3rem;
            color:#fff;
            vertical-align: -5%;
        }
    }
    .huan{
        @include bis('../../../images/zhcs_h.png');
        height: 4.5rem;
        width: 4.5rem;
        line-height: 4.5rem;
        margin: 0 auto;
        color:#80ff00;
    }
    span{
        color:#01c3ff;
        font-size: 0.9rem;
    }
    #map{
        height: 9rem;
        @include bis('../../../images/qbsjl.png');
    }
}
</style>

