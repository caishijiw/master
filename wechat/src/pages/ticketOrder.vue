<template>
  <div class="wrap">
    <div class="order-date">
      <span class="date-discribe">预订时间</span>
      <div class="date-content" :class="showToday?'':'linhe'" @click="datePickerPopShowTrigger">
        <span>{{dateOrder|formmatterTimer}}</span>
        <i v-if="showToday">今天</i>
      </div>
      <!--日期弹窗-->
      <van-popup v-model="datePickerPopShow" position="bottom" :overlay="overlay">
        <van-datetime-picker v-model="dateOrder" type="date" :min-date="minDate"
                             :formatter="formatters" @confirm="orderDateConfirm" @cancel="orderDateCancel"
        />
      </van-popup>
    </div>
    <!--订票-->
    <div class="order-ticket">
      <span class="item-title">门票</span>
      <div class="order-item">
        <span class="price">¥50</span>
        <span class="ticket-type">成人票</span>
        <div class="ticket-number-wrap"><span class="minus" @click="ticketNumberMinus"></span>
          <i>{{ticketNumberAdult}}</i> <span class="plus" @click="ticketNumberAdd"></span></div>
      </div>
      <div class="order-item">
        <span class="price">¥50</span>
        <span class="ticket-type">儿童票</span>
        <div class="ticket-number-wrap"><span class="minus" @click="ticketNumberChildMinus"></span> <i>{{ticketNumberChild}}</i>
          <span class="plus" @click="ticketNumberChildAdd"></span></div>
      </div>

    </div>
    <!--联系人-->
    <div class="order-ticket">
      <span class="item-title">联系人</span>
      <div class="form">
        <div class="form-item" style="background: #ee0a24">
          <span>姓名</span>
          <div class="input-wrap">
            <input type="text" v-model="form.name" placeholder="请输入姓名">
          </div>
        </div>
        <div class="form-item">
          <span>手机号</span>
          <div class="input-wrap">
            <input type="text" v-model="form.phone" placeholder="请输入手机号">
          </div>
        </div>
        <div class="form-item">
          <span>身份证号</span>
          <div class="input-wrap">
            <input type="text" v-model="form.phone" placeholder="请输入证件号">
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
  import moment from 'moment';
  import {Toast} from 'vant';

  export default {
    name: "ticketOrder",
    data() {
      return {
        overlay: true,
        datePickerPopShow: false,
        minDate: new Date(),
        dateOrder: new Date(),
        currentDayStamp: 0,
        showToday: true,
        ticketNumberAdult: 1,
        ticketNumberChild: 1,
        form: {
          name: '',
          phone: ''
        }

      }
    },
    filters: {
      formmatterTimer: function (value) {
        return moment(value).format("YYYY-MM-DD")
      }
    },
    mounted() {
      this.currentDayStamp = Date.parse(new Date());
      console.log(this.currentDayStamp, 'mindate');

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
      datePickerPopShowTrigger() {
        this.datePickerPopShow = true;
      },
      orderDateCancel() {
        this.datePickerPopShow = false;
      },
      orderDateConfirm(value) {
        console.log(Date.parse(value));
        if (Date.parse(value) == this.currentDayStamp) {
          this.showToday = true;
        } else {
          this.showToday = false;
        }
        this.dateOrder = value;
        this.datePickerPopShow = false;
      },
      ticketNumberMinus() {
        if (this.ticketNumberAdult > 1) {
          this.ticketNumberAdult--
        }
        // }else {
        //   Toast.fail('门票数量必须>=1')
        // }

      },
      ticketNumberAdd() {
        this.ticketNumberAdult++
      },
      ticketNumberChildMinus() {
        if (this.ticketNumberChild > 0) {
          this.ticketNumberChild--
        }
      },
      ticketNumberChildAdd() {
        this.ticketNumberChild++

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
    padding: 0 0.41rem 0 0.45rem;
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

  .order-ticket {
    height: 4.64rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.053rem;
    margin-top: 0.213rem;
    padding: 0.45rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .item-title {
    display: block;
    font-size: 0.426rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(146, 146, 146, 1);
    line-height: 0.32rem;
    margin-bottom: 0.4rem;
  }

  .order-item {
    width: 100%;
    height: 1.5rem;
  }

  .order-item .price, .order-item .ticket-type {
    display: inline-block;
    width: 22%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.37rem;
    font-family: PingFangSC-regular;
    font-weight: 400;
    color: rgba(70, 70, 70, 1);
    text-align: center;

  }

  .ticket-number-wrap {
    display: inline-block;
    width: 3.54rem;
    height: 1.5rem;

    float: right;
    overflow: hidden;
    text-align: center;
    position: relative;
  }

  .ticket-number-wrap span {
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;

  }

  .ticket-number-wrap .minus {
    background: url("../assets/images/minus.png") center no-repeat;
    background-size: 0.4rem 0.4rem;
    left: 0;
  }

  .ticket-number-wrap .plus {
    background: url("../assets/images/add.png") center no-repeat;
    background-size: 0.4rem 0.4rem;
    right: 0;
  }

  .ticket-number-wrap i {
    display: inline-block;
    width: 1.173rem;
    height: 0.8rem;
    background: rgba(244, 244, 244, 1);
    line-height: 0.8rem;
    margin-top: 0.35rem;
    font-style: normal;
    font-size: 0.53rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(70, 70, 70, 1);
    text-align: center;

  }

  .form-item {
    height: 1rem;
    width: 100%;

    padding-top: 0.2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  .form-item span {
    width: 1.5rem;
    font-size:0.373rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:rgba(70,70,70,1);
    line-height:0.5333rem;
    display: inline-block;
    margin-right: 1rem;
  }
  .form-item .input-wrap{
    height: 0.7rem;
    width: 5.5rem;
    display: inline-block;
    border-bottom: 1px solid #DADADA;
  }
</style>
