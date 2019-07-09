<template>
    <div class="tempalte">
        <header class="text-center">数据共享交换平台</header>
        <section class="container-fluid">
            <div class="row">
                <div class="col-l pl-5">
                    <Left></Left>
                </div>
                <div class="col-c">
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
import Left from './children/left.vue';
import Right from './children/right.vue';
import Center from './children/center.vue';
export default {
    data(){
        return {

        }
    },
    components:{
        Left,
        Right,
        Center
    }
}
</script>


<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.tempalte{
    height: 100%;
    @include bis('../../images/sjgxjhpt.jpg');
    header{
        height: 11%;
        color:#0ab7ff;
        font-size: 2.1rem;
        line-height: 4.5rem;
    }
    section{
        .col-l,.col-r{
            flex: 0 0 30%;
            max-width: 30%;
        }
        .col-c{
            flex: 0 0 40%;
            max-width: 40%;
        }
    }
}
</style>

