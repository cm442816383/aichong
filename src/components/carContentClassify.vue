<template>
    <div class="carContentClassify">
        <!-- 头部 -->
        <div class="contentTitle">
            <router-link to="">
                热门推荐
            </router-link>
        </div>
        <!-- 主体 -->
        <ul class="contentBody">
            <li v-for="(it,i) of item" :key="i">
                <router-link to="">
                    <img :src="`${it.u}`" alt="">
                    <span>{{it.title}}</span>
                </router-link>
            </li>
        </ul>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            item:[
                {u:require("../assets/a/1.jpg"),title:"美毛美发"},
                {u:require("../assets/a/2.jpg"),title:"猫咪猫砂"},
                {u:require("../assets/a/3.jpg"),title:"体内驱虫"},
                {u:require("../assets/a/4.jpg"),title:"罐头湿粮"},
                {u:require("../assets/a/5.jpg"),title:"强化免疫"},
                {u:require("../assets/a/6.jpg"),title:"进口猫粮"},
            ]
        }
    }
}
</script>

<style scoped>
.carContentClassify{
    margin: 0;
    padding:0;
    text-decoration: none;
    list-style: none;
    border: 0;
}
.contentTitle{
    margin-top:10px;
}
.contentTitle>a{
    font-size: 20px;
    color:red;
}
.contentBody>li{
    width: 86px;
    height: 116px;
    padding:0 5px;
    margin-top:10px;
    float:left;
    /* border-right: 3px solid #f3f4f5; */
}
.contentBody>li img{
    width: 100%;
}
.contentBody>li a{
    color:#333;
}
</style>