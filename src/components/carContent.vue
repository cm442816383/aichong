<template>
    <div>
        <div style="background:#fff !important; text-align:center;" id="tabs">
            <ul id="tab" @click="tab" style="overflow:auto">
                <li v-for="(task,i) of cat" :key="i" >
                    <div :data-i="`container`+(i+1)" :class="`tab`+(i+1)" :data-tab="`tab`+(i+1)">{{task}}</div>
                </li>
            </ul>
            <div id="container">
                <div class="container1">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container2" >
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container3">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container4">
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container5">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container6">
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container7">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container8">
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container9">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container10">
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container11">
                    <carcontentclassify></carcontentclassify>
                </div>
                <div class="container12">
                    <carcontentclassify1></carcontentclassify1>
                </div>
                <div class="container13">
                    <carcontentclassify></carcontentclassify>
                </div>
                 <div class="container14">
                    <carcontentclassify></carcontentclassify>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import carContentClassify from "./carContentClassify";
import carContentClassify1 from "./carContentClassify1";
export default {
    data() {
        return {    
            cat:["为您推荐","E宠国际","猫咪主粮","猫咪零食","猫咪清洁","猫咪日用","猫咪玩具","猫咪美容","猫咪保健","猫咪护理","猫咪洗浴","猫咪装扮","猫咪出行","猫咪窝垫"],         
        }
    },
    methods:{
        tab(e){
            if(e.target.nodeName==="DIV"){
                // 获取按钮元素自定义属性data-i的值
                var i =e.target.dataset.i;
                // 根据divi获取内容标签id
                var div=document.getElementsByClassName(i)[0];
                // 用for循环遍历container子元素div
                // 获取container所有子元素
                var container = document.getElementById("container");
                var containerChild = container.children;
                for( var j=0;j<containerChild.length;j++){
                    // 判断选中的类名跟内容类名相同
                   if(containerChild[j].className==div.className){
                    //    相同就显示
                       containerChild[j].style.display="block";
                    //    根据选中内容高度调整container整体高度
                       container.style.height = "containerChild[j].style.height";
                   }else{
                    //    不相同就隐藏
                       containerChild[j].style.display="none";
                   }
                }
                // 修改内容显示样式
                // div.style.zIndex=++this.zIndex;
                // 点击该按钮字体颜色变红，其他按钮不变
                // 获取父元素tab
                var tabUl = document.getElementById("tab");
                // 获取tab元素直接子元素li
                var tabLi = tabUl.children
                // 获取属性data-tab的值
                var tabi =e.target.dataset.tab;
                // 用for循环遍历获得子元素li
                for(var i=0;i<tabLi.length;i++){
                    // 根据获得子元素li跟点击获得li是否一致
                    if(tabLi[i].firstChild.className==tabi){
                        // 如果点击对，字体为红色
                        tabLi[i].firstChild.style.color="#41C856";
                        tabLi[i].firstChild.style.background="#f3f4f5"
                    }else{
                        // 否则为白色
                        tabLi[i].firstChild.style.color="#000";
                        tabLi[i].firstChild.style.background="#fff"
                    }
                }
                
            }
        }
    },
    components:{
        "carcontentclassify":carContentClassify,
        "carcontentclassify1":carContentClassify1,
    }
}
</script>
<style  scoped>
#tabs{
    display: flex;
    font-size:13px;
}

/* #tabs>#tab>li{
    border-right: 3px solid #f3f4f5;
} */
#tabs>#tab>li>div{
    width: 70px;
    height: 19px;
    line-height:32px;
    color:#000;
    padding:15px 0;
    border-right: 5px solid #f3f4f5;
}
#tabs>#tab>li:first-child>div{
    margin-top:7px;
     color:#41C856;
}
/* 
#tab li:first-child+li{
	background-color: #ff00cc;
}
#tab li:first-child+li+li{
	background-color: #00ccff;
} */

#container{
    position: relative;
    margin-top:-33px;
    width: 296px;
	height: 100px;
	top: 84px;
	left: 70px;
    position: absolute;
    /* background-color: #f3f4f5; */
}
 #container .container1{
    display: block;
    background-color: #fff;
    width: 100%;
	height: 100%;
	top: 0px;
	left: 6px;
    position: absolute;
    border-top:5px solid #f3f4f5;
} 
#container .container2,.container3,.container4,.container5,.container6,.container7,.container8,.container9,.container10,.container11,.container12,.container13,.container14{
    background-color: #fff;
    width: 100%;
	height: 100%;
	top: 0px;
	left: 6px;
    position: absolute;
    border-top:5px solid #f3f4f5;
    display: none;
}
</style>