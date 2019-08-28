<template>
  <div class="wrap">
    <div class="appropriate-wrap">
      <div class="temperature">
        <div class="left-content">
          <mark>26</mark>
          ℃
        </div>
        <div class="right-content">
          <span class="date">2019-08-23&nbsp;周五</span>
          <span>气温适宜,非常适合出游,注意防晒</span>
        </div>

      </div>
      <!--指数-->
      <div class="index-wrap">
        <div class="index-item">
          <div class="number">70%</div>
          湿度
        </div>
        <div class="index-item">
          <div class="number">70%</div>
          降雨概率
        </div>
        <div class="index-item">
          <div class="number">10</div>
          紫外线指数
        </div>
        <div class="index-item">
          <div class="number">10</div>
          感冒指数
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "AppropriateIndex"
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }

  .appropriate-wrap {
    width: 100%;
    height: 10.90rem;
    background: url("../../static/images/AppropriateBg.png") center no-repeat;
    background-size: 100% 100%;
    padding-top: 0.4rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .temperature {
    width: 8.1rem;
    height: 2.24rem;
    padding-left: 0.8rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
  }

  .temperature .left-content {
    width: 2.506rem;
    height: 100%;
    vertical-align: bottom;
    font-size: 0.373rem;
    font-family: PingFangSC-regular;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    float: left;
    margin-right: 0.3rem;
  }

  .temperature .left-content mark {
    background: transparent;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 2.24rem;
    font-size: 1.6rem;

  }

  .temperature .right-content {
    float: right;
    width: 4.106rem;
    font-size: .373rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.3rem;
    padding-top: 0.36rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  .temperature .right-content span {
    display: block;
    line-height: 0.5rem;
  }

  .index-wrap {
    width: 9rem;
    height: auto;
    margin: 1.5rem auto 0;
  }
  .index-item{
    width:50%;
   text-align: center;
    height: 1.46rem;
    margin-bottom: 0.66rem;
    font-size:0.373rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:0.5rem;
  }
  .index-item .number{
    font-size:0.6rem;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:0.893rem;
  }
  .index-item:nth-child(odd){
    float: left;

  }
  .index-item:nth-child(even){
   float: right;
  }

</style>
