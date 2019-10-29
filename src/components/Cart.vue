<template>
<div>
    <div class="cart bgfff" style="margin-bottom:80px;">
        <div class="cartHead">
            <router-link to="/index">
                <img src="../assets/emptyicon-l.png" alt="">
            </router-link>
            <span>购物车</span>
            <router-link to="/CartEdit">编辑</router-link>
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
        <van-checkbox v-model="isCheckAll" checked-color="#ea5858" @click="checkAll">全选</van-checkbox>
        <div class="cartdsc" v-for="(pros,value) in cartInfoList" :key="value">
            <van-checkbox v-model="pros.isChecked" checked-color="#ea5858" @click="isChecked(pros,value)"></van-checkbox>
            <div class="bgimg" :style="`background-image:url(http://127.0.0.1:4000/${pros.imgurl})`">
                <!-- <button>{{pros.count}}</button> -->
            </div>
            <div>
                <div class="dsc">
                    <span>[限量购买]</span>
                    <span>{{pros.pname}}</span>
                </div>
                <div class="price">
                    <span>{{pros.price.toFixed(2)}}</span>
                    <div class="add">
                        <a href="javascript:;" @click="changecount(pros,-1)">-</a>
                        <input type="text" v-model="pros.count">
                        <a href="javascript:;" @click="changecount(pros,1)">+</a>
                    </div>
                </div>
            </div>
            </div>
        
    </div>
    <div class="cartbottom">
        <van-checkbox v-model="totalChecked" checked-color="#ea5858" @click="checkAll()">
            <span>总额</span>
            <span>{{total.toFixed(2)}}</span>
        </van-checkbox>
        <router-link :to="isCheckPro?'/OrderSub':''">
            <span @click="addPid">去结算</span>
        </router-link>  
    </div>
</div>    
</template>
<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';
import funs from '../assets/funs/funs.js'
Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data() {
        return {
            on:false,
            total:0,
            cartInfoList: [],
            isCheckAll: false, // 是否全选
            totalChecked: false,
            allPrice: 0, // 所有价格
            allCount: 0, // 被选中的产品数量
            pids:[],
            isCheckPro:false
    }
  },
   methods: {
        addPid(){
            var str=this.pids.join(',');
            this.$store.dispatch('setPids',str);
            if(!str){
                this.isCheckPro=false;
                this.$toast('请选择您要购买的商品')
            }else{
                this.isCheckPro=true;
            }
        },
        drop(){
            this.on=!this.on;
        },
        loadMore(){
            funs.getCart(res=>{
                // console.log(res)
                if(res.data.code==-1){
                    this.$toast('请登录');
                    this.$router.push('/login');
                }
                this.cartInfoList=res.data.data
            })
        },
  
        // 点击加减数量
        changecount(pros,way){
            if(way>0){
                pros.count++;
                if(pros.isChecked){
                this.total+=parseFloat(pros.price);}
            }else{
                pros.count--;
                if(pros.count<1){
                    pros.count=1;
                }else{if(pros.isChecked){this.total-=parseFloat(pros.price)}  
            }}
            var pid=pros.pid;
            var count=pros.count;
            var obj={pid,count};
            // console.log(obj);
            funs.changCount(obj,res=>{
                // console.log(res)
            })
        },
        //点击商品勾选框时
        isChecked(pros,value){
            pros.isChecked=!pros.isChecked;
            if(!pros.isChecked) {
                this.isCheckAll=false
                this.total-=parseFloat(pros.price*pros.count)
                this.pids.remove(pros.pid);
            }else{
                this.total+=parseFloat(pros.price*pros.count)
                var num=0;
                for(var pros of this.cartInfoList){
                    if(pros.isChecked){
                        num++;
                        var arr=this.pids;
                        if(arr.indexOf(pros.pid)==-1){
                            this.pids.push(pros.pid);
                        }
                    }
                };
                // console.log(this.pids);
                if(num==this.cartInfoList.length){this.isCheckAll=true}
            }
            // console.log(pros.isChecked)
        },
        // 选择全部商店的商品，已经计算总价和总数量的函数
        checkAll (e) {
            this.isCheckAll = !this.isCheckAll
            this.isCheckAll?this.totalChecked=this.isCheckAll:this.totalChecked=this.isCheckAll;
            // console.log(this.isCheckAll);
            //遍历cartInfoList  
            this.total=0;
            for(var pros of this.cartInfoList){
                // 更改所有勾选框的状态
                pros.isChecked=this.isCheckAll
                this.pids.push(pros.pid);
                // 计算总价，当全选时，total为所有价格的总和，
                if(this.isCheckAll){
                    
                    this.total+=(pros.price*pros.count)
                    // console.log(this.total)
                }else{this.total=0.00}
                // console.log(this.isCheckAll,this.totalChecked)
            };
        },
    },
    created(){
        this.loadMore();
    },
    watch: {
        total(){
            this.$store.dispatch('setTotal',this.total);
        }        
  }
}
</script>
<style scoped>
.cart{position: relative;}
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
        width:90px;
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
    /* cart-middle */
    .cartMiddle{
        position: relative;
        border:1px solid #eee;
    }
    /* all select */
    .cartMiddle:first-child{
        font-size:15px;
    } 
    .cartdsc{
        width:100%;
        display:flex;
        justify-content:space-around;
    }
    div.van-checkbox{
        padding:12px;
        padding-left:5px;
        position:relative;
        padding-bottom:20px;
    }
    .bgimg{
        width:85px;
        height:85px;
        /* background-image:url("https://img2.epetbar.com/2012-11/16/65bf479384e7e549e7be65cce572f363.jpg@!200w-b"); */
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
    /* cart-bottom */
    .cartbottom{
        width:100%;
        height:60px;
        position:fixed;
        bottom:0px;
        left:0px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-top:1px solid #eee;
        font-size:15px;
        margin:0 6px;
        background: #fff;
    }
    .cartbottom span:nth-child(2){
        color:#f03e3e;
        font-weight:bold;
    }
    .cartbottom a{
        background-color:#f03e3e;
        border-radius:5px;
        color:#fff;
        width:80px;
        height:35px;
        text-align:center;
        line-height:35px;
        position:absolute;
        right:12px;  
    }
</style>

