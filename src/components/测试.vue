<template>
    <div class="cart">
        <div class="cartHead">
            <router-link to="javascript:;">
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
                <span><img src="../assets/head_icon1.png" alt=""></span>
                <span><img src="../assets/head_icon2.png" alt=""></span>
                <span><img src="../assets/head_icon3.png" alt=""></span>
                <span><img src="../assets/head_icon4.png" alt=""></span>
            </div>
            <div class="header_hide_text">
                 <p><router-link  to="javascript:;">首页</router-link></p>
                 <p><router-link  to="javascript:;">商品分类</router-link></p>
                 <p><router-link  to="javascript:;">购物车</router-link></p>
                 <p><router-link  to="javascript:;">我的爱宠</router-link></p>
            </div>
        </div>
        <div class="cartMiddle" v-for="(item) in cartInfoList" :key="item.id">
            <van-checkbox v-model="item.checked" checked-color="#ea5858" @click="checkShop(item)">{{item.shopTitle}}</van-checkbox>
                <div class="cartdsc" v-for="(pros,value) in item.productList" :key="value">
                    <van-checkbox v-model="pros.isChecked" checked-color="#ea5858"    @click="ischeck(item,pros)"></van-checkbox>
                    <div class="bgimg">
                        <button>{{item.productList.count}}</button>
                    </div>
                    <div>
                        <div class="dsc">
                            <span>[限量购买]</span>
                            <span>健康成长配方中小型幼犬粮350g</span>
                        </div>
                        <div class="price">
                            <span>{{item.productList.price}}</span>
                            <div class="add">
                                <router-link to="#">-</router-link>
                                <input type="text" value="1">
                                <router-link to="#">+</router-link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="cartbottom">
            <van-checkbox v-model="isCheckAll" checked-color="#ea5858" @click="checkAll()">
                <span>总额</span>
                <span>money</span>
            </van-checkbox>
            <router-link to="/OrderSub">
                <span>去结算</span>
            </router-link>  
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
export default {
    data() {
        return {
            on:false,
            cartInfoList: [
        {
          id: 1,
          shopTitle: '苹果旗舰店', // 商店名
          checked: false, // 商店选择的状态
          checkedCount: 0, // 此商店被选择的商品数量
          productList: [
            {
              isChecked: false, // 商品选择状态
              productTitle: '2019款macbook/苹果/MF893/A国航笔记本', // 产品名
              category: '15寸/2.3/8G/256/土豪金/标准套餐',
              price: 10200, // 价格
              count: 1 // 数量
            }
          ]
        },
        {
          id: 2,
          shopTitle: '锤子科技旗舰店',
          checked: false,
          checkedCount: 0,
          productList: [
            {
              isChecked: false,
              productTitle: '锤子手机手感保护膜',
              category: '登陆月球',
              price: 9.9,
              count: 1
            },
            {
              isChecked: false,
              productTitle: '锤子手机pro割手版',
              category: '128G/割手版',
              price: 1790,
              count: 1
            }
          ]
        }
      ],
      isCheckAll: false, // 是否全选
      allPrice: 0, // 所有价格
      allShops: 0, // 被选中的商店数量
      allCount: 0 // 被选中的产品数量
    }
  },
   methods: {
        drop(){
            this.on=!this.on;
        },
        // 选中单个商品
        ischeck (item, pro) {
        // 为未选中的时候改变为false，反之为true
        !pro.isChecked ? this._checkTrue(item, pro) : this._checkFalse(item, pro)
        },
        // 修改单个商品的true
        _checkTrue (item, pro) {
        pro.isChecked = true // 将商品选中状态改为true
        // 这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
        if (++item.checkedCount === item.productList.length) {
            item.checked = true
        } else {
            return ''
        }
        // ++item.checkedCount === item.productList.length ? item.checked = true : ''
        // 如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
        // // 当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
        if (item.checked) {
            if (++this.allShops === this.cartInfoList.length) {
            this.isCheckAll = true
            } else {
            this.isCheckAll = false
            }
        } else {
            return ''
        }
        // item.checked ? ++this.allShops === this.cartInfoList.length ? this.isCheckAll = true : this.isCheckAll = false : ''
        },
        // 修改单个商品的 false
        _checkFalse (item, pro) {
        pro.isChecked = false // 将商品选中状态改为false
        --item.checkedCount // 被选中的商品数减一
        if (item.checked) {
            // 如果店铺是被选中的，更改店铺选中状态
            item.checked = false // 当商店状态为选中时改变false
            --this.allShops // 商店数减一
        }
        this.isCheckAll = false // 全选状态为false
        },

        // 选择整个商店的商品
        checkShop (item) {
        !item.checked ? this._shopTrue(item) : this._shopFalse(item)
        },
        // 遍历商店每个商品,状态为false的改变为true,又在_checkTrue()方法中将商店状态改为true
        _shopTrue (item) {
        item.productList.forEach(pro => {
            if (pro.isChecked === false) {
            this._checkTrue(item, pro)
            } else {
            return ''
            }
            // pro.isChecked === false ? this._checkTrue(item, pro) : ''
        })
        },
        _shopFalse (item) {
        item.productList.forEach(pro => {
            // 同上
            if (pro.isChecked === true) {
            this._checkFalse(item, pro)
            } else {
            return ''
            }
            //  pro.isChecked === true ? this._checkFalse(item, pro) : ''
        })
        },
        // 选择全部商店的商品，已经计算总价和总数量的函数
        checkAll () {
        // 方法内调用方法
        this.isCheckAll = !this.isCheckAll
        this.isCheckAll
            ? this.cartInfoList.forEach(item => {
            this._shopTrue(item)
            })
            : this.cartInfoList.forEach(item => {
            this._shopFalse(item)
            })
        },
        _totalPeice () {
        // 每次调用此方法，将初始值为0，遍历价格并累加
        this.allPrice = 0
        this.cartInfoList.forEach(item => {
            let products = item.productList
            products.forEach(pros => {
            if (pros.isChecked) {
                this.allPrice += pros.price * pros.count
            }
            })
        })
        },
        _totalCount () {
        // 同上
        this.allCount = 0
        this.cartInfoList.forEach(item => {
            this.allCount += item.checkedCount
        })
        },

        onSubmit () {}
    },
    watch: {
        // 深度监听所有数据，每次改变重新计算总价和总数
        cartInfoList: {
        deep: true,
        handler (val, oldval) {
            this._totalPeice()
            this._totalCount()
        }
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

