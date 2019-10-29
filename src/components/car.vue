<template>
    <div>   
        <div style="">
            <van-tabs v-model="active" title-active-color="#41C856" sticky line-width="35px" color="#41C856">
                <van-tab title="分类">
                    <carcontent></carcontent>
                </van-tab>
                <van-tab title="品牌">内容 2</van-tab>
            </van-tabs>
        </div>
        <bottom-tab></bottom-tab>
    </div>
</template>

<script>
import carContent from "./carContent";
export default {
    data() {
        return {
            active: 0
        };
    },
    components:{
        "carcontent":carContent
    }
}
</script>

<style scoped>
img{
    width: 35px;
    height: 35px;
    /* float: right */
    display: block;
    z-index: 12;
}
</style>