<template>
    <div class="bgfff">
        <div class="bgfff undefined">
            <div class="err-font">
                <p class="bold error">404错误</p>
                <p>您要找的页面不存在，或已被删除！</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .undefined{
        /* position:relative;
        top:50%; */
        margin-top: -10px;
        padding-bottom: 30px;
        height: 100%;
    }
    .err-font{
        padding: 70px 0;
        font-size: 16px;
        text-align: center;
    }
    .error{
        font-size: 32px;
        margin-bottom: 15px;
    }
</style>
