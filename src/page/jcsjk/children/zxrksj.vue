<template>
    <div class="template">
        <div class="tit pl-2 mt-3 text-right pr-3"><span class="icon-shuju1 iconfont mr-1"></span>最新入库数据</div>
        <div class="con mt-2 py-2 px-4" >
            <table class="table text-center" :style="{lineHeight:16.6/(list.length+1)+'rem'}">
                <tr>
                    <th colspan="3">最新入库数据</th>
                </tr>
                <tr v-for="(items, index) in list" :key="index">
                    <td v-for="(item, index) in items" :key="index" :style="index=='fl'?{textAlign:'left'}:''">
                        {{item}}
                    </td>
                </tr> 
            </table>
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
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                {
                    fl:'2019-06-25',
                    sjjmc:'户籍信息',
                    sjl:'2344',
                },
                
            ]
        }
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
        @include bis('../../../images/zxrk_bj.png');
        table{
            color:#ddd;
            font-size: 0.8rem;
            line-height: 2.3rem;
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

</style>
