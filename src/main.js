// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 尽量不用mint-ui
// import MintUI from "mint-ui"
// import "mint-ui/lib/style.css"
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入iconfont.css
import "./font/iconfont.css"
// 引入axios
import axios from "axios"
// 引入vuex
import Vuex from "vuex"
Vue.config.productionTip = false;
// 引入基础样式
import './assets/resetVui.css';
//引入底部导航栏
import bottomTab from './components/bottomTab.vue'
//引入搜索组件
import mySearch from './components/mySearch.vue'
// Vue.use(MintUI)
import Router from 'vue-router'
//引入bus.js
import bus from './bus'
//将bus添加到原型对象中
Vue.prototype.bus=bus;

//在数组对象中添加一个删除数组中某个元素的方法
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  // console.log(index);
  if (index > -1) {
  this.splice(index, 1);
  }
};

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Vant)

axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios = axios

Vue.use(Vuex)

Vue.component("bottomTab",bottomTab);
Vue.component("mySearch",mySearch);

// 创建存储对象
//11:创建存储对象
var store = new Vuex.Store({
  state:{   //共享:数据
    pids:'',
    cartCount:0,//共享:购物车数量
    islogin:false,
    currentPhone:null,
    total:0,
    // isAddress:false,
    aid:0
  },
  mutations:{//修改共享数据
    set_address(state,aid){
      state.aid=aid;
    },
    set_total(state,total){
      state.total=total
    },
    countsPids(state,pids){
      state.pids=pids
    },
    userStatus(state,phone){
      state.currentPhone=phone;
    },
    userState(state){
      state.islogin=true;
    },
  },
  getters:{//获取共享数据
    // isAddress(state){
    //   return state.isAddress;
    // },
    currentPhone(state){
      return state.currentPhone;
    },
    islogin(state){
      return state.islogin;
    },
  },
  actions:{
    setAddress({commit},aid){
      commit('set_address',aid)
    },
    setTotal({commit},total){
      commit('set_total',total)
    },
    setPids({commit},pids){
      commit('countsPids',pids)
    },
    setUser({commit},phone){
      commit("userStatus",phone);
    },
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
