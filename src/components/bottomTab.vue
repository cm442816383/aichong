<template>
    <div class="foot_container">
        <!-- <div class="foot_tabber">
            <a class="foot_item" href="javascript:;" @click="changeState(0)">
                <span class="Icon1"></span>
            </a>
            <a class="foot_item" href="javascript:;" @click="changeState(1)">
                <span class="Icon1"></span>
            </a>
            <a class="foot_item" href="javascript:;" @click="changeState(2)">
                <span class="Icon1"></span>
            </a>
            <a class="foot_item" href="javascript:;" @click="changeState(3)">
                <span class="Icon1"></span>
            </a>
            <a class="foot_item" href="javascript:;" @click="changeState(4)">
                <span class="Icon1"></span>
            </a>
        </div> -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item @click="changeState(0)">
                <span :style="currentIndex[0].isSelect?'background-position:-328px -58px;':'background-position:-328px -2px;'" class="Icon1"></span>
            </van-tabbar-item>
            <van-tabbar-item @click="changeState(1)">
                <span :style="currentIndex[1].isSelect?'background-position:-52px -58px':'background-position:-52px -2px'" class="Icon1"></span>
            </van-tabbar-item>
            <van-tabbar-item @click="changeState(2)">
                <span :style="currentIndex[2].isSelect?'background-position:-181px -58px':'background-position:-181px -2px'" class="Icon1"></span>
            </van-tabbar-item>
            <van-tabbar-item @click="changeState(3)">
                <span :style="currentIndex[3].isSelect?'background-position:-113px -58px':'background-position:-113px -2px'" class="Icon1"></span>
            </van-tabbar-item>
            <van-tabbar-item @click="changeState(4)">
                <span :style="currentIndex[4].isSelect?'background-position:-255px -58px':'background-position:-255px -2px'" class="Icon1"></span>
            </van-tabbar-item>
        </van-tabbar>
    </div>   
</template>
<script>
export default {
    data() {
        return {
            active:0,
            focused:false,
            currentIndex:[
                {name:'/index',isSelect:true},
                {name:'/car',isSelect:false},
                {name:'/book',isSelect:false},
                {name:'/Cart',isSelect:false},
                {name:'/Synthesize',isSelect:false}
            ],
        }   
    },
    methods:{
        changeState(n){
            this.$router.push(`${this.currentIndex[n].name}`)
            var arr=this.currentIndex;
            for(var i=0;i<arr.length;i++){
                if(n==i){
                    // console.log(n);
                    arr[i].isSelect=true;
                }else{
                    arr[i].isSelect=false;
                }
                // console.log(arr[i].isSelect)
            }
        }
    },
    created(){
        
    },
    
}
</script>
<style>
    .foot_container{
        height:52px;
        /* background:#fff; */
    }
    .foot_tabber{
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        z-index: 99;
        box-shadow:1px 2px 25px 0px rgba(0,0,0,0.1);
        background-color: white;
        overflow: hidden;
        display:flex;
        justify-content: space-around;
        padding-top:4px;
    }
    .foot_item{

    }
    .Icon1{
        display: block;
        margin: auto;
        width: 45px;
        height: 45px;
        background: url("../assets/tabicon.png") 0 0 no-repeat;
        background-size: 385px auto;
        background-position:-328px -58px;
    }
</style>

