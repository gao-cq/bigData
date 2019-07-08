<template>
    <div class="template">
        <div class="tit text-center">数据集</div>
        <div id="sjj"></div>
    </div>
</template>


<script>
import echarts from 'echarts';
import { resize } from '../config/rem.js'
import { sjj_option as option } from '../config/echarts_api.js'
import { sjjData } from '../service/getDate.js'

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
            let myChart = echarts.init(document.getElementById('sjj'));
            sjjData().then((res)=>{
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
@import '../styles/mixin.scss';
.template{
    @include bis('../images/sjj_bj.png');
    .tit{
        font-size: 1.3rem;
    }
    #sjj{
        height: 12rem;
    }
}

</style>

