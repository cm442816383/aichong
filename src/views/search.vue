<template>
    <div>
        <my-search></my-search>
        <div class="hot">
            <p class="title c666">
                <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt="">
                <span>精品推荐</span>
            </p>
        </div>
        <div class="label clearfix" style="background:#f3f4f5;">
            <router-link :to="'/products/'+t" v-for="(t,i) of title" :key="i" class="bgfff fl">{{t}}</router-link>
        </div>
        <div class="recently">
            <p class="title c666">
                <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt="">
                <span>最近搜索</span>
            </p>
            <div class="d_secontent">
                
            </div>
        </div>
        <div class="d_seclear">清空搜索历史</div>
        <p class="hint"></p>
        <bottom-tab></bottom-tab>     
    </div>  
</template>
<script>
export default {
    data(){
        return{
            title:["诺瑞","now","美毛粉","牛油果","心丝虫","渴望","麦德琳","项圈","宠物梳子","生鲜本能","比瑞吉","猫粮"],
            kw:this.$store.state.kw
        }
    },
    methods:{
        changeKw(t){
            // this.$store.dispatch('search_kw',t);
        },
        recent(){
            // localStorage.setItem("kw","猫粮");
            // var str=localStorage.getItem('kw');
            // console.log(str);
        }
    },
    created(){
        this.recent();
    }
}
</script>
<style>
    .title{
        background: #fbfbfd;
        height: 30px;
        line-height: 30px;
        padding-left: 12px;
        font-size: 14px;
        margin:0;
    }
    .title img{
        height: 20px;
        margin: -2px 8px 0 0;
        vertical-align: middle;
    }
    .label{
        padding: 0 12px 23px;
        margin-top:8px;
    }
    .label a{
        padding: 3px 10px;
        margin: 10px 10px 0 0;
        color: #999;
        font-size: 12px;
        border-radius: 15px;
    }
    .d_seclear{
        width: 60%;
        margin: 40px auto 60px;
        line-height: 40px;
        font-size: 15px;
        border: 1px solid #777;
        border-radius: 5px;
        text-align: center;
    }
</style>
