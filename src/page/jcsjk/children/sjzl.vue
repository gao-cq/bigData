<template>
    <div class="template">
        <div class="tit text-center">总数据量</div>
        <section>
            <div class="num text-center mt-2">{{data.allnum}}</div>
            <div class="row text-center mt-3">
                <div class="col-6">
                    <div class="zz">同比增量</div>
                    <div class="zzn mt-2">{{data.tbzjVal}}</div>
                </div>
                <div class="col-6">
                    <div class="zz">环比增长</div>
                    <div class="zzn mt-2">{{data.hbzzVal}}</div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { sjzjData } from '../../../services/getDate.js';
export default {
    data(){
        return {
            data:{
                allnum:'',
                tbzjVal:'',
                hbzzVal:''
            }
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            sjzjData().then((res)=>{
                this.data=res
            })
        }
    }

}
</script>


<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.template{
    height: 10rem;
    @include bis('../../../images/zsjl_bj.png');
    .tit{
        font-size: 1.5rem;
    }
    .num{
        color: #25c6f7;
        font-size: 1.3rem;
    }
    .zz{
        color:#3c7bd8
    }
}
</style>

