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
import { resize } from '../../../config/rem'
import {dq_option as option} from '../../../config/echarts_api'
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
        this.init()
    },
    methods:{
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
        height: 34rem;
        padding-top: 1rem;
        header{
            height: 4rem;
            @include bis('../../../images/sjgxjhpt_ct.png');
            p{
                color:#f1e40d;
                line-height: 2;
                margin-bottom: 0;
                font-size: 0.9rem;
            }
            span{
                color:#24ecfe
            }
        }
        #dt{
            height: 30rem;
        }
    }
    .cb{
        height: 8rem;
        margin-top: 1rem;
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
