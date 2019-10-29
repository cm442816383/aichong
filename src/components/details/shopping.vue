<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="收藏" />
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="danger" text="加入购物车" @click="addCart" />
            <!-- <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" /> -->
        </van-goods-action>
    </div>
</template>
<script>
import funs from '../../assets/funs/funs.js';
export default {
    data(){
        return{
            products:{}    
        }
    },
    props:["pid"],
    methods: {
    load(){
        funs.getDetail(this.pid,res=>{
            this.products=res.data.data[0];
            console.log(this.products)
        })
    },
    addCart(){
        var pid=this.products.pid;
        var pname=this.products.title;
        var price=this.products.newprice;
        var imgurl=this.products.imgurl;
        var obj={pid,pname,price,imgurl}
        funs.addCart(obj,res=>{
            console.log(res);
            if(res.data.code==-1){
                this.$toast("请登录");
                this.$router.push('/login')
            }else{
                this.$toast("添加成功");
            }
        })
    }
  },
  created(){
      this.load();
  }
}
</script>