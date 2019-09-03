<template>
    <div class="wrap">
      <p class="page-title">请选择您遇到的问题</p>

      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in problemArray" :key="index">
          <div class="slide-wrap">
            <span class="slide-discribe"   :class="item.active?'active':''"  @click="activeProblem(index)"> {{item.text}}</span>
          </div>
        </swiper-slide>

      </swiper>


      <!--<div class="problem-item" v-for="(item,index) in problemArray" :key="index">-->
        <!--<span>{{item}}</span>-->
      <!--</div>-->
      <!--sos 报警-->
      <div class="sos-wrap">
        <span class="sos-discribe" >如遇紧急情况，点击下方按钮联系我们</span>
        <img :src="sos" alt=""  class="sos-trigger"  :class="scale?'scale':''" @click="sosActive">
      <p class="emergency-call">紧急联系电话</p>
      </div>

    </div>
</template>

<script>
  let vm = null;
    export default {
        name: "helpKey",
    data(){
          return{
            swiperLightIndex:-1,
            swiperOption: {
              direction:'vertical',
              initialSlide: 2,
              spaceBetween: 15,
              centeredSlides: true,
              slidesPerView:5,
              loop:false,
              // on: {
              //   click: function () {
              //     // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
              //     console.log(this.clickedIndex%vm.problemArray.length); // -> Swiper
              //     vm.activeProblem(this.clickedIndex%vm.problemArray.length);
              //
              //     // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
              //     // const realIndex = this.realIndex;
              //     // console.log(realIndex)
              //     // vm.handleClickSlide(realIndex);
              //   }
              // }

            },
            scale:false,
            sos:'static/images/sos.png',
            problemArray:[
              { text:'景区迷路',active:false},
              {text:'找不到出口' ,active:false},
              {text:'游客中暑，受伤，需要紧急提供治疗',active:false},
              {text:'游客落水，需要救险',active:false},
              { text:'景区迷路',active:false},
              {text:'找不到出口' ,active:false},
              {text:'游客中暑，受伤，需要紧急提供治疗',active:false},
              {text:'游客落水，需要救险',active:false}, { text:'景区迷路',active:false},
              {text:'找不到出口' ,active:false},
              {text:'游客中暑，受伤，需要紧急提供治疗',active:false},
              {text:'游客落水，需要救险',active:false},
            ]
          }
    },
      created() {
        vm = this;
      },
    mounted(){
          document.title='一键求助'
    },
      methods:{
        activeProblem(index){
          this.problemArray.forEach((it,ind)=>{
            if(index===ind){
              it.active=true
            }else{
              it.active=false
            }
          })
        },
        sosActive(){
          let that=this;
          that.scale=true;
          setTimeout(function(){
            that.scale=false;
          },600)
        }

      },

    }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
overflow: hidden;
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
  .problem-item {
    height: 1.5rem;
    text-align: center;

  }

.sos-wrap{
  width: 5.44rem;
  height: auto;
  text-align:center ;
  margin: 1.6rem auto 0;
}
  .sos-discribe{
    font-size:0.32rem;

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

    font-weight:400;
    color:rgba(146,146,146,1);
    line-height:0.44rem;
    margin-top: 0.4rem;
  }
  .swiper-container{
    width: 100%;
    height:4.5rem;
  }
  .swiper-wrapper{
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper .swiper-slide{
    height: 1.06rem !important;
  }
 .slide-discribe{
    height: 1.06rem;
  }
  .slide-wrap{
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .slide-wrap>div,.slide-discribe{
   height: 1.06rem;
    line-height: 1.06rem;
    border-radius:0.053rem;
    font-size:0.373rem;
    font-weight:400;
    display: inline-block;
    background:rgba(239,239,239,1);
    border-radius:0.03rem;
padding: 0 0.4rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
  .slide-discribe.active{
   background:  #B5E1F9;
    color:rgba(0,93,127,1);
  }
  .sos-trigger.scale{
    -webkit-animation: myrotate 50s  linear;
    -moz-animation:myrotate 50s  linear;
    -ms-animation: myrotate 50s  linear;
    -o-animation: myrotate 50s  linear;
    animation: myrotate 50s  linear;
  }
  /*动画*/
  @-webkit-keyframes myrotate{
    0%{
      -webkit-transform : scale(0.9);
    }
  100%{
           -webkit-transform : scale(1);
         }
  }
  @-moz-keyframes myrotate{
    0%{
      -moz-transform :scale(0.9);
    }
    /*50%{*/
      /*-moz-transform : scale(0.5);*/
    /*}*/
    100%{
       -moz-transform : scale(1 );
     }
  }
  @-ms-keyframes myrotate{
    0%{
      -ms-transform : scale(0.9);
    }
    /*50%{*/
      /*-ms-transform : scale(0.5);*/
    /*}*/
    100%{
      -ms-transform : scale(1);
    }
  }
  @-o-keyframes myrotate{
    0%{
      -o-transform :  scale(0.9);
    }
    /*50%{*/
      /*-o-transform :  scale(0.5);*/
    /*}*/
    100%{
      -o-transform :  scale(1);
    }
  }
  @keyframes myrotate{
    0%{
      transform : scale(0.9);
    }
    /*50%{*/
      /*transform : scale(0.5);*/
    /*}*/
    100%{
      transform : scale(1);
    }
  }
</style>
