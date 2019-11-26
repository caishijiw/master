<template>
  <div class="wrap">
    <div class="appropriate-wrap">
      <div class="temperature">
        <div class="left-content">
          <mark>{{weatherObj.weather}}</mark>
          <mark>{{weatherObj.tempatrue}}</mark>
          ℃
        </div>
        <div class="right-content">
          <span class="date">{{date}}&nbsp;{{wekday|transformWekday}}</span>
          <span style="line-height: 0.4rem;">{{lifeStyleObj.discribe}}</span>
        </div>

      </div>
      <!--指数-->
      <div class="index-wrap">
        <div class="index-item">
          <div class="number">{{airQuality.quality}}</div>
          空气质量
        </div>
        <div class="index-item">
          <div class="number">{{airQuality.pm25}}</div>
          PM2.5
        </div>
        <div class="index-item">
          <div class="number">{{weatherObj.shidu}}%</div>
          湿度
        </div>
        <div class="index-item">
          <div class="number">{{weatherObj.fengli}}级</div>
          风力
        </div>
        <div class="index-item">
          <div class="number">{{lifeStyleObj.ziwaixian}}</div>
          紫外线指数
        </div>
        <div class="index-item">
          <div class="number">{{lifeStyleObj.ganmaozhishu}}</div>
          感冒指数
        </div>


      </div>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import http from '../api/public'
  import moment from 'moment'//导入文件
  export default {
    name: "AppropriateIndex",
    data() {
      return {
        weatherObj: {},
        lifeStyleObj: {},
        date: '',
        wekday: '',
        airQuality: {}
      }
    },
    mounted() {
      this.date = moment(new Date()).format('YYYY-MM-DD');
      this.wekday = moment(new Date()).format("E");
      this.getBasicWeather();
      this.getLifeStyle();
      this.getAir();
    },
    filters: {
      transformWekday: function (value) {
        switch (value) {
          case  '1':
            return "星期一";
            break
          case  '2':
            return "星期二";
            break
          case  '3':
            return "星期三";
            break
          case  '4':
            return "星期四";
            break
          case  '5':
            return "星期五";
            break
          case  '6':
            return "星期六";
            break
          default  :
            return "星期日";
        }
      },
      dateFormatting(value) {
        return moment(parseInt(value)).format('YYYY-MM-DD HH:mm')
      },
      endDateFormatting(value) {
        return moment(parseInt(value)).format('HH:mm')
      }
    },
    methods: {

      getBasicWeather() {

        this.$axios.get('https://free-api.heweather.net/s6/weather/now?location=马鞍山&key=de308b2690c54b01a0c3ebbd56600317')
          .then((response) => {
            let that = this;
            let nowWeatherObj = response.data.HeWeather6[0];//请求的返回体
            let weatherJson = {};
            weatherJson['tempatrue'] = nowWeatherObj.now.tmp;
            weatherJson['shidu'] = nowWeatherObj.now.hum;
            weatherJson['fengli'] = nowWeatherObj.now.wind_sc;
            weatherJson['weather'] = nowWeatherObj.now.cond_txt
            that.weatherObj = weatherJson;
          })
          .catch((error) => {
            console.log(error);//异常
          });
      },
      getLifeStyle() {

        this.$axios.get('https://free-api.heweather.net/s6/weather/lifestyle?location=马鞍山&key=de308b2690c54b01a0c3ebbd56600317')
          .then((response) => {
            let that = this;
            let lifeStyleJsonObj = response.data.HeWeather6[0];//请求的返回体
            let lifeStyleJson = {};
            lifeStyleJson['indexe'] = lifeStyleJsonObj.lifestyle[4].brf;
            lifeStyleJson['discribe'] = lifeStyleJsonObj.lifestyle[4].txt;
            lifeStyleJson['ziwaixian'] = lifeStyleJsonObj.lifestyle[5].brf;
            lifeStyleJson['ganmaozhishu'] = lifeStyleJsonObj.lifestyle[2].brf
            that.lifeStyleObj = lifeStyleJson
          })
          .catch((error) => {
            console.log(error);//异常
          });
      },
      getAir() {
        this.$axios.get('https://free-api.heweather.net/s6/air/now?location=马鞍山&key=de308b2690c54b01a0c3ebbd56600317')
          .then((response) => {
            let airQualityJsonObj = response.data.HeWeather6[0].air_now_city;//请求的返回体
            let airQualityJson = {};
            airQualityJson['pm25'] = airQualityJsonObj.pm25
            airQualityJson['quality'] = airQualityJsonObj.qlty
            this.airQuality =airQualityJson;
          })

      },

    }
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
    width: 100%;
    height: 2.24rem;
    padding-left: 0.8rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
  }

  .temperature .left-content {
    /*width: 4rem;*/
    height: 100%;
    vertical-align: bottom;
    font-size: 0.373rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    float: left;
    /*margin-right: 0.3rem;*/
  }

  .temperature .left-content mark {
    background: transparent;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 2.24rem;
    font-size: 0.9rem;

  }

  .temperature .left-content mark:nth-child(2) {
    font-size: 0.5rem;
  }

  .temperature .right-content {
    float: right;
    width: 5.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.6rem;
    padding-top: 0.36rem;
    padding-right: 0.4rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  .temperature .right-content span {
    display: block;
    line-height: 0.6rem;
  }

  .index-wrap {
    width: 9rem;
    height: auto;
    margin: 1rem auto 0;
  }

  .index-item {
    width: 50%;
    text-align: center;
    height: 1.46rem;
    margin-bottom: 0.66rem;
    font-size: 0.373rem;

    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 0.5rem;
  }

  .index-item .number {
    font-size: 0.6rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 0.893rem;
  }

  .index-item:nth-child(odd) {
    float: left;

  }

  .index-item:nth-child(even) {
    float: right;
  }

</style>
