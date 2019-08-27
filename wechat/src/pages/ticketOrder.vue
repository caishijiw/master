<template>
  <div class="wrap">
    <div class="order-date">
      <span class="date-discribe">预订时间</span>
      <div class="date-content"  :class="showToday?'':'linhe'" @click="datePickerPopShowTrigger">
        <span >{{dateOrder|formmatterTimer}}</span>
        <i v-if="showToday">今天</i>
      </div>
      <!--日期弹窗-->
      <van-popup v-model="datePickerPopShow"  position="bottom" :overlay="overlay">
        <van-datetime-picker v-model="dateOrder" type="date" :min-date="minDate"
                             :formatter="formatters" @confirm="orderDateConfirm" @cancel="orderDateCancel"
        />

      </van-popup>


    </div>


  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "ticketOrder",
    data() {
      return {
        overlay:true,
        datePickerPopShow: false,
        minDate: new Date(),
        dateOrder: new Date(),
        currentDayStamp:0,
        showToday:true

      }
    },
    filters: {
      formmatterTimer: function (value) {
        return moment(value).format("YYYY-MM-DD")
      }
    },
    mounted(){
      this.currentDayStamp=Date.parse(new Date());
      console.log( this.currentDayStamp ,'mindate');

    },
    methods: {
      formatters(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return `${value}日`;
      },
      datePickerPopShowTrigger(){
        this.datePickerPopShow=true;
      },
      orderDateCancel(){
        this.datePickerPopShow=false;
      },
      orderDateConfirm(value){
        console.log(Date.parse(value));
        if(Date.parse(value)==this.currentDayStamp){
          this.showToday=true;
        }else{
          this.showToday=false;
        }
        this.dateOrder=value;
        this.datePickerPopShow=false;
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, rgba(89, 193, 226, 1) 0%, rgba(45, 141, 193, 1) 100%);
    padding: 0.8rem 0.41rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .order-date {
    width: 100%;
    height: 1.54rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.03rem;
    padding: 0 0.41rem 0 1.2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .order-date .date-discribe {
    display: inline-block;
    height: 100%;
    line-height: 1.54rem;
    width: 1.706rem;
    font-size: 0.426rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(146, 146, 146, 1);

  }

  .date-content {
    width: 2.666rem;
    height: 100%;
    float: right;
    padding-top: 0.2666rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }

  .date-content span {
    display: block;
    font-size: 0.45rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(32, 139, 220, 1);
    line-height: 0.6666rem;
  }

  .date-content.linhe {
    padding-top: 0;
  }

  .date-content.linhe span {
    line-height: 1.54rem;
  }

  .date-content i {
    font-size: 0.32rem;
    font-family: PingFangSC-regular;
    font-weight: 500;
    color: rgba(146, 146, 146, 1);
    font-style: normal;
  }
</style>
