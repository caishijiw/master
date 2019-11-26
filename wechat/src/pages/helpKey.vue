<template>
  <div class="wrap">
    <p class="page-title">请输入您遇到的问题 <i class="require-icon"></i></p>
    <div class="text-wrap">
      <textarea name="" id=""  v-model="problemDiscribe"></textarea>
    </div>
    <div class="form-item">
      <p class="page-title">您的姓名</p>
      <div class="input-wrap"><input type="text" v-model="reportorName"></div>
    </div>
    <div class="form-item">
      <p class="page-title">您的联系方式<i class="require-icon"></i></p>
      <div class="input-wrap"><input type="text" v-model="reportorPhone"></div>
    </div>




    <!--<div class="problem-item" v-for="(item,index) in problemArray" :key="index">-->
    <!--<span>{{item}}</span>-->
    <!--</div>-->
    <!--sos 报警-->
    <div class="sos-wrap">
      <span class="sos-discribe">如遇紧急情况,点击下方按钮联系我们</span>
      <img :src="sos" alt="" class="sos-trigger" :class="scale?'scale':''" @click="sosActive">
      <a class="emergency-call"  href="tel:2100142">紧急联系电话</a>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import {Toast} from 'vant';
  import moment from 'moment';
  import   fetch from '../api/public';
  Vue.use(Toast);
  export default {
    name: "helpKey",
    data() {
      return {
        gpsX: 0,
        gpsY: 0,
        address: '',
        problemDiscribe: '',
        reportorName:'',
        reportorPhone:'',
        scale: false,
        sos: 'static/images/sos.png',

      }
    },
    mounted() {
      document.title = '一键求助';
    },
    methods: {
      activeProblem(item, index) {
        this.problemDiscribe = item.text;
        this.problemArray.forEach((it, ind) => {
          if (index === ind) {
            it.active = true
          } else {
            it.active = false
          }
        })
      },
      sosActive() {
        let that = this;
        that.scale = true;
        setTimeout(function () {
          that.scale = false;
        }, 600);
        if (that.problemDiscribe === '' ) {
          Toast.fail('请输入您遇到的问题')
        } else {
          if(that.checkPhone(that.reportorPhone)){
            that.center()
          }else{
            Toast.fail('请输入您正确的手机号')
          }

        }




      },
      center() {
        let self = this;
        let mapObj = new AMap.Map("surrounding");
        mapObj.plugin("AMap.Geolocation", function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //显示定位按钮，默认：true
            buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          // geolocation.getCurrentPosition();
          geolocation.getCurrentPosition(function (status, result) {
            if(result.status ==0){
              Toast.fail('无法获取准确地理位置,请打开设备GPS定位服务。再重试!')
            }else{
              console.log(result, "result", '当前位置');
              self.gpsX = Number(result.position.lng);
              self.gpsY = Number(result.position.lat);
              self.address = result.formattedAddress;

                let parmas = {};
                let currentTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                parmas['address'] = self.address;
                parmas['info'] = self.problemDiscribe;
                parmas['gpsX'] = self.gpsX;
                parmas['gpsY'] = self.gpsY;
              parmas['reportorPhone'] =self.reportorPhone;
              parmas['reportorName'] =self.reportorName;
                parmas['emergencyTime'] = currentTime;
                fetch.post('/wechat/api/message', parmas).then(res => {
                  console.log(res)
                  if(res.status =='success'){
                    Toast.success('上报成功');
                    self.reportorPhone='';
                    self.reportorName='';
                    self.problemDiscribe=''
                  }else{
                    Toast.fail('上报失败')
                  }
                })

            }
          });
        });
      },
      /**
       * 手机号正则
       * */
      checkPhone(phone) {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(phone)) {
          return false;
        } else {
          return true;
        }
      },

    },


  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    /*height: 100%;*/
    padding: 0.4rem 0.4rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .page-title {
    width: 100%;
    height:1rem;
    font-size: 0.32rem;
    /*font-family:PingFangSC-regular;*/
    font-weight: 400;
    color: rgba(72, 72, 72, 1);
    line-height: 1rem;
  }

  .problem-item {
    height: 1.5rem;
    text-align: center;

  }

  .sos-wrap {
    width: 5.44rem;
    height: auto;
    text-align: center;
    margin: 1.6rem auto 0;
  }

  .sos-discribe {
    font-size: 0.32rem;

    font-weight: 400;
    color: rgba(146, 146, 146, 1);
    line-height: 0.44rem;
  }

  .sos-trigger {
    width: 5.0266rem;
    height: 5.0266rem;
  }

  .emergency-call {
    font-size: 0.32rem;
display: block;
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: rgba(146, 146, 146, 1);
    line-height: 0.44rem;
    margin-top: 0.1rem;
  }

  .swiper-container {
    width: 100%;
    height: 4.5rem;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper .swiper-slide {
    height: 1.06rem !important;
  }

  .slide-discribe {
    height: 1.06rem;
  }

  .slide-wrap {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .slide-wrap > div, .slide-discribe {
    height: 1.06rem;
    line-height: 1.06rem;
    border-radius: 0.053rem;
    font-size: 0.373rem;
    font-weight: 400;
    display: inline-block;
    background: rgba(239, 239, 239, 1);
    border-radius: 0.03rem;
    padding: 0 0.4rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  .slide-discribe.active {
    background: #B5E1F9;
    color: rgba(0, 93, 127, 1);
  }

  .sos-trigger.scale {
    -webkit-animation: myrotate 50s linear;
    -moz-animation: myrotate 50s linear;
    -ms-animation: myrotate 50s linear;
    -o-animation: myrotate 50s linear;
    animation: myrotate 50s linear;
  }
  .sos-trigger{

  }

  /*动画*/
  @-webkit-keyframes myrotate {
    0% {
      -webkit-transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }

  @-moz-keyframes myrotate {
    0% {
      -moz-transform: scale(0.9);
    }
    /*50%{*/
    /*-moz-transform : scale(0.5);*/
    /*}*/
    100% {
      -moz-transform: scale(1);
    }
  }

  @-ms-keyframes myrotate {
    0% {
      -ms-transform: scale(0.9);
    }
    /*50%{*/
    /*-ms-transform : scale(0.5);*/
    /*}*/
    100% {
      -ms-transform: scale(1);
    }
  }

  @-o-keyframes myrotate {
    0% {
      -o-transform: scale(0.9);
    }
    /*50%{*/
    /*-o-transform :  scale(0.5);*/
    /*}*/
    100% {
      -o-transform: scale(1);
    }
  }

  @keyframes myrotate {
    0% {
      transform: scale(0.9);
    }
    /*50%{*/
    /*transform : scale(0.5);*/
    /*}*/
    100% {
      transform: scale(1);
    }
  }
  .require-icon{
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    background: url("../assets/images/require.png") center no-repeat;
    background-size: 100% 100%;
  }
  .text-wrap{
    width: 100%;
    height: 4rem;
    margin-bottom: 0.3rem;
  }
  .text-wrap textarea{
    width: 100%;
    height: 4rem;
    border-radius: 4px;
    border: 1px solid rgba(203,206,210,1);
    resize: none;
    padding: 0.3rem 0.2rem 0.2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 0.45rem;
    font-size: 0.37rem;
    /* font-family: PingFangRegular; */
    font-weight: 400;
    color: #333333;
    -webkit-appearance: none;
  }
  .form-item{
    margin-bottom: 0.3rem;
  }
  .input-wrap input{
    height: 0.8rem;
    line-height: 0.8rem;
    width: 6rem;
    border: 1px solid rgba(203,206,210,1);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: none ;
    -moz-box-shadow: none ;
    box-shadow: none ;
    -webkit-appearance: none;
  }
</style>
