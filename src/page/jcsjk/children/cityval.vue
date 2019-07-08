<template>
    <div class="template">
        <div class="tit pl-2 mt-3"><span class="icon-shuju1 iconfont mr-1"></span>各市数据量</div>
        <div class="con mt-2" id="citysjl">
            
        </div>
    </div>
</template>


<script>
import echarts from 'echarts'
import { citysjl_option as option} from '../../../config/echarts_api.js'
import { resize } from '../../../config/rem.js'


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
            let myChart = echarts.init(document.getElementById('citysjl'));
            myChart.setOption(option)
            resize(()=>{
                myChart.resize()
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
        @include gradients2(#0d588a, transparent);
        .iconfont{
            font-size: 1.3rem;
            vertical-align: -5%;
        }
    }
    .con{
        height: 19.5rem;
        @include bis('../../../images/zxrk_bj.png');
    }
}

</style>
