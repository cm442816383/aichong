<template>
    <div>
        <div>
            <div class="top_menus">
                <!-- <div class="top-fixed"> -->
                    <router-link to="/search" class="search mt25 db">
                        <van-search placeholder="请输入搜索关键词" v-model="kw">
                        </van-search>
                    </router-link>
                    <div class="tab-scrollable">
                        <div class="tab">
                            <div class="navList">
                                <span class="ft20 bold">
                                    <a class="ct" href="javascript:;">精选</a>
                                </span>
                            </div>
                            <div class="navList" v-for="(t,i) of mtitle" :key="i">
                                <span class="ft14">
                                    <a class="ct" href="javascript:;">{{t}}</a>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                <!-- </div> -->
                <div class="swipeMunes">
                    <top-carousel></top-carousel>
                </div>
            </div>
            <div class="menus" style="margin-top:-10%;width:100%;">
                <ul class="flex">
                    <li style="">
                        <a href="javascript:;">
                            <img src="https://img2.epetbar.com/2019-10/14/23/bafe9d5021dab2f95e5f734f9cce600f.png@!water" alt="">
                        </a>
                    </li>
                    <li style="">
                        <a href="javascript:;">
                            <img src="https://img2.epetbar.com/2019-10/14/23/8b3cbc3826d171f1867bd193523e4385.png@!water" alt="">
                        </a>
                    </li>
                    <li style="">
                        <a href="javascript:;">
                            <img src="https://img2.epetbar.com/2019-10/14/23/873277df80dcf50846af51b9b177fa86.png@!water" alt="">
                        </a>
                    </li>
                    <li style="">
                        <a href="javascript:;">
                            <img src="https://img2.epetbar.com/2019-10/14/23/09a8003c879e7cb6d369192db5ac56fd.png@!water" alt="">
                        </a>
                    </li>
                    <li style="">
                        <a href="javascript:;">
                            <img src="https://img2.epetbar.com/2019-10/14/23/f412df3c5b72552dbfad0aeb80ecef51.png@!water" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import topCarousel from '../components/topCarousel.vue'
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    data(){
        return{
            kw:"",
            value:"",
            mtitle:["进口猫粮","国产猫粮","罐头零食","驱虫助手","猫砂馆","秋冬服饰"]
        }
    },
    methods:{
        
    },
    components:{
       topCarousel 
    }
}
</script>
<style scoped>
    .top_menus{
        position:relative;
    }
    .mt25{
        width:100%;
        /* margin-top:25px; */
        height:0px;
        position: relative;
        top:20px;
        z-index: 10;
    }
    .van-search{
        background:transparent !important;
    }
    .van-search__content{
        width:20%;
        margin-left:15px;
        margin-right:15px;
        border-radius:30px;
    }
    .tab-scrollable{
        background:transparent;
        padding-bottom: 17px;
        position:relative;
        top:63px;
        z-index:10;
        height: 21px;
        overflow-x: auto; 
        overflow-y: hidden;
    }
    .tab{
        display:flex;
        /* justify-content:space-around; */
        height:44px;
        white-space: nowrap;
        overflow-x: scroll;
    }
    .navList{
        display: inline-block;
        text-align: center;
        line-height: 40px;
        width: 100px;
    }
    .tab span{
        width:90px;
        display: block !important;
        height: 44px;
        line-height: 44px;
        text-align:center;
        padding:0;
    }
    .ct{
        margin:0 auto;
        color:#fff;
        /* font-size:16px; */
        display:block;
    }
    .swipeMunes{
        margin-top:-60px;
    }
    .mess1{
        background:url("../assets/mess.png") no-repeat;
    }
    .flex{
        display:flex;
    }
    .menus{
        position:relative;
        z-index: 1;
        margin:0 auto;
        max-width: 750px;
        min-width: 320px;
        top:330px;
    }
    ul.flex img{
        height:127px;
    }
    
</style>
