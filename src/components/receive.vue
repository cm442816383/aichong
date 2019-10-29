<template>
    <div>
        <div class="receiveInfor" @click="todftaddress">
            <div>
                <div class="phone">{{adres.receiver+adres.cellphone}}</div>
                <div class="default">
                    <button v-if="adres.def">默认</button>
                    <span>{{adres.province+adres.city+adres.county+adres.address}}</span>
                </div>
            </div>
            <img src="../assets/dayuicon.png" alt="">
        </div>
    </div>
</template>
<script>
import funs from '../assets/funs/funs.js';
export default {
    data(){
        return{
            adres:[],
            isAddress:true,
            aid:this.$store.state.aid
        }
    },
    methods:{
        loadMore(){
            var aid=this.aid;
            // console.log(aid);
            if(aid>0){
                var obj={aid}
                funs.selAddres2(obj,res=>{
                    this.adres=res.data.data[0];
                })
            }    
        },
        load(){
            funs.selAddres(res=>{
                // console.log(res.data.data);
                this.adres=res.data.data;
                // if(this.adres.length>0){
                //     this.$store.dispatch('set_address',this.isAddress)
                //     console.log(1)
                // }
                var arr=this.adres;
                for(var i=0;i<arr.length;i++){
                    if(arr[i].def){
                        this.adres=arr[i];
                    }else{
                        this.adres=arr[0];
                    }
                }
            })
        },
        todftaddress(){
            this.$router.push("/Dftaddress");
        },
    },
    created(){
        this.load();
        this.loadMore();
    }
}
</script>
<style scoped>
    .receiveInfor{
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-left:10px;
    }
    .receiveInfor .phone{
        font-size:15px;
        font-weight:700;
     }
    .receiveInfor .default{
        font-size:13px;
        color:#666;
     }
     .default button{
        background-color:#41c856;
        font-size:12px;
        border:none;
        color:#fff;
        width:32px;
        height:20px;
        border-radius:20px;
     }
</style>
