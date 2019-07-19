<template>
    <div class="template">
        <div class="zhzw px-2 py-2">
            <header class="pl-3">智慧政务</header>
            <section class="container-fluid text-center">
                <div class="row">
                    <div class="col-4 px-1 my-1" v-for="(items,index) in zhzw" :key="index">
                        <div class="con py-2">
                            <span v-for="(item,index) of items.value.toString()" :key="index">{{item}}</span>项
                            <div class="mt-1">{{items.name}}</div>
                        </div>
                    </div>
                </div>
            </section>
            <header class="pl-3">智慧社区</header>
            <section class="container-fluid text-center">
                <div class="menu text-left mb-1">
                    <span v-for="(item,index) of zhsq" :key="index">
                        <span @click="selectZhsq(index)"
                            :class="index==curindex?'active':''">
                            {{item.name}}
                        </span> {{index==zhsq.length-1?'':'/'}} 
                    </span>
                </div>
                <div class="row justify-content-center">
                    <div class="col-4 px-1 my-1" v-for="(items,index) in dqzhsq" :key="index">
                        <div class="con py-2">
                            <span v-for="(item,index) of items.value.toString()" :key="index">{{item}}</span>{{["个","站","人","人","室"][index]}}
                            <div class="mt-1">{{items.name}}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="zhyl" id="zhyl">
        </div>
    </div>
</template>

<script>
import '../../../../node_modules/echarts/map/js/china'
import { resize } from '../../../config/rem.js';
import {zhyl_option as option1} from '../config/echarts_api'
export default {
    data(){
        return {
            curindex:0,
            zhzw:[
                {
                    name: "省级全程网办",
                    value: 1402
                },
                {
                    name: "市级全程网办",
                    value: 1402
                },
                {
                    name: "区县级全程网办",
                    value: 1402
                }
            ],
            zhsq:[
                {
                    name:"西安",
                    con:[
                        {
                            name: "社区数",
                            value: 1402
                        },
                        {
                            name: "社区医疗",
                            value: 1402
                        },
                        {
                            name: "社区养老",
                            value: 1402
                        },
                        {
                            name: "社区义工",
                            value: 1402
                        },
                        {
                            name: "社区文化",
                            value: 1402
                        }
                    ]
                },
                {
                    name:"宝鸡",
                    con:[
                        {
                            name: "社区数",
                            value: 215
                        },
                        {
                            name: "社区医疗",
                            value: 215
                        },
                        {
                            name: "社区养老",
                            value: 215
                        },
                        {
                            name: "社区义工",
                            value: 215
                        },
                        {
                            name: "社区文化",
                            value: 215
                        }
                    ]
                },
                {
                    name:"渭南",
                    con:[
                        {
                            name: "社区数",
                            value: 21
                        },
                        {
                            name: "社区医疗",
                            value: 215
                        },
                        {
                            name: "社区养老",
                            value: 215
                        },
                        {
                            name: "社区义工",
                            value: 215
                        },
                        {
                            name: "社区文化",
                            value: 215
                        }
                    ]
                }
            ]
        }
    },
    computed:{
        dqzhsq:function(){
            return this.zhsq[this.curindex].con
        }
    },
    mounted(){
        this.init1();
    },
    methods:{
        init1(){
            let myChart =this.$echarts.init(document.getElementById('zhyl'))
            myChart.setOption(option1);
            resize( myChart.resize )
        },
        selectZhsq(i){
            this.curindex=i
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    height: 100%;
    .zhzw{
        height: 21rem;
        margin-top: -2rem;
        @include bis('../../../images/zhcs_1.png');
        header{
            font-size: 1.15rem;
            color:#01c3ff;
            line-height: 2;
        }
        section{
            .menu{
                font-size: 0.9rem;
                line-height: 2;
                span{
                    cursor: pointer;
                }
                .active{
                    color:#01c3ff
                }
            }
            .con{
                @include bis('../../../images/zhcs_s.png');
                font-size: 0.8rem;
                span{
                    background: #00e8ff;
                    display: inline-block;
                    width: 0.9rem;
                    border-radius: 10%;
                    font-size: 1rem;
                    margin: 0 2px 0 0;
                }
            }
        }
    }
    .zhyl{
        height: 23rem;
        margin-top: 1.5rem;
        @include bis('../../../images/zhcs_1.png');
    }
}
</style>
