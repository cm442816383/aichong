<template>
    <div>
        <div class="cartEdit bgfff" style="margin-bottom:80px;">
            <div class="cartHead">
                <a @click="goback">
                    <img src="../assets/emptyicon-l.png" alt="">
                </a>
                <span>购物车</span>
                <router-link to="./Cart">完成</router-link>
                <span>
                    <img src="../assets/emptyicon-r.png" alt="" @click="drop">
                </span>
            </div>
            <div class="header_hide" v-show="on">
                <div class="header_hide_img">
                    <router-link  to="/index">
                        <div style="text-align:center;">
                            <img style="text-align:center;" src="../assets/head_icon1.png" alt="">
                            <span class="db c666 ft14">首页</span>
                        </div>
                    </router-link>
                    <router-link  to="/car">
                        <div style="text-align:center;">
                            <img src="../assets/head_icon2.png" alt="">
                            <span class="db c666 ft14">商品分类</span>
                        </div>
                    </router-link>
                    <router-link  to="/cart">
                        <div style="text-align:center;">
                            <img src="../assets/head_icon3.png" alt="">
                            <span class="db c666 ft14">购物车</span>
                        </div>
                    </router-link>
                    <router-link  to="/Synthesize">
                        <div style="text-align:center;">
                            <img src="../assets/head_icon4.png" alt="">
                            <span class="db c666 ft14">我的爱宠</span>
                        </div>    
                    </router-link>
                </div>
            </div>
            <div class="cartMiddle">
                <van-checkbox v-model="isCheckAll" checked-color="#ea5858" @click="checkAll">全选</van-checkbox>
                <div class="df-b" v-for="(pro,value) of list" :key="value" @click="isChecked(pro)">
                    <van-checkbox style="width:8%"  v-model="pro.cb" checked-color="#ea5858" @click="isChecked"></van-checkbox>
                    <div class="cartdsc">
                        <div class="bgimg" :style="`background-image:url(http://127.0.0.1:4000/${pro.imgurl})`">
                        </div>
                        <div>
                            <div class="dsc">
                                <span>[限量购买]</span>
                                <span>{{pro.pname}}</span>
                            </div>
                            <div class="price">
                                <span>￥{{pro.price.toFixed(2)}}</span>
                                <div class="add">
                                    <router-link to="#">-</router-link>
                                    <input type="text" :value="pro.count">
                                    <router-link to="#">+</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="editBottom">
            <van-checkbox v-model="isCheckAll" checked-color="#ea5858" @click="checkAll">
                <span class="checkAll">全选</span>
            </van-checkbox>
            <router-link to="javascript:;">
                <span>移入收藏</span>
            </router-link>
            <router-link to="" >
                <span @click="delm">删除</span>
            </router-link>  
        </div>
    </div>        
