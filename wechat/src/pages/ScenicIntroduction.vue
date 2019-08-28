<template>
<div class="wrap">
  <div class="swiper-container">
    <van-swipe :autoplay="4000" indicator-color="transparents" :loop="true">
      <van-swipe-item v-for="(item,index) in  bannerList" :key="index"><img :src="item" alt=""></van-swipe-item>
    </van-swipe>
  </div>
    <!--swiper结束-->
  <div class="main-content">
    <span class="page-title">采石矶简介</span>
    <span class="introduction-span" >采石矶，又名牛渚矶，位于马鞍山市西南的翠螺山麓。采石矶绝壁临江，水湍石奇，风景瑰丽，与岳阳城陵矶、南京燕子矶并称为“长江三矶”，而采石矶以独特的自然景观与深厚的文化内涵独领风骚，被誉为三矶之首。</span>
<span class="introduction-span">采石矶是唐代大诗人李白终老之地。诗仙李白一生曾多次登临吟诵，留下“醉酒捉月，骑鲸升天” 的传说。千百年来，名流才士，率多来此，或寻诗仙之遗韵，或发思古之幽情，文采风流，至今不绝。</span>
 <span class="introduction-span">采石矶扼守长江天险，历来是兵家必争之地，历代发生在这里的著名战争二十余次。采石矶还是我国早期的佛教胜地之一，广济寺始建于东汉，为江南名刹。 </span>
 <span class="introduction-span">采石矶现为国家重点风景名胜区、国家AAAA级旅游区。采石矶自然景观独特，人文资源丰厚，这里有全国最大的李白纪念馆，驰誉江南的三元洞，气势宏伟的三台阁，有“当代草圣”林散之艺术馆，谪仙园古建筑群，古栈道，翠螺湾等众多景点。游人可泛舟江上，赏翠螺秀色；或策杖古栈道，寻觅“大脚印”；或登三台阁，眺“天门晓日”，叹“大江东去”。采石矶是中外游客凭吊诗魂、寻觅李白游踪、体味诗词意境、领略山川之美的绝佳去处。</span>
  </div>
  <!--咨询热线-->
  <button class="ask">咨询热线: <a href="tel:210142">210142</a></button>
  <!--底部二维码-->
  <div class="footer-wrap">
    <img src="" alt="">
<p class="focus">长按二维码关注 <br> 和我们共赏翠螺秀色</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "ScenicIntroduction",
      data(){
          return{
            bannerList:[
         'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=541214762,1950046713&fm=26&gp=0.jpg',
         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566895705051&di=baf42329ea54d924986857198d854a00&imgtype=0&src=http%3A%2F%2Fimg.itc.cn%2Fphoto%2FjTVlAgb7C30'
            ]
          }
      },
      mounted(){
          document.title='景区概览'
      }
    }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;


  }
  .swiper-container{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 5.68rem;

  }
  .swiper-container  .van-swipe{
width: 100%;
    height: 100%;
  }
  .swiper-container .van-swipe-item,   .swiper-container .van-swipe-item img{
    width: 100%;
    height: 100%;
  }
 .main-content{
   height:12.05rem;
   width: 8.93rem;
   background:rgba(255,255,255,1);
   box-shadow:0px 0.026rem 0.053rem 0px rgba(24,68,53,0.49);
   border-radius:0.13rem;
   opacity:0.95;
   border:0.053rem solid rgba(48,154,159,1);
   margin: 4.6rem auto 0;
   z-index: 999;
   position: relative;
   padding: 0.76rem 0.44rem 0.44rem;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   font-family: PingFangSC-regular;
  }
  .page-title{
    display: inline-block;
    width:2.93rem;
    height:0.9866rem;
    background:rgba(48,154,159,1);
    box-shadow:0px 0.026rem 0.053rem 0px rgba(24,68,53,0.49);
    border-radius:0.13rem;
    font-size:0.426rem;
    font-family:PingFangSC;
    /*font-weight:600;*/
    color:rgba(255,255,255,1);
    line-height:0.9866rem;
    margin: 0 auto;
    position:absolute;
    top:-0.4933rem;
    left: 0;
    right: 0;
    letter-spacing: 1px;
text-align: center;
  }
.introduction-span{
  text-indent:0.8rem ;
  display: block;
  font-size:0.346rem;
  font-family:PingFangSC-regular;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:0.4933rem;
}
  .ask{
    display: block;
    width:89.3%;
    height:1.41rem;
    line-height: 1.41rem;
    background:rgba(48,154,159,1);
    box-shadow:0px 0.026rem 0.053rem 0px rgba(24,68,53,0.49);
    border-radius:0.13rem;
    opacity:0.95;
    margin:0.32rem  auto 1.093rem;
    outline: none;
    border:none;
    font-size:0.37rem;
    font-weight:400;
    color:rgba(255,255,255,1);
    letter-spacing: 1px ;
font-family: PingFangSC-regular;
  }
  .ask a{
    font-style: normal;
    font-size: 0.4266rem;
    color:rgba(255,255,255,1);
  }
  .footer-wrap{
   height: 6.88rem;
    width: 100%;
    background:url("../../static/images/ScenicIntroduction.png") center no-repeat;
    background-size: 100% 100%;
    padding-top:1.8rem ;
    border:1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
.footer-wrap img{
  width:2.69rem;
  height:2.69rem;
  display: block;

}
  .focus{
    font-size:0.426rem;
    color:rgba(255,255,255,1);
    line-height:0.6rem;
font-family: PingFangSC-Medium;
  }
</style>
