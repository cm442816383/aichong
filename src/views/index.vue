<template>
    <div>
        <top-menus></top-menus>
        <f-view></f-view>
        <sm-title></sm-title>
        <m1-carousel></m1-carousel>
        <sm-title></sm-title>
        <m2-carousel></m2-carousel>
        <sm-title></sm-title>
        <m2-carousel></m2-carousel>
        <sm-title></sm-title>
        <m3-carousel></m3-carousel>
        <m4-carousel></m4-carousel>
        <sm-title></sm-title>
        <guess-like></guess-like>
        <bottom-tab></bottom-tab>
    </div>    
</template>
<script>
import topMenus from '../components/topMenus.vue'
import fView from '../components/fView.vue'
import smTitle from '../components/smTitle.vue'
import m1Carousel from '../components/m1Carousel.vue'
import m2Carousel from '../components/m2Carousel.vue'
import m3Carousel from '../components/m3Carousel.vue'
import m4Carousel from '../components/m4Carousel.vue'
import guessLike from '../components/guessLike.vue'
// import bottomTab from '../components/bottomTab.vue'
export default {
    data(){
        return {

        }
    },
    components:{
        topMenus,
        fView,
        smTitle,
        m1Carousel,
        m2Carousel,
        m3Carousel,
        m4Carousel,
        guessLike,
    }
}
</script>