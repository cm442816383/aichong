<template>
    <div>
        <div id="myorder" >
            <table></table>
            <h4>我的订单</h4>
            <div class="myflex">
                <div class="myflex_cell">
                    <div class="pic" style="font-size:30px">
                        <van-icon name="pending-payment" />                   
                    </div>
                <p>待付款</p>
                </div>
                <div class="myflex_cell">
                    <div class="pic" style="font-size:30px">
                        <van-icon name="logistics" />                   
                    </div>
                <p>待收货</p>
                </div>
                <div class="myflex_cell">
                    <div class="pic" style="font-size:30px">
                        <van-icon name="comment-o" />                  
                    </div>
                <p>待评论</p>
                </div>
                <div class="myflex_cell">
                    <div class="pic" style="font-size:30px">
                        <van-icon name="gold-coin-o" />                  
                    </div>
                <p>自助售后</p>
                </div> 
            </div>
        </div>
        <div id="mypurse">
            <table></table>
            <h4>我的钱包</h4>
            <div class="myflex">
                <div class="myflex_unit">
                   <span class="myprice">0</span>
                    <p>优惠券</p> 
                </div>  
                <div class="myflex_unit">
                   <span class="myprice">0</span>
                    <p>爱宠币</p> 
                </div>
                <div class="myflex_unit">
                   <span class="myprice">0.00</span>
                    <p>余额</p> 
                </div>
                <div class="myflex_unit">
                   <span class="myprice">0.00</span>
                    <p>红包</p> 
                </div>              
            </div>
        </div>
        <div id="myserve">
            <table></table>
            <h4>我的服务</h4>
            <div class="myflex">
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png" alt="">
                    <p>联系客服</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png" alt="">
                    <p>潮品预售</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/2ef8974804eee7c917d1fbc3c51b6305.png" alt="">
                    <p>我的团队</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png" alt="">
                    <p>我的收藏</p>
                </div>
            </div>
            <div class="myflex">
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/1d3a06612387336fdef4340d8367a03f.png" alt="">
                    <p>我的兑换</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png" alt="">
                    <p>我的关注</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png" alt="">
                    <p>萌爪联盟</p>
                </div>
                <div class="myflex_serve">
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png" alt="">
                    <p>我的捐赠</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
p{margin: 0;padding: 0}
    #myorder{
        /* background-color: #aaa; */
        border:1px solid #eee;
        box-shadow: 1px 1px 20px #ddd;
        width: 90%;
        height: 120px;
        margin: 40px auto;
        border-radius: 10px;
    }
    h4{
        margin: 10px;
    }
    .myflex{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    .pic{
        text-align: center;
        color:#999;
    }
    p{
        font-size: 12px;
    }
    #mypurse{
        border:1px solid #eee;
        box-shadow: 1px 1px 20px #ddd;
        width: 90%;
        height: 120px;
        margin: 20px auto;
        border-radius: 10px;
    }
    .myflex_unit{
        text-align: center;
    }
    .myflex_unit>span{
        color:red;
        font-size: 14px;
    }
    .myflex_unit>p{
        margin-top:10px;
    }
    #myserve{
        border:1px solid #eee;
        box-shadow: 1px 1px 20px #ddd;
        width: 90%;
        height: 200px;
        margin: 20px auto;
        border-radius: 10px;
    }
    .myflex_serve{
        text-align: center;
    }
    .myflex_serve img{
        width: 26px;height: 26px;
    }

</style>