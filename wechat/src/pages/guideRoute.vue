<template>
  <div class="wrap">
    <div class="router-wrap">
      <div class="step-wrap">
        <div class="step">
          <img :src="imgSrc" alt="">
        </div>
        <div class="step" style="margin-top: 1.5rem;">
          <img :src="imgSrc" alt="">
        </div>
      </div>
      <!--右边路线-->
      <div class="router-content">
       <div class="router-title  router-item">
         <div class="router-item-content">
           <span class="router-item-title">采石矶游客中心</span>
         </div>
       </div>
        <div class=" router-item">
          <div class="router-item-content">
            <span class="router-item-title">延园</span>
            <span class="view-detail">查看详情 ></span>
          </div>
          <div class="spot-content">
            <div class="img-wrap">
              <img src="../assets/images/galleryjpg.jpg" alt="">
            </div>
            <div class="spot-discribe">

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "guideRoute",
    data() {
      return {
        imgSrc: require('../assets/images/step.png')

      }
    }
  }
</script>

<style scoped>

  .wrap {
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.93rem 0.826rem 0;
    overflow-y: auto;
  }

  .router-wrap {
    width: 100%;
    height: 100%;
  }

  .step-wrap {
    width: 0.4266rem;
    height: auto;
    min-height: 100%;
    position: relative;
    float: left;
  }
  .router-content{
    width: calc(100% - 0.4266rem);
    height: 100%;
    float: right;

    padding-left: 0.42rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .step-wrap:before {
    content: "";
    background: #9BDCE9;
    width: 1px;
    z-index: -1;
    position: absolute;
    margin: 0 auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }

  .step {
    width: 0.426rem;
    height: 0.426rem;
    background: #fff;

  }

  .step img {
    width: 0.426rem;
    height: 0.426rem;
    z-index: 6666;
  }
  .router-item-title{
    font-size:0.373rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:0.3rem;

  }
  .router-item{
    height: 2.85rem;
    margin-bottom:0.386rem;
    width: 100%;
    background: royalblue;
  }
  .router-title.router-item{
height: 1.5rem;
  }
  .view-detail{
    font-size:0.32rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:rgba(48,154,159,1);
    line-height:0.44rem;
    float: right;
  }
  .router-item-content{
    margin-bottom: 0.3rem;
  }
.spot-content{
  width: 100%;

}
  .spot-content .img-wrap{
    width: 2.13rem;
    height: 2.13rem;
    -webkit-border-radius: 0.106rem;
    -moz-border-radius: 0.106rem;
    border-radius: 0.106rem;
    overflow: hidden;
  }
  .spot-content .img-wrap img{
    width: 100%;
    height: 100%;
  }
  .spot-discribe{
    width: calc(100% -  2.13rem);

  }
</style>
