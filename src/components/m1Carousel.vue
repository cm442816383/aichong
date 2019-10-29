<template>
    <div class="mould_205" :style="{width:innerWidth+'px'}">
        <div class="my_swiper" :style="ulStyle">
            <div class="swiper-item mr15 ml15">
                <router-link to="javascript:;">
                    <img class="w100" src="http://img2.epetbar.com/nowater/showcase/2019/10/14/091246513.jpg@!water" alt="">
                </router-link>
            </div>
            <div class="df-a swiper-item mr15 ml15">
                <router-link class="db"  to="javascript:;">
                    <img class="w100 pr5" src="http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water" alt="">
                </router-link>
                <router-link class="db" to="javascript:;">
                    <img class="w100 pl5" src="http://img2.epetbar.com/nowater/showcase/2019/10/14/091318584.jpg@!water" alt="">
                </router-link>
            </div>
            <div class="swiper-pagination">
                <span class="swiper-pagination-bullet active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            i:0,
            innerWidth:window.innerWidth,
            imgs:[]
        }
    },
    created(){
        window.addEventListener("resize",()=>{
        this.innerWidth=window.innerWidth;
        })
    },
    computed:{//希望网页宽度变化或i变化，则自动重新计算ul的位置和大小
        ulStyle(){//修饰所有图片的父元素
        var width=this.innerWidth*(this.imgs.length+1)+"px";
        var transition="all .5s linear";
        var marginLeft=-this.i*this.innerWidth+"px";
        return { transition, width, marginLeft }
        }
    }
}
</script>
<style scoped>
mould_205{
    margin-bottom:22.08px;
}
.swiper-pagination{
    width:100%;
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    /* transition: opacity .3s;
    transform: translateZ(0);
    z-index: 10; */
}
.swiper-pagination-bullet.active{
    background: #333;
    width: 16px;
    border-radius: 30px;
}
.swiper-pagination-bullet{
    width: 6px;
    height: 6px;
    margin: 0 4px;
    background: #dbdbdb;
    opacity: .9;
    transition: all 0.25s ease;
}

</style>
