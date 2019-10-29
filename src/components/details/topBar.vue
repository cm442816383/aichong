<template>
    <!-- 顶部Bar -->
    <div class="wap-top-bar">
        <header class="head-top">
            <div>
                <a class="aback left-more" href="javascript:;" @click="goback"></a>
                <span class="topbar-title">
                    <div>
                        <a href="javascript:;">
                            <span class="active">商品</span>
                        </a>
                        <a href="javascript:;">
                            <span>详情</span>
                        </a>
                        <a href="javascript:;">
                            <span>评价</span>
                        </a>
                    </div>
                </span>
                <div class="zfoot">
                    <a class="gico" href="javascript:;">
                        <img style="width:25px;height:25px;" src="../../assets/foot.png" alt="">
                    </a>
                </div>
                <span @click="showMore" class="right-more"></span>
            </div>
        </header>
        <div class="icon-container clearfix" :class="isSelected?'':'hide'">
            <router-link to="/index">
                <img class="icon-style" src="../../assets/icon/home1.png" alt="">
                <p class="icon-text">首页</p>
            </router-link>
            <router-link to="/car">
                <img class="icon-style" src="../../assets/icon/category.png" alt="">
                <p class="icon-text">商品分类</p>
            </router-link>
            <router-link to="/cart">
                <img class="icon-style" src="../../assets/icon/cart.png" alt="">
                <p class="icon-text">购物车</p>
            </router-link>
            <router-link to="/Synthesize">
                <img class="icon-style" src="../../assets/icon/my.png" alt="">
                <p class="icon-text">我的E宠</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isSelected:false,
        }
    },
    methods:{
        goback(){
            history.go(-1);
        },
        showMore(){
            this.isSelected=!this.isSelected;
        }
    } 
}
</script>
<style scoped>
    .wap-top-bar{
        background:#fff;
    }
    .head-top{
        height:50px;
        line-height: 50px;
        position:relative;
        padding:0 10px;
        border-bottom: 1px solid #f3f3f3;
        background: #fff;
        color:#333;
    }
    .aback.left-more{
        margin: 0;
        position: absolute;
        left: 5px;
        width: 35px;
        height: 35px;
        top: 7px;
        background: url(../../assets/back3.png) 0 0 no-repeat;
        background-size: 35px auto;
        background-position: 0 0;
    }
    .topbar-title{
        width: 90%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: 0 auto;
        font-size:18px;
        text-align: center;
    }
    a{
        display: inline-block;
        margin:0 2px;
        color:#333;
    }
    .active{
        border-bottom:2px solid #f03e3e;
        padding-bottom: 11px;
        margin: 0 5px;
    }
    .right-more{
        top: 7px;
        right: 9px;
        width: 35px;
        height: 35px;
        background: url(../../assets/more2.png) 0 0 no-repeat;
        background-size: 35px auto;
        position: absolute;
    }
    .zfoot{
        position: absolute;
        right: 1.5em;
        top: -5px;
        font-size:16px;
        z-index: 100;
    }
    .gico{
        display: block;
        width: 50px;
        height: 20px;
        background-size: 50px auto;
        margin-top: 11px;
        background: url(../../assets/foot.png) 0 0 no-repeat;
    }
    .icon-container{
        width:100%;
        padding:10px 0;
        border-bottom: 1px solid #d7d7d7;
        transition:height 2s;
    }
    .icon-container a{
        display:inline-block;
        width:24%;
        text-align: center;
        float:left;
    }
    .icon-style{
        width:25px;
        height:25px;
        margin:0 15px;
    }
    .icon-text{
        color:#666;
        font-size:14px;
        text-align: center;
        margin:0;
    }
</style>
