<template>
    <div class="template">
        <div class="rksl" id="rk">
            <section class="container-fluid px-4">
                <header>人口数量</header>
                <div class="row mt-2">
                    <div class="col-3 px-0 text-center" v-for="(item,index) of rknum" :key="index">
                        <div class="huan">{{item.value}}</div>   
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </section>
        </div>
        <div class="rkfl" id="rkfl">
        </div>
        <div class="rkmd" id="rkmd">
        </div>
    </div>
</template>


<script>
import { resize } from '../../../config/rem.js'
import { 
    rk_option as option, 
    rkfl_option as option1,
    rkmd_option as option2,
} from '../config/echarts_api.js'
import { rkData } from '../../../services/getDate.js'

export default {
    data(){
        return {
            rknum:[
                {
                    name:'人口数',
                    value:'500万'
                },
                {
                    name:'外来人口',
                    value:'100万'
                },
                {
                    name:'低保人口',
                    value:'25万'
                },
                {
                    name:'在职人口',
                    value:'200万'
                }
            ]
        }
    },
    mounted(){
        // this.init();
        this.init1();
        this.init2();
    },
    methods:{
        init(){
            let myChart = this.$echarts.init(document.getElementById('rk'));
            rkData().then((res)=>{
                let num=res[0].value;
                for(let i =0;i<res.length;i++){
                    option.series[i]=JSON.parse(JSON.stringify(option.series[0]));
                    option.title[i+1]=JSON.parse(JSON.stringify(option.title[1]));
                    option.title[i+1].text=res[i].name
                    option.title[i+1].left=70/3*i+14+'%'
                }
                for (let i = 0; i < res.length; i++) {
                    option.series[i].center=[70/3*i+15+'%','50%']
                    option.series[i].data=[res[i],{
                        value:num-res[i].value,
                        name:'other'+i,
                        hoverAnimation:false,
                    }]
                }
                myChart.setOption(option)
            }).then(()=>{
                resize( myChart.resize )
            })
        },
        init1(){
            let myChart = this.$echarts.init( document.getElementById('rkfl') );
            myChart.setOption(option1)
            resize( myChart.resize )
        },
        init2(){
            let myChart = this.$echarts.init( document.getElementById('rkmd') );
            myChart.setOption(option2)
            resize( myChart.resize )
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    height: 100%;
    .rksl{
        height: 10.5rem;
        margin-top: -2rem;
        @include bis('../../../images/zhcs_1.png');
        header{
            font-size: 1.15rem;
            color:#01c3ff;
            line-height: 2;
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
    }
    .rkfl{
        height: 16rem;
        margin-top: 1.5rem;
        @include bis('../../../images/zhcs_1.png');
    }
    .rkmd{
        height: 16rem;
        margin-top: 1.5rem;
        @include bis('../../../images/zhcs_1.png');
    }
}
</style>
