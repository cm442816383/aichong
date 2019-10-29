<template>
    <div class="moudle_206">
        <van-swipe @change="onChange">
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
export default {
  data() {
    return {
      current: 0,
      pics:[
          "https://img2.epetbar.com/2019-08/22/11/6f1ecb66825bd6c96b30c2f5fcdca8ee.jpg?x-oss-process=style/water",
          "https://img2.epetbar.com/2019-10/12/16/b04a2528a095a4edea7d8924d47045eb.jpg?x-oss-process=style/water",
          "https://img2.epetbar.com/2019-10/12/16/88c6aaefa5148d08eb9367bc29db3db9.jpg?x-oss-process=style/water",
          "https://img2.epetbar.com/2019-10/12/17/ba1f0b8a44d3e35760774b623eb6b371.jpg?x-oss-process=style/water"
      ]
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>
<style scoped>
    .moudle_206{
        height:186px;
        margin-left:10px;
        margin-right:10px;
    }
    .van-swipe img{
        border-radius: 15px;
    }
    .custom-indicator{
        position:relative;
        top:-40px;
        left:360px;
    }
</style>
