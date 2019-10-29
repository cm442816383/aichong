<template>
    <div style="">
        <div class="my_swiper" :style="ulStyle">
            <div v-for="(img,i) of imgs" :key="i">
                <div class="swiper-item mr15 ml15">
                    <router-link :to="img.to[0]">
                        <img class="w100" :src="img.src[0]" alt="">
                    </router-link>
                </div>
                <div class="df-a swiper-item mr15 ml15">
                    <router-link class="db"  :to="img.to[1]">
                        <img class="img-corner w100 pr5" :src="img.src[1]" alt="">
                    </router-link>
                    <router-link class="db" :to="img.to[2]">
                        <img class="img-corner w100 pl5" :src="img.src[2]" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>           
</template>
<script>
export default {
    data(){
        return{
            value:"",
            mtitle:["进口猫粮","国产猫粮","罐头零食","驱虫助手","猫砂馆","秋冬服饰"],
            imgs:[
                {
                    src:[
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091246513.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water"
                        ],
                    to:[
                        "javascript:;",
                        "javascript:;",
                        "javascript:;"
                    ]    
                },
                {
                    src:[
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091246513.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water"
                        ],
                    to:[
                        "javascript:;",
                        "javascript:;",
                        "javascript:;"
                    ]    
                },
                {
                    src:[
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091246513.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water",
                        "http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water"
                        ],
                    to:[
                        "javascript:;",
                        "javascript:;",
                        "javascript:;"
                    ]    
                }
            ]
        }
    },
    components:{
    //    topCarousel 
    }
}
</script>
<style scoped>
    .outer{
        height: 40px;
        overflow: hidden;
    }
    .inner{
        white-space: nowrap;
        overflow-x: scroll;
    }
    .navList{
        display: inline-block;
        background-color: #3F3F3F;
        color: white;
        text-align: center;
        line-height: 40px;
        width: 100px;
    }
    .ct{
        margin:0 auto;
        color:#fff;
        /* font-size:16px; */
        display:block;
    }
</style>