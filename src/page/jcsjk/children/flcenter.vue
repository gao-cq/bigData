<template>
    <div class="app">
        <div class="tit pl-2 mt-3"><span class="icon-shuju1 iconfont mr-1"></span>数据总量</div>
        <div class="con mt-2 py-2 px-4 container-fluid">
            <div class="row">
                <div class="col-2 menu pr-0" :style="{paddingTop:15.6/(curlist.length+1)+'rem'}">
                    <div v-for="(item,index) of lists" 
                    :key="index" 
                    :style="{lineHeight:15.6/(curlist.length+1)+'rem'}"
                    @click="curindex=index"
                    :class="curindex==index?'active':''"
                    >{{item.name}}</div>
                </div>
                <div class="col-10 pl-0">
                    <table class="table text-center" :style="{lineHeight:15.6/(curlist.length+1)+'rem'}">
                        <tr>
                            <th>数据集分类</th>
                            <th>数据集名称</th>
                            <th>数据量</th>
                        </tr>
                        <tr v-for="(items, index) in curlist" :key="index">
                            <td v-for="(item, index) in items" :key="index">
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
            curindex:0,
            lists:[
                {
                    name:'人口',
                    data:[
                        {
                            sjjfl:'公安',
                            sjjmc:'户籍信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'合作医疗基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'低保求助信息',
                            sjl:'1234',
                        },{
                            sjjfl:'民政',
                            sjjmc:'养老保险基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'人社',
                            sjjmc:'医保基本信息',
                            sjl:'1234',
                        }
                    ]
                },
                {
                    name:'法人',
                    data:[
                        {
                            sjjfl:'公安',
                            sjjmc:'户籍信息',
                            sjl:'12345',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'合作医疗基本信息',
                            sjl:'123',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'低保求助信息',
                            sjl:'1234',
                        },{
                            sjjfl:'民政',
                            sjjmc:'养老保险基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'人社',
                            sjjmc:'医保基本信息',
                            sjl:'1234',
                        }
                    ]
                },
                {
                    name:'空间地理',
                    data:[
                        {
                            sjjfl:'公安',
                            sjjmc:'户籍信息',
                            sjl:'1235',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'合作医疗基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'低保求助信息',
                            sjl:'1234',
                        },{
                            sjjfl:'民政',
                            sjjmc:'养老保险基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'人社',
                            sjjmc:'医保基本信息',
                            sjl:'1234',
                        }
                    ]
                },
                {
                    name:'宏观经济',
                    data:[
                        {
                            sjjfl:'公安',
                            sjjmc:'户籍信息',
                            sjl:'1237',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'合作医疗基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'低保求助信息',
                            sjl:'1234',
                        },{
                            sjjfl:'民政',
                            sjjmc:'养老保险基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'人社',
                            sjjmc:'医保基本信息',
                            sjl:'1234',
                        }
                    ]
                },
                {
                    name:'证照',
                    data:[
                        {
                            sjjfl:'公安',
                            sjjmc:'户籍信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'卫生',
                            sjjmc:'合作医疗基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'民政',
                            sjjmc:'低保求助信息',
                            sjl:'1234',
                        },{
                            sjjfl:'民政',
                            sjjmc:'养老保险基本信息',
                            sjl:'1234',
                        },
                        {
                            sjjfl:'人社',
                            sjjmc:'医保基本信息',
                            sjl:'1234',
                        }
                    ]
                },
            ]
        }
    },
    computed:{
        curlist:function(){
            return this.lists[this.curindex].data
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.app{
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
        @include bis('../../../images/center_bj.png');
        .menu{
            div{
                line-height: 2;
                text-indent: 1.5rem;
                font-size: 0.08rem;
                background: #0d2850;
                border-top: 1px solid #21b4e2;
                color:#24c3f3;
                cursor: pointer;
            }
            div.active{
                background: #0f356d;
            }
            div+div{
                border-top: 1px solid #2c4578;
            }
        }
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
                border-top: 1px solid #2c4578;
            }
        }
    }
}

</style>
