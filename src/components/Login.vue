<template>
    <div class="bgfff">
        <top></top>
        <div id="logmain">
           <h2>账号密码登录</h2> 
           <div class="myinput">
               <input type="text" placeholder="手机号码" id="phone" v-model="phone">
            </div>
           <div class="myinput">
               <input :type="tp?'text':'password'" placeholder="请输入6-20位密码" id="pwd" v-model="upwd">
               <div id="eyes" >
                   <van-icon :name="tp?'eye-o':'closed-eye'"  @click="eye"/>
                </div> 
            </div>
           <div class="myinput btn">
               <van-button type="primary" size="large"  round @click="login">下一步</van-button>
            </div>
           <div id="jump">
               <router-link to="/register">新用户注册</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
import { Icon } from 'vant';
Vue.use(Icon);
import { Toast } from 'vant';
Vue.use(Toast);
import top from "./Top"
export default {
    data(){
    return {
      phone:"", //输入电话
      upwd:"" ,  //输入密码
      tp:false
    }
  },
  methods:{
    eye(){
        this.tp=!this.tp;
    },
    login(){
     //功能:完成用户登录操作
     //1:获取用户输入电话
     var phone = this.phone;
     //2:获取用户输入密码
     var p = this.upwd;
    //  console.log("1:"+phone+"_"+p);
    //3:创建正则表达式 
     var reg = /^1[3-9]\d{9}$/;
     //4:验证手机号
     if(!reg.test(phone)){
      console.log("2:");
       //5:验证不成功 提示消息
        Toast.fail('手机号输入不正确');
      return;
     }   
    var reg2=/^[a-zA-Z0-9]{6,20}$/;
     //6:验证密码
     if(!reg2.test(p)){
      //7:验证不成功 提示消息
      Toast.fail('密码输入不正确');
      return;
     }  
     //8:发送ajax请求
     var url = "login";
     var obj = {phone:phone,upwd:p};
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
     //    console.log(res.data.code);
        if(res.data.code<0){
          Toast.fail('密码输入不正确');
        }else{
            this.$store.commit("userStatus");
            this.$store.commit("userState");
            sessionStorage.setItem("status",this.$store.getters.islogin);
            // 将用户名放入sessionStorage
            sessionStorage.setItem("userPhone",res.data.phone);
            
            // 将电话放入vuex
            this.$store.dispatch("setUser",res.data.phone);
          //跳转Synthesize组件 
          this.$router.push("/Synthesize");
        } 
      });

      
    }
  },
    components:{
        top,
    }
}
</script>
<style scoped>
*{margin:0;padding: 0;border:0;outline: 0;font-size: 13px;}
#logmain{
    margin:20px auto;
}
    h2{
        padding-left:40px; 
        color:#444;
        font-size: 20px;
        margin-bottom: 18px;
    }
    .myinput{
        width: 80%;
        margin: 4px auto;
        position: relative;
    }

    input{
        width: 100%;
        padding:16px 5px;
        border-bottom:2px solid #ddd;
        box-sizing: border-box;
        
    }
    .btn{
        margin-top:37px;
    }
    p{
        font-size: 0.5rem;
    }
    a{
        color:#e00;
    }
    #btn1{
        position: absolute;
        top:4px;
        left:210px;
    }
    #eyes{
        position: absolute;
        top:14px;
        left:226px;
        color: #555;
    }
    #jump{
        margin-top:18px;
    }
    #jump>a{
        color: #333;
        margin-left:250px;        
    }
    .van-icon.van-icon-closed-eye{
        font-size:24px
    }
    .van-icon.van-icon-eye-o{
        font-size:24px
    }
</style>