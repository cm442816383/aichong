<template>
    <div class="banlance bgfff">
        <div class="header">
            <router-link to="">
                <img src="../assets/sub-order-left.png" alt="" @click="goback">
            </router-link>
            <span>订单结算</span>
            <span @click="drop">
                <img src="../assets/sub-order-right.png" alt="">
            </span>
        </div>
        <div class="header_hide" v-show="on">
            <div class="header_hide_img">
                <span><img src="../assets/head_icon1.png" alt=""></span>
                <span><img src="../assets/head_icon2.png" alt=""></span>
                <span><img src="../assets/head_icon3.png" alt=""></span>
                <span><img src="../assets/head_icon4.png" alt=""></span>
            </div>
            <div class="header_hide_text">
                <p><router-link  to="/">首页</router-link></p>
                <p><router-link  to="javascript:;">商品分类</router-link></p>
                <p><router-link  to="javascript:;">购物车</router-link></p>
                <p><router-link  to="Login">我的爱宠</router-link></p>
            </div>            
        </div>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
            @click-item="choose"
        />
    </div>
</template>
<script>
import Vue from 'vue';
import { AddressList,Toast } from 'vant';
import funs from '../assets/funs/funs.js';
Vue.use(AddressList,Toast);
export default {
  data() {
    return {
      chosenAddressId:'1',
      on:false,
      list: []
    }
  },
  created(){
      this.getUser()
  },
  methods: {
    // 获取用户地址
    choose(index){
        var aid=index.id
        this.$store.dispatch('setAddress',aid)
        this.$router.push('/OrderSub');
    },
    getUser(){
        funs.selAddres(res=>{
            // console.log(res.data.data[0].receiver)
            var list = []
            for(var i=0;i<res.data.data.length;i++){
                var a = {
                    id:res.data.data[i].aid,
                    name:res.data.data[i].receiver,
                    tel:res.data.data[i].cellphone,
                    address:res.data.data[i].province+res.data.data[i].city+res.data.data[i].county+res.data.data[i].address
                };
                list.push(a);
            }
            this.list=list
        //    console.log(this.list)
        })
    },
    goback(){
        history.go(-1);
    },
    drop(){
        this.on=!this.on;
    },
    onAdd() {
      this.$router.push('/AddCity')
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  }
}
</script>
<style scoped>
    /* head */
    .banlance{
        max-width:750px;
        height:750px;
        margin:0 auto;
    }
    .header{
        height:35px;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        margin:0 auto 10px;
        padding:6px 6px 0px;
        line-height:50px;
    }
    .header img{
        height:25px;
        width:25px;
    }
    .header span:nth-child(2){
        font-size:1rem;
        color:#333;
        display:inline-block;
        width:375px;
        height:50px;
        line-height:50px;
        text-align:center;
        margin-top:-6px;
    }
    .sub-order-top  img{
        width:100%;
    }
    p.addAddress,p.addAddress a{
        width:100%;
        height:60px;
        line-height:60px;
        text-align:center;
        color:#999;
        font-size:14px;
        margin-bottom:4px;
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
</style>

