<template>
    <div>
        <van-nav-bar
            left-text=""          
            left-arrow
            @click-left="onClickLeft"
        /> 
    </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
export default {
    methods: {
    onClickLeft() {
        this.$router.go(-1);
    },   
  }
}
</script>
<style scoped>
    .van-icon-arrow-left:before{
        font-size:26px;
        color:#ccc;

    }
</style>