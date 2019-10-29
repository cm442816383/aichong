<template>
    <div style="background:#fff;text-align:center;">
        <!-- 1.头部标题 -->
        <!-- <div class="titl">
            左
            <div class="titl-1">
                <img src="../assets/book/left.png" alt="">
            </div>
            右
            <div class="titl-3">
                <img src="../assets/book/More options Vertica.png" >
            </div>
            中
            <div class="titl-2">
                小萌书
            </div>        
        </div> -->
        <div style="margin-top:10px;border-bottom:1px solid #e5e5e5;padding-bottom:5px">
            <van-row  type="flex" justify="space-between">
                <van-col span="3" @click="zhuye">
                    <van-icon name="arrow-left"  size="30px" />
                </van-col>
                <van-col span="6" style="font-size:20px;">小萌书</van-col>
                <van-col span="3">
                    <van-icon name="more-o" size="30px"/>
                </van-col>
            </van-row>
        </div>
        <!-- 2.搜索栏 -->
        <!-- 2.1搜索框 -->
        <!-- 2.2导航栏 -->
        <bookseach></bookseach>
        
        <!-- 3.内容 -->
        <!-- 3.1导航内容 -->
        <bottom-tab></bottom-tab>
    </div>
</template>

<script>
import bookSeach from "./bookSeach";
export default {
    methods:{
        zhuye(){
            this.$router.push("/")
        }
    },
    components:{
        "bookseach":bookSeach,
    }
}
</script>

<style  scoped>
/* .titl{
    height: 50px;
    position: relative;
    border-bottom: 1px solid #e5e5e5;
}
.titl>.titl-2{
    line-height: 50px;
    font-size: 18px;
    margin: 0 54px;
}
.titl img{
    line-height: 50px;
    width:30px;
    margin-top: 7.5px;
    text-align: center
}

.titl-1{
    position: absolute;
    height: 100%;
}

.titl-3{
     position: absolute;
    height: 100%;
    left:330px;

} */

</style>