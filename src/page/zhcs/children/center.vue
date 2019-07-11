<template>
    <div class="template">
        <div class="dt" id="dt"></div>
        <div class="pie" id="qyzb"></div>
    </div>
</template>

<script>
import { resize } from '../../../config/rem.js';
import {qyzb_option as option1,
china_option as option} from '../config/echarts_api'
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.init();
        this.init1();
    },
    methods:{
        init(){
            let myChart =this.$echarts.init(document.getElementById('dt'))
            myChart.setOption(option);
            resize( myChart.resize )
        },
        init1(){
            let myChart =this.$echarts.init(document.getElementById('qyzb'))
            myChart.setOption(option1);
            resize( myChart.resize )
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    height: 100%;
    .dt{
        height: 30rem;
        margin-top: 1rem;
        @include bis('../../../images/zhcs_2.png');
    }
    .pie{
        height: 11rem;
        margin-top: 1.5rem;
        @include bis('../../../images/zhcs_3.png');
    }
}
</style>
