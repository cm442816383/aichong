<template>
    <div class="bgfff"> 
        <top></top>             
        <div id="regmain">
           <h2>快速注册</h2> 
           <div class="myinput">
               <input type="text" placeholder="手机号码" id="phone" v-model="phone">
            </div>          
            <div class="myinput">
               <input :type="tp?'text':'password'" placeholder="请输入6-20位密码" id="pwd" v-model="upwd">
               <div id="eyes"   >
                   <van-icon name="closed-eye"  v-if="tp==false" @click="eyeo"/>
                   <van-icon name="eye-o"  v-else @click="eyec"/> 
                   <!-- <van-icon name="closed-eye" /> -->
                </div>
            </div>
            <div class="myinput">
                <van-button type="primary" size="large" style="border-radius:30px" @click="register">下一步</van-button>
            </div>
        </div>
        <div class="myinput">
            <p>点击“下一步”，即表示您阅读并同意
                <a href="#">《E宠商城用户协议》</a>
            </p>
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
import top from "./Top.vue"
export default {
    data(){
        return{
            phone:"",
            upwd:"",
            tp:false
        }
    },
    methods: {       
        eyeo(){
            this.tp=true
        },
        eyec(){
            this.tp=false
        },
        register(){
            // 获取用户输入的电话和密码
            var phone=this.phone;
            var p=this.upwd;
            // console.log(phone+"_"+p);
            // 创建正则表达式
            var reg=/^1[3-9]\d{9}$/;
            // 验证手机号
            if(!reg.test(phone)){
                //5:验证不成功 提示消息
                Toast.fail('请输入正确的手机号');
                return;
            }
            // 验证密码
            var reg2=/^[a-zA-Z0-9]{6,20}$/;
            if(!reg2.test(p)){
                Toast.fail('请输入6-20位密码');
                return
            }
            //8:发送ajax请求
            var url="register";
            var obj={phone:phone,upwd:p};
            this.axios.get(
                url,
                {params:obj}
            )
            .then(res=>{
                console.log(res)
                console.log(res.data.code) 
                if(res.data.code==400){
                   Toast.fail('注册失败'); 
                }else if(res.data.code==200){
                    this.$router.push("/login")
                }        
            })
            .catch(err=>{console.log(err)
            })

        }
    },
    components:{
        top,
    }
}
</script>
<style scoped>
*{margin:0;padding: 0;border:0;outline: 0;font-size: 13px;}
#regmain{
    margin:20px auto;
}
    h2{
        padding-left:40px; 
        color:#444;
        font-size: 25px;
    }
    .myinput{
        width: 80%;
        margin: 4px auto;
        position: relative;
    }
    .myinput:last-child{
        margin-top: 40px;
    }
    input{
        width: 100%;
        padding:16px 5px;
        border-bottom:2px solid #ddd;
        box-sizing: border-box;
        
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
    .van-icon.van-icon-closed-eye{
        font-size:24px
    }
    .van-icon.van-icon-eye-o{
        font-size:24px
    }
</style>