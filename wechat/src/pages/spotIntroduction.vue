<template>
  <div class="wrap">
    <div class="title">
      <img src="../assets/images/introuduce.png" alt srcset />
      <span>热门景点</span>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
      </swiper>
    </div>
    <div class="title">
      <img src="../assets/images/introuduce.png" alt srcset />
      <span>热门景点</span>
    </div>
    <div class="other-science">
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
        </div>
      </div>
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
        </div>
      </div>
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
        </div>
      </div>
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
        </div>
      </div>
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
        </div>
      </div>
      <div class="each_science">
        <span class="science-img">
          <img src="https://cn.vuejs.org/images/logo.png" alt />
        </span>
        <div class="science-introduce">
          <div class="introduce-top">
            <div>古栈道</div>
            <div>查看详情 ></div>
          </div>
          <div class="introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简…..</div>
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
      swiperOption: {
        initialSlide: 1,
        slidesPerView: 1.235,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 1.4rem;
  display: flex;
  vertical-align: middle;
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
  line-height: 1.45rem;
  text-indent: 0.24rem;
}
.swiper {
  width: 100%;
  height: 4.5rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 80% !important;
  height: 100% !important;
  background-color: aquamarine;
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
}
.introduce-top {
  display: flex;
  justify-content: space-between;
}
.introduce-top>div:nth-child(1){
  color: rgba(72, 72, 72, 1);
  font-size: 0.37rem;
  font-family:PingFangSC;
  font-weight:400;
  line-height:0.44rem;
}
.introduce-top>div:nth-child(2){
    margin-right: 1rem;
    font-size:0.32rem;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(48,154,159,1);
    line-height:0.44rem;
}
.introduce{
  margin-top:0.2rem;
  text-align: initial;
  font-size:0.32rem;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(72,72,72,1);
  line-height:0.44rem;
}
</style>
