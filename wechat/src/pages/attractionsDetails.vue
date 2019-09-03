<template>
  <div class="wrap">
    <div class="spot-name">
      <img :src="spotobj.imgSrcArray[0]" alt="">
      <div class="mask"> {{spotobj.name}}</div>
    </div>
    <!--景点内容-->
    <div class="spot-content">
      <div class="spot-content-item">
        <span class="item-title">景点美图</span>
        <div class="gallery-wrap">
          <div class="gallery-content">
            <div class="imgs-wrap" :style="{'width':width }">
                <img  v-for="(item,index) in spotobj.imgSrcArray" :key="index" :src="item" alt=""  class="img-item">
            </div>
          </div>
        </div>
      </div>
      <div class="spot-content-item">
        <span class="item-title margin-bottom">景点简介</span>
        <div class="spot-detail-introduction" v-html="spotobj.introduce"></div>
        <span class="address">地址: <i>{{spotobj.address}}</i> </span>

      </div>
      <div class="spot-content-item">
        <span class="item-title margin-bottom">周边推荐</span>
        <div class="recommended-wrap">
        <strong class="recommended" v-for="(it,index) in spotobj.surrounding">{{it}}</strong>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "attractionsDetails",
    data() {
      return {
        spotobj:{},
        width: 0,
      }
    },
    mounted() {
      this.spotobj=JSON.parse(this.$route.query. obj)
      console.log(this.spotobj)
      document.title='景点详情'
      var allimgWidth = this.spotobj.imgSrcArray.length * 2.72 + 'rem'
      this.width = allimgWidth;

    }
  }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }
  .spot-name {
    width: 100%;
    height: 2.13rem;
    background: url("https://image.supconit.net/ranxiting1.png") center no-repeat;
    position: relative;
    background-size: 100% auto;
    margin-bottom: 0.32rem;
    /*background:linear-gradient(180deg,rgba(101,202,205,0.6) 0%,rgba(53,154,159,1) 100%);*/
  }

  .spot-name img {
    width: 100%;
    height: 100%;
  }

  .spot-name .mask {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(101, 202, 205, 0.6) 0%, rgba(53, 154, 159, 1) 100%);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.533rem;

    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 2.13rem;
    text-align: center;
    letter-spacing: 1px;
  }

  .spot-content {
    width: 100%;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 0.32rem;
  }

  .item-title {
    font-size: 0.373rem;

    font-weight: 550;
    color: rgba(72, 72, 72, 1);
    line-height: 0.53rem;
    margin-bottom: 0.13rem;
    display: block;
  }
  .item-title.margin-bottom{
    margin-bottom: 0.32rem;
  }

  .gallery-wrap {
    width: 100%;
    height: 2.4rem;
    overflow: hidden;
  }

  .gallery-content {
    width: 100%;
    height: 2.6rem;
    overflow-x: auto;
  }

  .imgs-wrap .img-item {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.32rem;
    -webkit-border-radius: 0.08rem;
    -moz-border-radius: 0.08rem;
    border-radius: 0.08rem;
    float: left;
    overflow: hidden;
  }

  .imgs-wrap {
    width: auto;
    height: 2.3rem;
  }

  .img-item img {
    width: 100%;
    height: 100%;

  }

  .spot-detail-introduction {
    width: 100%;
    height: auto;
    padding:  0 0.44rem;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.32rem;

    font-weight: 400;
    color: rgba(72, 72, 72, 1);
    line-height: 0.44rem;
    text-align: left;
    letter-spacing: 1px;
    margin-bottom: 0.44rem;
  }

  .spot-content-item {
    margin-bottom: 0.41rem;
  }

  .address {
    display: block;
    color: #484848;
    font-size: 0.32rem;

    font-weight: 500;
    color: rgba(72, 72, 72, 1);
    line-height: 0.44rem;
    text-indent: 0.33rem;
  }

  .address i {
    color: #666666;
    font-style: normal;

  }
  .recommended{
    font-size: 0.32rem;

    font-weight:500;
    color:rgba(48,154,159,1);
    line-height:0.44rem;
    font-weight: normal;
    margin-right: 0.32rem;
  }
  .recommended-wrap{
    padding:  0 0.44rem;
    border:1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }


</style>
