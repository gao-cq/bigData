<template>
    <div class="app">
        <header class="text-center">基础数据库</header>
        <section class="container-fluid">
            <div class="row">
                <div class="col-l pr-4 pl-5">
                    <Sjzl></Sjzl>
                </div>
                <div class="col-c px-0">
                    <Qbsjl></Qbsjl>
                </div>
                <div class="col-r pl-4 pr-5">
                    <Sjj></Sjj>
                </div>
            </div>
            <div class="row">
                <div class="col-l pr-4 pl-5">
                    <div style="margin-top:-4rem">
                        <Cityval></Cityval>
                    </div>
                </div>
                <div class="col-c px-0">
                    <div style="margin-top:-1.5rem">
                        <Flcenter></Flcenter>
                    </div>
                </div>
                <div class="col-r pr-5 pl-4">
                    <div style="margin-top:-0rem">
                        <Zxrksj></Zxrksj>
                    </div>
                </div>
                
            </div>
            <div class="row">
                <div class="col-12 px-5">
                    <div style="margin-top:-2rem">
                        <Rksjl></Rksjl>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import Sjzl from './children/sjzl.vue';
import Qbsjl from './children/qbsjl.vue';
import Sjj from './children/sjj.vue';
import Cityval from './children/cityval.vue';
import Rksjl from './children/rksjl.vue';
import Flcenter from './children/flcenter.vue';
import Zxrksj from './children/zxrksj.vue';
export default {
    components:{
        Sjzl,
        Qbsjl,
        Sjj,
        Cityval,
        Rksjl,
        Flcenter,
        Zxrksj
    }
}
</script>



<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.app{
    @include bis('../../images/jcsjk_bj.png');
    height: 100%;
    .col-l,.col-r{
        flex: 0 0 22%;
        max-width: 22%;
    }
    .col-c{
        flex: 0 0 56%;
        max-width: 56%;
    }
    header{
        height: 7.3%;
        color:#fff;
        font-size: 1.5rem;
        line-height: 3.65rem;
    }
    
}

</style>
