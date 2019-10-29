<template>
    <div class="swiper">
        <van-swipe style="height:350px" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="imgstyle" :src="image"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Lazyload } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload);
export default {
    data() {
    return {
      images: [
        //访问本地的图片必须使用require访问
        require('../assets/1_carousel.jpg'),
        require('../assets/2_carousel.jpg'),
        require('../assets/3_carousel.jpg'),
        require('../assets/4_carousel.png'),
        require('../assets/5_carousel.jpg'),
        require('../assets/6_carousel.jpg')
        // "https://img2.epetbar.com/2019-10/14/09/de2eaf26ed9922239278aacd91402a8f.jpg?x-oss-process=style/water",
        // "https://img2.epetbar.com/nowater/2019-10/12/15/c89b8e49b100a88f32b5919275ff42fd.jpg?x-oss-process=style/water",
        // "https://img2.epetbar.com/2019-10/14/17/a6f4f8060f83da1898633022d946b729.png?x-oss-process=style/water",
        // "https://img2.epetbar.com/2019-10/10/15/6436906fdf215946c3e48111ba72fd81.jpg?x-oss-process=style/water",
        // "https://img2.epetbar.com/2019-10/14/10/ae6c0457fccf8cfb26ffac291b19f814.jpg?x-oss-process=style/water",
        // "https://img2.epetbar.com/nowater/2019-10/12/11/f2bd5e9d401989aa9bb161cce4af9e99.jpg?x-oss-process=style/water"
      ]
    }
  }
}
</script>


<style scoped>
    .swiper {
        width: 100%;
        height: 3.4rem;
    }
    .imgstyle {
        width: 100%;
        height: 100%; 
        /* pointer-events: none; */
    } 
     .van-swipe__indicator--active{
        background: #fff;
        width:16px;
        height:6px;
        border-radius: 5px;
    } 
     /*
    .van-swipe{
        width: 100%;height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    } */
</style>