</template>
<script>
import funs from '../assets/funs/funs.js'
export default {
    data(){
        return{
            list:[],//购物车列表
            isCheckAll:false,
            on:false
        }
    },
    created() { //1:添加生命周期
        this.loadMore();
    },
    methods: {
        //删除指定商品  
        delm(){
            var str = "";
            for(var item of this.list){
                if(item.cb){
                    str += item.cid+","
                }
            }
            if(str.length==0){
                this.$toast("请选择要删除商品");
                return;
            }
            // console.log(str)
            str = str.substring(0,str.length-1);
            // console.log(str)
            // var url = "dels";
            var obj = {cid:str};
            // console.log(obj)
            funs.delm(obj,res=>{
                this.loadMore();
                this.$toast("删除成功");
                this.$router.push('/cart');
            })
            // this.axios.get(url,{params:obj}).then(res=>{
            //     this.loadMore();
            //     this.$toast("删除成功")
            // }).catch(err=>{})
            
        },
        //单选框按钮状态
        isChecked(pro){
            pro.cb = !pro.cb;
            if(!pro.cb){
                this.isCheckAll=false
            }else{
                var sum =0;
                for(var pros of this.list){
                    if(pros.cb){sum++}
                };
                if(sum==this.list.length){
                    this.isCheckAll=true
                }
            }
        },
        // 全选按钮
        checkAll(e){
            this.isCheckAll = !this.isCheckAll;
            for(var pros of this.list){
                pros.cb=this.isCheckAll;
            }
        },
        
        //请求购物车列表
        loadMore(){
            var url = "/findcart";
            // 发送ajax请求获取购物车
            this.axios.get(url).then(res=>{
                if(res.data.code==-1){
                    this.$toast('请登录')
                    this.$router.push("/Login")
                }else{
                    var list = res.data.data;
                    for(var item of list){
                        item.cb = false;
                    }
                    this.list = list;
                    // console.log(list)
                }
            })
        },
        goback(){
            history.go(-1);
        },
        drop(){
            this.on=!this.on;
        },
        
    },
}
</script>
<style scoped>
    .cartEdit{position: relative;}
    /* cart-header */
    .cartHead{
        height:50px;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        margin:0 auto;
        padding:6px 6px 0px;
        line-height:50px;
        position:relative;
    }
    .cartHead img{
        height:25px;
        width:25px;
    }
    .cartHead span:nth-child(2){
        font-size:1.2rem;
        color:#333;
        width:190px;
        height:50px;
        line-height:50px;
        position:absolute;
        top:-2px;
        left:50%;
        margin-left:-5px;
    }
    .cartHead a:nth-child(3){
        margin-top:-6px;
        width:35px;
        color:#333;
        position:absolute;
        right:40px;
        text-align:center;
    }
    /* header-hide */
    .header_hide{
        width:100%;
        height:75px;
        box-sizing:border-box;
        padding:10px 0;
        line-height:20px;
        border-top:1px solid #eee;
    }
    .header_hide_img{
        display:flex;
        justify-content: space-around;
    }
    .header_hide_img img{
        width:30px;
        height:30px;
        margin:0 auto;
    }
    .header_hide_text{
        display:flex;
        justify-content: space-around;
    }
    .header_hide_text p a{
        color:#666;
        font-size:12px;
        margin-left:15px;
    }
    /* middle */
    .cartMiddle{
        position: relative;
        border:1px solid #eee;
    }
    .cartMiddle:first-child{
        font-size:15px;
    }
    div.van-checkbox{
        width:100%;
        padding:12px;
        padding-right:0px;
        position:relative;
    }
    .cartdsc{
        width:100%;
        display:flex;
        justify-content:space-around;
    }
    .bgimg{
        width:85px;
        height:85px;
        background-image:url("https://img2.epetbar.com/2012-11/16/65bf479384e7e549e7be65cce572f363.jpg@!200w-b");
        background-size:85px 85px;
        background-repeat:no-repeat;
        position:relative;
    }
    .bgimg button{
        position:absolute;
        bottom:0px;
        left:0px;
        background-color:rgba(0,0,0,0.6);
        border:none;
        border-radius:0 30px 30px 0;
        font-size:12px;
        height:20px;
        width:85px;
        color:#fff;
    }
    .bgimg+div{
        width:100%;
        display:flex;
        flex-flow:row wrap;
        margin-left:30px;
        position: relative;
        right:7px;
    }
    div.dsc{
        font-size:12px;
    }
    div.dsc span:first-child{
        color:#f03e3e;
    }
    .price{
        width:100%;
        display:flex;
        justify-content: space-between; 
    }
    .price span{
        color:#f03e3e;
        font-weight:bold;
    }
    /* add and reduce  */
    div.add{
        float:left;
        font-size:15px;
        position:absolute;
        right:20px;
    }
    .price .add input{
        display:inline-block;
        width:32px;
        height:22px;
        float:left;
        vertical-align:top;
        box-sizing:border-box;
        border:1px solid #f03e3e;
        outline:none;
        text-align:center;
        font-size:12px;
    }
    .price .add a{
        display:inline-block;
        height:20px;
        width:28px;
        float:left;
        text-align:center;
        color:#333;
        font-size:20px;
        background-color:#fff;
        cursor:pointer;
        line-height:18px;
        border:1px solid #f03e3e; 
    }
    .price .add a:first-child{
        border-radius:30px 0px 0px 30px;
        border-right:none;
    }
    .price .add a:last-child{
        border-radius:0px 30px 30px 0px;
        border-left:none;
    }
    .editBottom{
        width:100%;
        height:60px;
        position:fixed;
        bottom:0px;
        left:0px;
        display:flex;
        align-items:center;
        justify-content: space-around;
        border-top:1px solid #eee;
        font-size:15px;
        background:#fff;
    }
    .checkAll{
        color:#666;
    }
    .editBottom a{
        position:relative;
        right:20px;
        border:1px solid #f03e3e;
        border-radius:5px;
        text-align:center;
        line-height:35px;
    }
    .editBottom a:nth-child(2){
        width:150px;
        height:35px;
        color:#999;
        border:1px solid #999;
        margin-right:20px;
    }
    .editBottom a:last-child{
        width:80px;
        height:35px;
        color:#f03e3e;
        margin-right:6px;
    }

</style>

