<template>
    <div style="margin-bottom:330px;">
        <top-bar></top-bar>
        <div id="details">
            <div class="siwper" >
                <detail-carousel :pid="pid"></detail-carousel>           
            </div>
            <div class="product_intro bgfff">
                <div class="product-title">
                    <p class="pro-info">{{products.title}}</p>
                    <p class="pro-desc">{{products.subtitle}}</p>
                    <div class="product-price df-b">
                        <div>
                            <span class="now-yuan">￥</span><span class="now-price">{{products.newprice.toFixed(2)}}</span>
                            <span class="origin-price">￥{{products.oprice.toFixed(2)}}</span>
                        </div>
                        <div class="price-right-img">
                            <a href="javascript:;">
                                <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="discounts-container">
                <ul class="handcursor bgfff">
                    <li>
                        <a  href="javascript:;">
                            <span class="ellipsis ml10">超值搭配</span>
                            <span class="ellipsis c999">5折换购美味零食</span>
                            <img class="arrow" src="../assets/icon/arrow.png" alt="">
                        </a>
                        
                    </li>
                </ul>
            </div>
            <div class="spec-container">
                <ul class="spec bgfff">
                    <li class="spec-li ml10 bt-b">
                        <span>已选:</span>
                        <span >'原味'</span>
                    </li>
                    <li class="spec-li ml10">
                        <div>
                            <span>配方:</span>
                            <a style="margin-left:30px;" class="pro-exhibition" href="javacript:;">绿茶味</a>
                            <a class="pro-exhibition isSelected" href="javascript:;">原味</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="buynum-container">
                <div class="buynum bgfff">
                    <span class="w20 dib">购买数量</span>
                    <div class="inputnum-contaner dib w80">
                        <span class="newbleft" :class="inputnum==1?'disableColor':''" @click="changeinput(-1)">-</span>
                        <input class="input-num" type="number" :value="inputnum">
                        <span class="newbright" @click="changeinput(+1)">+</span>
                    </div>
                </div>
            </div>
            <div style="width:10px;"></div>
            <div class="address-container">
                <ul class="address bgfff">
                    <a href="javascript:;">
                        <li class="ml10 padd10">
                            <span style="width:60%;" class="dib">送至
                                <span>
                                    <img class="imgb" src="../assets/icon/dress.png" alt="">
                                </span>
                                <span>重庆 渝中区</span>
                            </span>
                            <span style="width:35%;" class="ellipsis">
                                <span class="right-text ft12 c999">E宠西部中央仓</span>
                                <img class="arrow" src="../assets/icon/arrow.png" alt="">
                            </span>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="guarantee-container bgfff">
                <a class="c666 ft12" href="javascript:;">
                    <span class="s-imgc">
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="">
                        <span>正品保证</span>
                    </span>
                    <span class="s-imgc">
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt="">
                        <span>99元包邮</span>
                    </span>
                    <span class="s-imgc">
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt="">
                        <span>30天退货</span>
                    </span>
                </a>
            </div>
            <div class="pull-to-detail bgfff ft12">
                <ul>
                    <li>
                        <a class="c666 ft14" href="javascript:;">
                            <div style="text-align:center">
                                <span>查看图文详情</span>
                                <img class="arrow" src="../assets/icon/arrow.png" alt="">
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <shopping :pid="pid"></shopping>
    </div>
</template>
<script>
import funs from '../assets/funs/funs.js';
import shopping from '../components/details/shopping.vue';
import topBar from '../components/details/topBar.vue';
import detailCarousel from '../components/details/detailCarousel.vue'
export default {
    data() {
        return {
            current: 0,
            inputnum:1,
            pid:this.$route.query.pid,
            products:{newprice:0,oprice:0}
        }
     },
    methods:{
        load(){
            funs.getDetail(this.pid,res=>{
                this.products=res.data.data[0];
                // console.log(this.products)
            })
        },
        changeinput(i){
            if(i<0&&this.inputnum==1){
                this.inputnum=this.inputnum
            }else{
                this.inputnum+=i;
            }
        }
    },
    created(){
        this.load();
    },
    watch:{
        pid(){
            this.load();
        }
    },
    components:{
        shopping,
        topBar,
        detailCarousel
    }    
}
</script>
<style scoped>
    /* #details{
        overflow:auto;
    } */
    .product_intro{
        width:100%;
        position:relative;
        top:214px;
    }
    .product-price{
        margin-top:10px;
        margin-left:10px;
        border-top:1px solid #eee;
        padding:5px 5px 10px;
    }
    .pro-info{
        font-size: 13px;
        color: #333333;
        padding: 0 10px;
    }
    .pro-desc{
        font-size: 12px;
        color: #e75656;
        padding: 0 10px;
    }
    .now-yuan{
        font-size:12px;
        color:#ea5858;
    }
    .now-price{
        font-size:20px;
        color:#ea5858;
    }
    .origin-price{
        font-size: 12px;
        color: #333;
        text-decoration: line-through;
    }
    .price-right-img img{
        height:25px;
        margin-top:5px;
    }
    .handcursor{
        width:100%;
        position:relative;
        top:235px;
        padding:10px 0;
    }
    .ellipsis{
        width:30%;
        color:#333;
        font-size:13px;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }
    .c999{
        width:55%;
        padding-right: 10px;
        font-size: 12px;
        text-align: right;
        color:#999;

    }
    .arrow{
        position:absolute;
        top:19px;
        right:13px;
        width: 12px;
        height: 12px;
    }
    .spec{
        width:100%;
        position:relative;
        top:245px;
        /* top:160px; */
        padding-bottom:10px;
    }
    .spec-li{
        color:#999;
        font-size:13px;
        padding:10px 0;
    }
    .spec-li :nth-child(2){
        color:#ea5858;
    }
    .pro-exhibition{
        padding:5px 20px;
        border:1px solid #e7e7e7;
        border-radius:5px;
        margin-right:5px;
        vertical-align: middle;
        color:#333 !important;
    }
    .isSelected{
        color: #fff !important;
        background-color: #f03e3e !important;
    }
    .buynum{
        position:relative;
        top:255px;
        padding:10px;
        font-size:13px;
    }
    .inputnum-contaner{
        width:auto;
        /* height:30px; */
        border: 1px solid #999;
        border-radius: 5px;
    }
    .newbleft{
        padding:10px;
        border-right: 1px solid #999;
        border-left: 0;
        line-height: 35px;
    }
    .newbright{
        padding:10px;
        border-right: 0;
        border-left: 1px solid #999;
        border-right: 0;
    }
    .input-num{
        color: #f03e3e;
        border: none;
        padding: 0;
        width: 60px;
        height: 38px;
        font-size: 18px;
        margin: -7px;
        margin-top: -4px;
        -webkit-transform: scale(0.8);
        outline: none;
        text-align: center;
    }
    .address{
        position:relative;
        top:265px;
    }
    .address li{
        color:#333;
        font-size:13px;
    }
    .imgb{
        width:15px;
        position:relative;
        top:3px;
    }
    .right-text{
        position: relative;
        right:-40px;
        display: inline-block;
        line-height: 1;
        padding: 4px;
        border: 1px solid #e7e7e7;
        border-radius: 5px;
        font-size:12px;
    }
    .guarantee-container{
        position:relative;
        top:264px;
    }
    .guarantee-container img{
        width:20px;
        height:20px;
    }
    .s-imgc{
        display: inline-block;
        width: 30%;
        text-align: center;
        padding:10px 0;
    }
    .pull-to-detail{
        position:relative;
        top:270px;
        padding:15px 10px;
    }
</style>
