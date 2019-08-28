<template>
    <div class="wrap">
      <p class="page-title">请选择您遇到的问题</p>
      <div class="problem-item" v-for="(item,index) in problemArray" :key="index">
        <span>{{item}}</span>
      </div>
      <!--sos 报警-->
      <div class="sos-wrap">
        <span class="sos-discribe" >如遇紧急情况，点击下方按钮联系我们</span>
        <img :src="sos" alt=""  class="sos-trigger">
      <p class="emergency-call">紧急联系电话</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "helpKey",
    data(){
          return{
            sos:'static/images/sos.png',
            problemArray:[
              '景区迷路，找不到出口','游客中暑，受伤，需要紧急提供治疗','游客落水，需要救险'
            ]
          }
    },
    mounted(){
          document.title='一键求助'
    }
    }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;

  }
  .page-title{
    width: 100%;
    height:0.44rem;
    font-size:0.32rem;
    /*font-family:PingFangSC-regular;*/
    font-weight:400;
    color:rgba(72,72,72,1);
    line-height:0.44rem;
    height: 1rem;
    margin-top: 0.64rem;
    text-align: center;
    margin-bottom: 0.3733rem;
  }
  .problem-item{
height:1.5rem;
text-align: center;

}
  .problem-item span{
    padding: 0.266rem  0.2133rem;
    border-radius:0.053rem;
    font-size:0.373rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    display: inline-block;

  }
  .problem-item:nth-child(odd) span{
    background:rgba(239,239,239,1);
    color:rgba(146,146,146,1);
  }
  .problem-item:nth-child(even) span{
    background:rgba(181,225,249,1);
    color:rgba(0,93,127,1);
  }
.sos-wrap{
  width: 5.44rem;
  height: auto;
  text-align:center ;
  margin: 1.6rem auto 0;
}
  .sos-discribe{
    font-size:0.32rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:rgba(146,146,146,1);
    line-height:0.44rem;
  }
  .sos-trigger{
    width: 5.0266rem;
    height:  5.0266rem;
  }
  .emergency-call{
    font-size:0.32rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:rgba(146,146,146,1);
    line-height:0.44rem;
    margin-top: 0.4rem;
  }
</style>
