<template>
    <div class="template">
        <div class="jcfl" id="jcfl"></div>
        <div class="con" id="jxsjl"></div>
        <div class="con" id="gxsjl"></div>
    </div>
</template>

<script>
import echarts from 'echarts';
import { resize } from '../../../config/rem.js'
import {jcfl_option as option0, jhsjl_option as option, gxsjl_option as option2} from '../../../config/echarts_api.js'
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
            let myChart = echarts.init(document.getElementById('jxsjl'));
            let myChart2 = echarts.init(document.getElementById('gxsjl'));
            let myChart0 = echarts.init(document.getElementById('jcfl'));
            rksjlData().then((res)=>{
                option.series[0].data=res
                myChart.setOption(option)
            }).then(()=>{
                resize( myChart.resize )
            })

            myChart2.setOption(option2)
            myChart0.setOption(option0)
            resize( myChart2.resize )
            resize( myChart0.resize )
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../../styles/mixin';
.template{
    height: 43rem; 
    @include bis('../../../images/sjgxpt_l.png');
    .jcfl{
        height: 17rem;
        // border-bottom: 1px dashed #5479d0;
    }
    #jxsjl{
        height: 13rem;
    }
    #gxsjl{
        height: 13rem;
    }
}
</style>
