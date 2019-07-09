<template>
    <div class="template">
        <div class="sjgx" id="sjgx"></div>
        <div id="sjjhfx"></div>
    </div>
</template>


<script>
import echarts from 'echarts';
import { resize } from '../../../config/rem';
import { gxsj_option as option, sjjhfx_option as option2 } from '../../../config/echarts_api'
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.init();
        this.init2();
    },
    methods:{
        init(){
            let myChart=echarts.init(document.getElementById("sjgx"))
            myChart.setOption(option)
            resize( myChart.resize )
        },
        init2(){
            let myChart=echarts.init(document.getElementById("sjjhfx"))
            myChart.setOption(option2)
            resize( myChart.resize )
        }

    }
}
</script>



<style lang="scss" scoped>
@import '../../../styles/mixin';
.template{
    height: 43rem; 
    @include bis('../../../images/sjgxpt_l.png');
    .sjgx{
        height: 28rem;
        border-bottom: 1px dashed #5479d0;
    }
    #sjjhfx{
        height: 15rem;
    }
}
</style>

