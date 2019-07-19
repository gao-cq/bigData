<template>
    <div class="template">
        <div class="tit pl-2 mt-3 text-right pr-3"><span class="icon-shuju2 iconfont mr-1"></span>最新入库数据</div>
        <div class="con mt-2 py-3 px-4" >
            <div class="tit0 text-center mb-1">最新入库数据</div>
            <div class="scroll_p">
                <div class="scroll" 
                :style="{'animationDuration':(list.length<5?5:list.length)+'s'}">
                    <table class="table text-center m-0" 
                    :style="{lineHeight:13.5/(list.length>7?7:list.length)+'rem'}" 
                    v-for="(item,index) in '11'" :key="index">
                        <tr v-for="(items, index) in list" :key="index">
                            <td v-for="(item, index) in items" :key="index" :style="index=='fl'?{textAlign:'left'}:''">
                                {{item}}
                            </td>
                        </tr> 
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-24',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-23',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-22',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-21',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-20',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-19',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-18',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-17',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                
            ]
        }
    },
    methods:{
        scroll(){

        }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    .tit{
        line-height: 1.3;
        @include gradients2(transparent,#0d588a);
        .iconfont{
            font-size: 1.3rem;
            vertical-align: -5%;
        }
    }
    .con{
        height: 17.5rem;
        .scroll_p{
            overflow: hidden;
            height: 13.2rem;
        }
        @include bis('../../../images/zxrk_bj.png');
        .scroll{
            animation: scroll infinite linear;
            animation-fill-mode:both;
        }
        .scroll:hover{
            animation-play-state: paused;
        }
        .tit0{
            font-size: 0.9rem;
            color:#24c3f3;
            line-height: 2;
            border-bottom: 1px solid #21b4e2;
        }
        table{
            color:#ddd;
            font-size: 0.8rem;
            line-height: 2.3rem;
            // border-bottom: 1px solid #0d588a;
            th{
                border: 0;
                padding: 0;
                font-size: 0.9rem;
                font-weight: normal;   
                color:#24c3f3;
                border-bottom: 1px solid #21b4e2;
            }
            td{
                border: 0;
                padding: 0;
                color:#ddd;
            }
        }
    }
}
@keyframes scroll{
	0% {transform:translate(0,0);}
	100% {transform:translate(0,-50%);}
}
</style>
