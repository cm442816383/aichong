<template>
    <div>
        <!-- 2.搜索栏 -->
        <div>           
            <!-- 2.1搜索框 -->
            <div class="search">
                <div class="sea">
                    <img src="../assets/book/定位.png" class="img1">
                    <img src="../assets/book/下三角形.png" class="img2">
                    <div>
                        猫咪
                    </div>
                </div>
                <div class="in">
                    <img src="../assets/book/搜索.png" alt="" style="">
                    <span>请输入搜索内容</span>
                </div>
                <div class="tu">
                    <img src="../assets/book/chat.png" alt="">
                </div>
                <div style="clear:both"></div>
            </div>
            <!-- 2.2导航栏 --> 
            <van-tabs v-model="active" sticky>
                <van-tab title="收藏">内容 1</van-tab>
                <van-tab title="推荐">
                    <div style="display:flex">
                        <div style="width:75px;">
                            <router-link to="" style="display: inline-block;">
                                <img src="../assets/tab/eat.png" alt="" width="100%">
                            </router-link>
                        </div>
                        <div style="width:75px;">
                            <router-link to="" style="display: inline-block;">
                                <img src="../assets/tab/diseasePet.png" alt="" width="100%">
                            </router-link>
                        </div>
                        <div style="width:75px;">
                            <router-link to="" style="display: inline-block;">
                                <img src="../assets/tab/moreTool.png" alt="" width="100%">
                            </router-link>
                        </div>
                        <div style="width:75px;">
                            <router-link to="" style="display: inline-block;">
                                <img src="../assets/tab/protectPet.png" alt="" width="100%">
                            </router-link>
                        </div>
                        <div style="width:75px;">
                            <router-link to="" style="display: inline-block;">
                                <img src="../assets/tab/knowledgeBase.png" alt="" width="100%">
                            </router-link>
                        </div>
                    </div>
                    <div class="list_content">
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                        <div class="list_video">
                            <div class="top">
                                <router-link to="">
                                    <div class="img_video">
                                        <img src="../assets/tab/edb971d1ea82e1a7e6edc5acd9395636.png" alt="" style="width:100%;border-radius: 5px;">
                                    </div>
                                    <div class="title">
                                        <h3>猫咪可以和人一起睡吗？</h3>
                                        <p>每当天气转冷，猫咪总是趁着夜深人尽悄悄爬上你的床。那么，猫咪和人到底可不可以一起睡？这个问题一直颇有</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="bottom">
                                <!-- 左边 -->
                                <div class="bottom_a">
                                    <router-link to="">
                                        <img src="../assets/tab/585d72da25b90b602b64d83cfa4cfb26.png" alt="">
                                        <span>E博士</span>
                                    </router-link>
                                </div>
                                <!-- 右边 -->
                                <div class="bottom_r">
                                    <img src="../assets/tab/xingxing.png" alt="">
                                    <span>18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="大人测评">内容 3</van-tab>
                <van-tab title="养宠视频">内容 4</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active: 1
            };
    }
}
</script>

<style  scoped>
ul,li,p,h1,h2,h3,h4,h5,h6,img,a,input,ol,li{
    margin: 0;
    padding:0;
    text-decoration: none;
    list-style: none;
    border: 0;}

a{
    color:#333;
}
.search{
    position: relative;
    padding: 10px 5px;
}
.sea{
    float: left;
    width: 75px; 
}
.sea>div{
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 28px;
}

.search>div>.img1{
    width: 15px;
    position: absolute;
    left: 8px;
    top:15px;
}
.search>div>.img2{
    width: 18px;
    position: absolute;
    left:59px;
    top:12px;
}
.in{
    float: left;
    width: calc(243px - 20px);
    /* display: inline-block; */
    height: 100%;
    height: 30px;
    background: rgba(240,240,240,1);
    opacity: 0.8;
    border-radius: 30px;
    line-height: 30px;
    padding: 0 15px;
    text-align: left;
}

.in>img{
    position: absolute;
    width:16px;
    top:17px;
}
.in>span{
    font-size: 11px;
    font-weight: 300;
    margin-left: 25px;
}

.tu{
    float:right;
    width: 24px;
    height: 22px;
    margin-top: 3px;
}
.tu>img{
    width: 100%;
    vertical-align: top;
    margin-left:-10px;
}
.list_content{
    width: 92%;
    margin: 0 auto 20px;
    background: rgba(255,255,255,1);
    box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
    border-radius: 10px;
    color: #333
}
.list_video{
    padding: 15px;
    margin: 0 auto 20px;
     background: rgba(255,255,255,1);
    box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
    border-radius: 10px;
    color: #333
}
.top>a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #333;
    /* float: left; */
}
.img_video{
    width: 125px;
    height: 62px;
    position: relative;
    float: left;
}
.title{
    width: 190px;
    height: 100%;
    /* padding-left: 10px; */
    float: left;
}
.title>h3{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
}
.title>p{
    font-weight: 300;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 8px;
    color: #999;
    padding-left: 12px;
}
.bottom{
    margin-top: 4px;
    overflow: hidden;
}
.bottom_a{
    float: left;
}
.bottom_a>a{
    display: inline-block;
}
.bottom_a>a>img{
    width: 23px;
    height: 23px;
    border-radius: 50%;
}
.bottom_a>a>span{
    font-size: 12px;
    line-height: 27px;
    display: block;
    float: right;
    padding-left: 5px;
}
.bottom_r{
    float: right;
    width: 53px;
    text-align: left;
}
.bottom_r>img{
    width: 16px;
    height: 15px;
}
</style>