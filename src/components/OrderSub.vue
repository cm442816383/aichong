<template>
    <div class="banlance bgfff">
        <div class="header">
            <a @click="goback">
                <img src="../assets/sub-order-left.png" alt="">
            </a>
            <span>订单结算</span>
            <span @click="drop">
                <img src="../assets/sub-order-right.png" alt="">
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
        <div class="sub-order-top">
            <img src="../assets/ordersub.png" alt="">
            <receive v-if="true"></receive>
            <div v-else>
                <p class="addAddress"  @click="toaddcity">
                    <router-link to="javascript:;">+添加收货信息</router-link>
                </p>
            </div>    
        </div>
        <div class="order">
            <div class="orderGoods">
                <div class="orderTitle">
                    <div>
                        <img src="../assets/order-icon.png" alt="">
                        <span>订单01</span>
                    </div>
                    <span>爱宠西部仓</span>
                </div> 
                <div v-for="(p,i) of pros" :key="i" class="orderDetail">
                    <img style="width:20%;" :src="`http://127.0.0.1:4000/${p.imgurl}`" alt="">
                    <div style="width:80%;">
                        <p>{{p.pname}}</p>
                        <span>￥{{p.price.toFixed(2)}}</span>
                        <span>x{{p.count}}</span>
                    </div> 
                </div> 
                <div class="orderDispatch">
                    <span>配送方式</span>
                    <span>暂无配送方式</span>
                </div>    
            </div>  
            <div class="orderQuan">
                <div>
                    <div>
                        <span>优惠券</span>
                        <img src="../assets/wenhao.png" alt="">
                    </div>
                    <span>暂无优惠券</span>
                </div>
                <table></table>
                <div>
                    <div>
                    <span>E宠币(可用0个抵用￥0.00)</span>
                     <img src="../assets/wenhao.png" alt="">
                    </div>
                    <van-switch
                        v-model="checked"
                        active-color="#07c160"
                        inactive-color="#ddd"
                        size="10px"
                    /> 
                </div>
                <table></table>
                <div>
                    <div>
                        <span>价格向收货人保密</span>
                        <img src="../assets/wenhao.png" alt="">
                    </div>
                    <van-switch
                    v-model="checked"
                    active-color="#07c160"
                    inactive-color="#ddd"
                    size="10px"
                    />
                </div>
            </div> 
            <div class="orderTips">
                <div>备注</div>
                <div class="kuaidi">
                    <div>(外包快递的一切配送服务要求，因各地差异可能无法满足，请您谅解)</div>
                    <img src="../assets/dayuicon.png" alt="">
                </div>
            </div> 
            <div class="orderList">
                <span>商品金额</span>
                <span>0</span>
            </div>  
        </div>
        <div class="orderBottom">
            <div>
                <div class="orderBtm-right">
                    <span>总计:</span>
                    <span>￥{{total.toFixed(2)}}</span>
                </div>
                <button @click="getPay">确认订单</button>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Switch,Toast } from 'vant';
