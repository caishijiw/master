<template>
<div class="wrap">
  <div class="swiper-container">
    <van-swipe :autoplay="3000" indicator-color="transparents" :loop="true">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>


  </div>
</div>
</template>

<script>
    export default {
        name: "ScenicIntroduction"
    }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 5.68rem;
  }
  .swiper-container {

  }

</style>
