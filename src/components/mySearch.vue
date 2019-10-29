<template>
    <div class="search">
            <a @click="goHistory" class="aback left-more"></a>
            <van-search
            v-model="kw"
            placeholder="搜索你喜欢的宝贝"
            show-action
            shape="round"
            @search="onSearch"
            >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
</template>
<script>
export default {
    data(){
        return{
            kw:""
        }
    },
    methods:{
        goHistory(){
            history.go(-1);
        },
        onSearch(){
            if(!this.kw){
                this.$toast('请输入搜索内容')
            }else{
                this.$router.push('/products/'+this.kw);
            }
            // this.$store.dispatch('search_kw',this.kw);
            // console.log(this.$store.state.kw);
        }
    },
    created(){
        this.kw=this.$route.params.kw;
    },
    watch:{
        $route(){
            this.kw=this.$route.params.kw;
        },
    }  
}
</script>
<style>
    .van-search__content{
        width:20%;
        margin-left:25px;
        margin-right:5px;
        border-radius:30px;
    }
    .aback.left-more{
        margin: 0;
        position: absolute;
        left: 5px;
        width: 35px;
        height: 35px;
        top: 7px;
        background: url(../assets/back3.png) 0 0 no-repeat;
        background-size: 35px auto;
        background-position: 0 0;
    }
</style>
