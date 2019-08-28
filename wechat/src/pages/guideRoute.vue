<template>
  <div class="wrap">
    <div class="router-wrap">

      <div class="router-title  router-item">
        <div class="step-line-wrap">
          <img :src="imgSrc" alt="">
        </div>
        <div class="router-item-content">
          <span class="router-item-title">采石矶游客中心</span>
        </div>
      </div>
      <div class=" router-item" v-for="(item,index) in routerItemArray">
        <div class="step-line-wrap">
          <img :src="imgSrc" alt="">
        </div>
        <div class="router-item-content">
          <span class="router-item-title">{{item.name}}</span>
          <span class="view-detail" @click="viewDetail(item)">查看详情 ></span>
          <div class="spot-content">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt="">
            </div>
            <div class="spot-discribe">
              {{item.introduce}}
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
        imgSrc:'static/images/step.png',
        routerItemArray: [
          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },
          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },

          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },

          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },
          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },

          {
            name: '延园',
            imgSrc:'static/images/galleryjpg.jpg',
            introduce: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
          },
        ]
      }
    },
    mounted(){
      document.title='旅游路线'
    },
    methods: {
      viewDetail() {
        this.$router.push({
          path: '/attractionsDetails'
        })
      }
    }
  }
</script>

<style scoped>
html,body{
  font-size: 37.5px ;
}
  .wrap {
    width: 100%;
    min-height: 100%;
    height: auto;
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

  .step-line-wrap {
    width: 0.4266rem;
    height: auto;
    min-height: 100%;
    position: relative;
    float: left;

  }

  .router-item-content {
    width: calc(100% - 0.4266rem);
    height: 100%;
    float: right;
    padding-left: 0.42rem;
    padding-top: 0.02rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .step-line-wrap:after {
    content: "";
    background: #9BDCE9;
    height: calc(100% - 0.426rem);
    width: 1px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .step-line-wrap img {
    width: 0.426rem;
    height: auto;
  }
  .router-item-title {
    font-size: 0.373rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.3rem;
  }
  .router-item {
    height: 3.3rem;
    width: 100%;
  }
  .router-title.router-item {
    height: 1.5rem;
  }
  .view-detail {
    font-size: 0.32rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(48, 154, 159, 1);
    line-height: 0.44rem;
    float: right;
  }
  .spot-content {
    width: 100%;
    margin-top: 0.2rem;
  }
  .spot-content .img-wrap {
    width: 2.13rem;
    height: 2.13rem;
    -webkit-border-radius: 0.106rem;
    -moz-border-radius: 0.106rem;
    border-radius: 0.106rem;
    overflow: hidden;
    float: left;
  }
  .spot-content .img-wrap img {
    width: 100%;
    height: 100%;
  }
  .spot-discribe {
    width: calc(100% - 2.13rem);
    height: 100%;
    font-size: 0.32rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 0.44rem;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    padding-left: 0.3rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

</style>
