<template>
    <div class="moudle_209">
        <my-search></my-search>
        <div v-if="isfind">
            <ul class="like_list pr5 pl5">
                <li v-for="(p,i) of products" :key="i" class="like_item">
                    <div class="square_box">
                        <router-link :to="p.herf">
                            <!-- /static/img/product_detail1.e9241e6.png -->
                            <!-- ../../pic/product_detail1.png -->
                            <img class="w100" :src="`http://127.0.0.1:4000/${p.imgurl}`" alt="">
                            <div class="title_style">{{p.title}}</div>
                            <span class="price">
                                ￥<span>{{p.newprice}}</span>
                            </span>
                        </router-link>    
                    </div>
                    <div class="cart_icon">
                        <a href="javascript:;">
                            <img
                            :data-pid="p.pid" 
                            :data-title="p.title"
                            :data-newprice="p.newprice"
                            :data-imgurl="p.imgurl"
                            @click="addCart" 
                            src="../assets/cart.png" alt="">
                        </a>
                    </div>
                </li>
                <!-- <li class="like_item">
                    <div class="square_box">
                        <a href="javascript:;">
                            <img class="w100" src="https://img1.epetbar.com/goods/sales/20190902094505_885499.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                            <div class="title_style">皇家royal canin 英国短毛猫成猫粮2kg</div>
                            <span class="price">
                                ￥<span>181.00</span>
                            </span>
                        </a>    
                    </div>
                    <div class="cart_icon">
                        <a href="javascript:;">
                            <img src="../assets/cart.png" alt="">
                        </a>
                    </div>
                </li>
                <li class="like_item">
                    <div class="square_box">
                        <a href="javascript:;">
                            <img class="w100" src="https://img1.epetbar.com/2017-03/07/10/363ce4a83e75db40554906277f3120cd.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                            <div class="title_style">百加世 GO!健康无限系列 无谷九种肉全猫粮 16磅</div>
                            <span class="price">
                                ￥<span>559.00</span>
                            </span>
                        </a>    
                    </div>
                    <div class="cart_icon">
                        <a href="javascript:;">
                            <img src="../assets/cart.png" alt="">
                        </a>
                    </div>
                </li>
                <li class="like_item">
                    <div class="square_box">
                        <a href="javascript:;">
                            <img class="w100" src="https://img1.epetbar.com/2019-01/15/18/9bfb24be2cf3b45bb5d3c052f214d24c.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                            <div class="title_style">新西兰原装进口 滋益巅峰Ziwi Peak 鹿肉配方猫罐头 85g</div>
                            <span class="price">
                                ￥<span>35.00</span>
                            </span>
                        </a>    
                    </div>
                    <div class="cart_icon">
                        <a href="javascript:;">
                            <img src="../assets/cart.png" alt="">
                        </a>
                    </div>
                </li> -->
            </ul>
            <div class="more-container">
                <a class="more-btn" href="javascript:;" @click="loadMore">加载更多</a>
            </div>
        </div>
        <div  v-else>
            <div class="not-find">
                <img class="nodata-wrap" src="../assets/isfind-false.png" alt="">
                <p class="c666 ft14">
                    sorry～当前未找到"<span style="color:#E83A2A;">{{kw}}</span>"相关的结果!
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import funs from '../assets/funs/funs.js'
export default {
    data(){
        return{
            pno:1,
            pageSize:6,
            products:[],
            isfind:true  
        }
    },
    props:["kw"],
    methods:{
        addCart(e){
            var pid=e.target.dataset.pid;
            var pname=e.target.dataset.title;
            var price=e.target.dataset.newprice;
            var imgurl=e.target.dataset.imgurl;
            var obj={pid,pname,price,imgurl}
            // console.log(obj);
            funs.addCart(obj,res=>{
                // console.log(res);
                if(res.data.code==-1){
                    this.$toast("请登录");
                    this.$router.push('/login')
                }else{
                    this.$toast("添加成功");
                }
            })
        },
        onSearch(){
            console.log(this.kw);
        },
        loadMore(){
            var kw=this.kw;
            var pno=this.pno;
            var pageSize=this.pageSize;
            var obj={kw,pno,pageSize};
            var url='/product'
            funs.getProducts(obj,res=>{
                // this.axios.get(url,{params:obj}).then(res=>{
                var arr=res.data.data;
                // console.log(arr);
                var rows = this.products.concat(arr);
                if(arr.length<1){
                    this.isfind=false;
                }else{
                    this.isfind=true;
                    this.products=rows;
                }
                
            })   
        }
    },
    created(){
        this.loadMore();
    },
    watch:{
        kw(){
            this.loadMore();
        }
    }    
}
</script>
<style scoped>
    .like_list{
        width:100%;
        display:flex;
        justify-content: space-around;
        flex-flow: row wrap;
        box-sizing:border-box;
    }
    .like_item{
        width:38%;
        margin-bottom:11.04px;
        background:#fff;
        border: 1px solid #dbd9d9;
        border-radius: 10px;
    }
    .like_item{
        padding:15px;
    }
    .title_style{
        font-size:12px;
        height: 32px;
        font-size: 14px;
        line-height: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
        color:#333;
    }
    .cart_icon img{
        float:right;
        margin-top:-25px;
        width:26px;
        height:26px;
    }
    .not-find{
        text-align: center;
        margin-top:20px;
    }
    .nodata-wrap{
        width: 35%;
        margin-bottom: 20px;
    }
    .more-container{
        text-align: center;
        margin-top:10px;
    }
    .more-btn{
        color:#999;
        font-size:18px;
        text-align: center;
    }
</style>
