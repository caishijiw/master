<template>
  <div class="wrap">
    <div class="title">
      <img src="../../static/images/introuduce.png" alt srcset />
      <span>热门景点</span>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in scienceArray.slice(0,5)" :key="index">
          <div class="slide-wrap" @click="viewDetail(item)">
            <img :src="item.imgSrcArray[0]" alt="">
            <div class="slide-discribe">{{item.name}}</div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
    <div class="title">
      <img src="../../static/images/introuduce.png" alt srcset />
      <span>其他景点</span>
    </div>
    <div class="other-science">
      <div class="each_science" v-for="(item,index) in scienceArray.slice(5,scienceArray.length)" :key="index">
        <span class="science-img">
          <img :src="item.imgSrcArray[0]" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div >{{item.name}}</div>
            <div @click="viewDetail(item)">查看详情 ></div>
          </div>
          <div class="introduce"  v-html="item.introduce">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "spotIntroduction",
  data() {
    return {
      scienceArray: this.$store.state.routerArray,
      swiperOption: {
        initialSlide: 1,
        slidesPerView: 1.235,
        spaceBetween: 20,
        centeredSlides: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted(){
    document.title='景点概览'
  },
  methods:{
    viewDetail(item){
      this.$router.push({
        path:'/attractionsDetails',
        query:{
          obj:JSON.stringify(item)
        }
      })
    }
  }
};
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: auto;
    min-height: 100%;
    padding-top: 0.8rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
.title {
  width: 100%;
  height: 0.6rem;
  display: flex;
  vertical-align: middle;

  margin-bottom: 0.2rem;
}
.title > img {
  display: inline-block;
  width: 0.42rem;
  height: 0.42rem;
  margin: auto 0;
  margin-left: 0.42rem;
}
.title > span {
  display: inline-block;
line-height: 0.6rem;
  text-indent: 0.24rem;
  font-size: 0.38rem;
  font-weight: 550;
}
.swiper {
  width: 100%;
  height: 4.5rem;
  margin-bottom: 0.4rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 80% !important;
  height: 100% !important;
}
.other-science {
  width: 9.08rem;
  margin: 0 auto;
}
.each_science {
  width: 100%;
  height: 2.13rem;
  margin-bottom: 0.32rem;
  display: flex;
  position: relative;
}
.science-img {
  display: inline-flex;
  width: 2.13rem;
  height: 2.13rem;
}
.science-img > img {
  width: 100%;
  height: 100%;
}
.science-introduce {
  display: inline-block;
  width: 6.62rem;
  position: absolute;
  right: 0;
  padding-top: 0.15rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.introduce-top {
  display: flex;
  justify-content: space-between;
}
.introduce-top>div:nth-child(1){
  color: rgba(72, 72, 72, 1);
  font-size: 0.37rem;

  font-weight:550;
  line-height:0.44rem;

}
.introduce-top>div:nth-child(2){
    font-size:0.32rem;
    font-weight:400;
    color:rgba(48,154,159,1);
    line-height:0.44rem;
}
.introduce{
  margin-top:0.2rem;
  text-align: initial;
  font-size:0.32rem;

  font-weight:400;
  color:rgba(72,72,72,1);
  line-height:0.44rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
  .slide-wrap{
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-border-radius: 0.21rem;
    -moz-border-radius: 0.21rem;
    border-radius: 0.21rem;
    overflow: hidden;
  }
  .slide-wrap img{
    width: 100%;
    height: 100%;
  }
  .slide-discribe{
    position: absolute;
    width: 100%;
    height:1.08rem;
    line-height: 1.08rem;
    background:rgba(0,0,0,0.7);
    text-align: center;
    font-size:0.426rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
z-index: 6666;
    bottom: 0;
    left: 0;
    letter-spacing: 1px;
  }
</style>
