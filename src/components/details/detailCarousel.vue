<template>
    <div class="moudle_206">
        <van-swipe @change="onChange" loop>
            <van-swipe-item v-for="(pic,i) of pics" :key="i">
                <img class="w100" :src="pic" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/<span class="ft12">{{pics.length}}</span>
            </div>
        </van-swipe>
    </div>    
</template>
<script>
import funs from '../../assets/funs/funs.js';
export default {
  data() {
    return {
      current: 0,
      pics:[],
      products:{}
    //   pics:[]
        //   "https://img2.epetbar.com/2018-08/30/11/53394b269499fabc70a520f39d0b2e5d.jpg?x-oss-process=style/cut&$1=500&$2=500",
        //   "https://img2.epetbar.com/2014-05/09/332b5a0b144f391046eff87666581786.jpg?x-oss-process=style/cut&$1=500&$2=500",
        //   "https://img2.epetbar.com/2014-05/09/bd1ca38107cafaa127f70d561d437fe1.jpg?x-oss-process=style/cut&$1=500&$2=500",
        //   "https://img2.epetbar.com/2014-05/09/316618432e46217fdcb3db3ddd0e2b21.jpg?x-oss-process=style/cut&$1=500&$2=500"
      
    }
  },
  props:["pid"],
  methods: {
    load(){
        funs.getDetail(this.pid,res=>{
            var imgurl=res.data.data[0].imgurl;
            this.pics.push(`http://127.0.0.1:4000/${imgurl}`);
        })
    },
    onChange(index) {
      this.current = index;
    },
  },
  created(){
     this.load(); 
  }
}
</script>
<style scoped>
    .moudle_206{
        height:186px;
        /* margin-left:10px;
        margin-right:10px; */
    }
    .van-swipe img{
        /* border-radius: 15px; */
    }
    .custom-indicator{
        /* position:relative;*/
        position: absolute;
        width: 30px !important;
        height: 30px !important;
        z-index: 999;
        bottom:20px;
        right:10px; 
        background: rgba(0,0,0,0.2);
        border-radius: 100%;
        color: #fff;
        line-height: 30px;
    }
</style>
