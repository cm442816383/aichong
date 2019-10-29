<template>
    <div class="moudle_207 mr10 ml10">
        <div>
            <a href="javascript:;">
                <img class="w100" src="https://img2.epetbar.com/2019-04/28/10/6d921c56be4acc502df8a3d3a0794543.png?x-oss-process=style/water" alt="">
            </a>
        </div>
        <div class="swiper">
            <div v-for="(p,i) of products" :key="i" class="swiper-item">
                <router-link class="dib" :to="p.to">
                    <img class="w100" :src="p.src" alt="">
                    <p class="price-style">
                        ￥<span>{{p.nPrice}}</span>
                    </p>
                    <p class="price-style2">
                        ￥<span>{{p.oPrice}}</span>
                    </p>
                </router-link>
            </div>
            <!-- <div class="swiper-item">
                <a href="javascript:;">
                    <img class="w100" src="https://img1.epetbar.com/2018-11/05/13/9ee60bc3be8f1081c89ceb9f5a5df147.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p class="price-style">
                        ￥<span>25.50</span>
                    </p>
                    <p class="price-style2">
                        ￥<span>36.00</span>
                    </p>
                </a>
            </div>
            <div class="swiper-item">
                <a href="javascript:;">
                    <img class="w100" src="https://img1.epetbar.com/2018-11/02/17/5cb604885c428d77cec58b33a6601a36.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p class="price-style">
                        ￥<span>23.50</span>
                    </p>
                    <p class="price-style2">
                        ￥<span>36.00</span>
                    </p>
                </a>
            </div>
            <div class="swiper-item">
                <a href="javascript:;">
                    <img class="w100" src="https://img1.epetbar.com/2018-11/05/13/a6503017f2a4dd53e4297c5fc2c84f92.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p class="price-style">
                        ￥<span>88.00</span>
                    </p>
                    <p class="price-style2">
                        ￥<span>130.00</span>
                    </p>
                </a>
            </div>    -->
        </div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            products:[
                {
                    src:"https://img1.epetbar.com/2018-11/05/13/5c166c97165b2661f35faf6e6a165b82.jpg?x-oss-process=style/fill&$1=200&$2=200",
                    to:"javascript:;",
                    nPrice:"23.50",
                    oPrice:"36.00"
                },
                {
                    src:"https://img1.epetbar.com/2018-11/05/13/5c166c97165b2661f35faf6e6a165b82.jpg?x-oss-process=style/fill&$1=200&$2=200",
                    to:"javascript:;",
                    nPrice:"23.50",
                    oPrice:"36.00"
                },
                {
                    src:"https://img1.epetbar.com/2018-11/05/13/5c166c97165b2661f35faf6e6a165b82.jpg?x-oss-process=style/fill&$1=200&$2=200",
                    to:"javascript:;",
                    nPrice:"23.50",
                    oPrice:"36.00"
                },
            ]
        }
    }
}
</script>
<style scoped>
    .moudle_207{
        border-radius: 15px;
        background:#fff;
        box-shadow: 0px 5px 12.5px 0px rgba(1,0,0,0.1);
        margin-bottom:22.8px;
    }
    .swiper{
        width:100%;
        height:100%;
        padding-bottom:30px;
        padding-top:20px;
        overflow:hidden;
        display:flex;
        justify-content: space-around;
    }
    .swiper-item{
        width:110px;
        white-space: nowrap;
        overflow-x: scroll;
    }
    .navList{
        display: inline-block;
        text-align: center;
        line-height: 40px;
        width: 100px;
    }
</style>
