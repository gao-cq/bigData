<template>
    <div class="template">
        <div class="tit pl-2 mt-3"><span class="icon-shuju iconfont mr-1"></span>入库数据量 ( 12个月 )</div>
        <div class="con mt-2" id="rksjl">
            
        </div>
    </div>
</template>


<script>
import echarts from 'echarts';
import { resize } from '../../../config/rem.js'
import {rksjl_option as option} from '../../../config/echarts_api.js'
import { rksjlData } from '../../../services/getDate.js'
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('rksjl'));
            rksjlData().then((res)=>{
                option.series[0].data=res
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
            vertical-align: -5%;
        }
    }
    .con{
        height: 9rem;
        @include bis('../../../images/qbsjl.png');
    }
}
</style>
