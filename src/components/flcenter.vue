<template>
    <div class="template">
        <div class="tit pl-2 mt-3"><span class="icon-shuju1 iconfont mr-1"></span>数据总量</div>
        <div class="con mt-2 py-2 px-4">
            <table class="table text-center" :style="{lineHeight:15.6/(list.length+1)+'rem'}">
                <tr>
                    <th></th>
                    <th>数据集分类</th>
                    <th>数据集名称</th>
                    <th>数据量</th>
                </tr>
                <tr v-for="(items, index) in list" :key="index">
                    <td v-for="(item, index) in items" :key="index">
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
                    fl:'人口',
                    sjjfl:'公安',
                    sjjmc:'户籍信息',
                    sjl:'1234',
                },
                {
                    fl:'法人',
                    sjjfl:'合作医疗基本信息',
                    sjjmc:'户籍信息',
                    sjl:'1234',
                },
                {
                    fl:'空间地理',
                    sjjfl:'低保求助信息',
                    sjjmc:'户籍信息',
                    sjl:'1234',
                },{
                    fl:'宏观经济',
                    sjjfl:'养老保险基本信息',
                    sjjmc:'户籍信息',
                    sjl:'1234',
                },
                {
                    fl:'证照',
                    sjjfl:'医保基本信息',
                    sjjmc:'户籍信息',
                    sjl:'1234',
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/mixin.scss';
.template{
    .tit{
        line-height: 1.3;
        @include gradients(#0d588a, transparent);
        .iconfont{
            font-size: 1.3rem;
            vertical-align: -5%;
        }
    }
    .con{
        height: 17rem;
        @include bis('../images/center_bj.png');
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
                color:#24c3f3;
                border-top: 1px solid #2c4578;
            }
            td+td{
                border: 0;
                color:#ddd;
                border-top: 1px solid #2c4578;
            }
        }
    }
}

</style>
