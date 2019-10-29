<template>
    <div>
        <div id="user_banner" v-if="!isLogin">
            <router-link to="/login" >登录</router-link>
            <span>|</span>
            <router-link to="register">注册</router-link>
        </div>
        <div id="user_login" v-else>{{myphone}}</div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            isLogin:window.sessionStorage.getItem("status"),
            myphone:window.sessionStorage.getItem("userPhone")
        }
    },
    created() { //1:添加生命周期
        this.loadMore();
        // console.log(window.sessionStorage.getItem("status"))
    },
    methods: {
        loadMore(){
                
        },
        
    },
}
</script>