import funs from '../assets/funs/funs.js';
import receive from './receive.vue';
Vue.use(Switch).use(Toast);
export default {
    data(){
        return{
            checked:false,
            on:false,
            pros:[],
            total:this.$store.state.total,
            isAddress:this.$store.state.isAddress
        }
    },
    methods:{
        loadMore(){
            var pids=this.$store.state.pids;
            var obj={pids}
            funs.setaccounts(obj,res=>{
                // console.log(res);
                if(res.data.code==-1){
                    this.$toast('请登录');
                    this.$router.push('/login');
                }
                if(res.data.code==-2){
                    this.$toast('请重新选择您的商品');
                    this.$router.push('cart');
                }
                this.pros=res.data.data;
                // console.log(this.pro);
            })
        },
        goback(){
            history.go(-1);
        },
        toaddcity(){
            this.$router.push("/AddCity")
        },
        drop(){
            this.on=!this.on;
        },
        getPay(){
            this.$router.push("/Pay")
            // var arr=[];
            // for(var i=0;i<this.pros.length;i++){
            //     var str=`{${this.pros[i].pid}:${this.pros[i].count}}`
            //     // str=str.substring(0,)
            //     console.log(str);
            //     arr.push(str);
            // }
            // console.log(arr);
        },
    },
    created(){
        this.loadMore();
    },
    components:{
        receive
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
        margin:0 auto;
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
    /* 订单 */
    .order{
        width:100%;
        height:255px;
        padding-top:10px;
    }
    .order .orderGoods{
        margin:0 10px;
    }
    .orderTitle{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:15px;
    }
    .orderTitle img{
        height:15px;
    }
    .orderTitle div:first-child span{
        font-size:15px;
    }
    .orderTitle>span:last-child{
        font-size:12px;
        color:#41c856;
    }
    .orderDetail{
        width:100%;
        display:flex;
        justify-content: space-between;
        border-bottom:1px solid #f3f3f3;
        padding:10px 0px 20px;
    }
    .orderDetail img{
        width:71px;
        height:76px;
    }
    .orderDetail p{
        width:100%;
        font-size:14px;
        margin-bottom:15px;
    } 
    .orderDetail span:nth-child(2){
        color:#ff5757;
        font-size:16px;
        font-weight:bold;
    }
    .orderDetail span:last-child{
        float:right;
        font-size:14px;
        color:#666;
    }
    .orderDispatch{
        display: flex;
        justify-content: space-between;
        font-size:13px;
        margin:10px 0;
    }
    .orderQuan{
        font-size:13px;
        margin:0 10px;
        border-bottom:8px solid #f3f3f3;
        padding:10px 0px;
    }
    .orderQuan img{
        width:15px;
        height:15px;
        margin-top:3px;
        margin-left:2px;
    }
    .orderQuan div{
        height:12px;
        display:flex;
        justify-content: space-between;
        line-height:20px;
    }
    .orderQuan table{
        margin:10px 0px;
    }
    .van-switch{
        width:30px;
    }
    div.tips{
        width:100%;
        margin-top:10px;
        padding:10px;
    }
    .orderTips{
        width:100%;
        margin-top:10px;
        padding:10px;
    }
    .orderTips div:first-child{
        font-size:13px;
    }
    .kuaidi{
        display:flex;
        justify-content: space-between;
        border-bottom:8px solid #f3f3f3;
        padding:10px 0px;
    }
    .kuaidi img{
        padding-right:15px;
        width:20px;
        height:20px;
        margin-top:10px;
    }
    .orderTips .kuaidi>div{
        font-size:12px;
        color:#999;
    }
    .orderList{
        width:100%;
        display:flex;
        justify-content: space-between;
        margin:0 10px; 
        font-size:13px;
        border-bottom:8px solid #f3f3f3;
        padding:10px 0px;
        position:relative;
    }
    .orderList span:last-child{
        margin-right:30px;
        color:#ff5757;
    }
    /* bottom */
    .orderBottom{
        width:100%;
        border-top:1px solid #f3f3f3;
        position:fixed;
        bottom:0px;
        left:0;
        right:0;
        background-color:#fff;
        height:50px;
        padding:10px 10px 0px;
        line-height:50px;
    }
    .orderBottom>div:first-child{
        width:100%;  
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
     .orderBottom span:first-child{
         font-size:12px;
         font-weight:700;
     }
    .orderBottom span:nth-child(2){
        font-size:18px;
        color:#ff5757;
        font-weight:bold;
    }
    .orderBottom button{
        width:105px;
        height:30px;
        line-height:30px;
        font-size:14px;
        background-color:#41c856;
        border-radius:30px;
        float:right;
        color:#fff;
        border:none;
        position:absolute;
        right:30px;
    }
    .p_title{
        white-space: nowrap; 
        text-overflow: ellipsis; 
        overflow: hidden; 
    }
</style>

