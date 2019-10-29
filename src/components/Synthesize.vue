<template>
    <div class="bgfff">
        <van-nav-bar
            title="我的爱宠"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            
        />
        <div id="user_info">
          <div id=icon_info style="font-size:26px">
            <a href="#"><van-icon name="setting-o" /></a>
            <a href="#"><van-icon name="chat-o" /></a>           
          </div>
          <div id="user_main">
            <img src="https://static.epetbar.com/static_wap/appmall/avatar/cat.png" alt="">
            <show></show>
            <!-- <div id="user_banner">
              <router-link to="/login" >登录</router-link>
              <span>|</span>
              <router-link to="register">注册</router-link>
            </div> -->
          </div>
            <div id="user_bottom">
                <div class="db">
                  <a href="#">
                    <div>
                      <img src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png" alt="">
                    </div>
                  </a>
                </div>
                <div class="db">
                  <a href="#">
                    <div>
                      <img src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png" alt="">
                    </div>
                  </a>
                </div>
                <div class="db">
                  <a href="#">
                    <div>
                      <img src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png" alt="">
                    </div>
                  </a>
                </div>
                <div class="db">
                  <a href="#">
                    <div>
                      <img src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png" alt="" >
                    </div>
                  </a>
                </div>
            </div>
        </div>
        <card></card>
        <bottom-tab></bottom-tab>
    </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
// import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import card from "./Card"
import show from "./Show"
export default {
    methods: {

    onClickLeft() {
      // 跳转到主页
      this.$router.push("/index")
    },
    
  },
  components:{
    card,
    show
  }
}
</script>
<style>
  #user_info{
    background: #47cf58;
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  #icon_info{
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
  a{
    color:#eee;
  }
  a>i.van-icon{
    margin:15px 20px;
  }
  #user_main{
    width: 100%;
    height: 70px;
    margin: 12px 0;
    padding: 0 10px;
    /* background-color: #aaa; */
    display: flex;
    position: relative;
  }
  #user_main>img{
    width: 70px;height: 70px;
  }
  #user_banner{
    position: absolute;
    top: 22px;
    left: 90px;
    color:#eee;

    /* margin:30px 50px */
  }
  #user_login{
    position: absolute;
    top: 22px;
    left: 90px;
    color:#eee;

    /* margin:30px 50px */
  }

  #user_bottom{
    position: absolute;
    top: 168px;
    left: 10px;
    width: 94%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    background-color: #000;
    border-radius:10px;
  }
  .db{
    margin:7px 0;
  }
  .db>a>div>img{
    width: 64px;height: 16px;
  }
  .db:last-child>a>div>img{
    width: 64px;height: 12px;
    margin: 4px 0;
  }
  .van-icon.van-icon-arrow-left.van-nav-bar__arrow{
    color: #323233;
  }
</style>