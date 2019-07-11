<template>
    <div class="app">
        <header class="text-center">智慧城市</header>
        <section class="container-fluid">
            <div class="row">
                <div class="col-l pl-5">
                    <Left></Left>
                </div>
                <div class="col-c px-4">
                    <Center></Center>
                </div>
                <div class="col-r pr-5">
                    <Right></Right>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import Left from './children/left.vue'
import Center from './children/center.vue'
import Right from './children/right.vue'
export default {
    data(){
        return {
            
        }
    },
    components:{
        Left,
        Center,
        Right
    }
}
</script>


<style lang="scss" scoped>
@import '../../styles/mixin';
.app{
    height: 100%;
    @include bis('../../images/zhcs_bj.jpg');
    header{
        font-size: 1.5rem;
        height: 8%;
        line-height: 4rem;
    }
    section{
        .col-l{
            flex: 0 0 30%;
            max-width: 30%;
        }
        .col-r{
            flex: 0 0 29%;
            max-width: 29%;
        }
        .col-c{
            flex: 0 0 41%;
            max-width: 41%;
        }
    }
}
</style>
