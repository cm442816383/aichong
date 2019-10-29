<template>
    <div>
        <div class="header">
            <router-link to="/OrderSub">
                <img src="../assets/sub-order-left.png" alt="">
            </router-link>
            <span>添加收货信息</span>
            <a @click="drop">
                <img src="../assets/sub-order-right.png" alt="">
            </a>
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
        <van-address-edit
            :area-list="areaList"
            s-saving
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>
<script>
import areaList from "../assets/js/area.js"
import Vue from 'vue';
import { AddressEdit,Toast } from 'vant';
import funs from '../assets/funs/funs.js'
Vue.use(AddressEdit).use(Toast);
export default {
    data(){
        return{
            areaList,
            searchResult: [],
            on:false
        }
    },
    methods: {
        drop(){
            this.on=!this.on;
        },
        goback(){
            history.go(-1);
        },
        onSave(content) {
            var obj=content;
            console.log(obj);
            funs.addAddres(obj,res=>{
                if(res.data.code==-1){
                    Toast('请登录');
                    this.$router.push('/login');
                }else{
                    Toast('添加成功');
                    this.$router.push('/Dftaddress');
                }
            })
        },
        onDelete() {
        Toast('delete');
        },
    }
}
</script>
<style scoped>
    .header{
        height:50px;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        margin:0 auto;
        padding:6px 6px 0px;
        line-height:50px;
        border-bottom:1px solid #f5f5f5;
    }
    .header img{
        height:25px;
        width:25px;
    }
    .header span{
        font-size:18px;
        color:#333;
        display:inline-block;
        width:375px;
        height:50px;
        line-height:50px;
        text-align:center;
        margin-top:-6px;
    }
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
