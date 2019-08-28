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
        <span class="price">¥25</span>
        <span class="ticket-type">儿童票</span>
        <div class="ticket-number-wrap"><span class="minus" @click="ticketNumberChildMinus"></span> <i>{{ticketNumberChild}}</i>
          <span class="plus" @click="ticketNumberChildAdd"></span></div>
      </div>

    </div>
    <!--联系人-->
    <div class="order-ticket">
      <span class="item-title">联系人</span>
      <div class="form">
        <div class="form-item" >
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
            <input type="text" v-model="form.IdCard" placeholder="请输入证件号">
          </div>
        </div>

      </div>

    </div>

<!--footer-->
    <div class="footer-wrap">
总价 <i>¥</i><mark>{{orderPrice}}</mark>
      <button @click="orderNow">立即购买</button>
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
          phone: '',
          IdCard:''
        },
        orderPrice:100

      }
    },
    filters: {
      formmatterTimer: function (value) {
        return moment(value).format("YYYY-MM-DD")
      }
    },
    mounted() {
      this.currentDayStamp = Date.parse(new Date());
      // console.log(this.currentDayStamp, 'mindate');
      document.title='在线购票'

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
          this.orderPrice=this.ticketNumberAdult*50+this.ticketNumberChild*25
        }


        // }else {
        //   Toast.fail('门票数量必须>=1')
        // }

      },
      ticketNumberAdd() {
        this.ticketNumberAdult++;
        this.orderPrice=this.ticketNumberAdult*50+this.ticketNumberChild*25;
      },
      ticketNumberChildMinus() {
        if (this.ticketNumberChild > 0) {
          this.ticketNumberChild--
          this.orderPrice=this.ticketNumberAdult*50+this.ticketNumberChild*25
        }
      },
      ticketNumberChildAdd() {
        this.ticketNumberChild++
        this.orderPrice=this.ticketNumberAdult*50+this.ticketNumberChild*25
      },
      orderNow(){
        let parmas=this.form;
        if(parmas.name!=="" && parmas.phone!==""&& parmas.IdCard!==''){
           if(this.checkPhone(parmas.phone)&& this.testid(parmas.IdCard) ) {
             Toast.success('成功')
           }
        }else{
          Toast.fail('联系人信息不完整')
        }
      },
      /**
       * 手机正则验证
       */
      checkPhone(value){
        var phone = value;
        if(!(/^1[3456789]\d{9}$/.test(phone))){
          Toast.fail("手机号码有误，请重填");
          return false;
        }else{
          return true;
        }
      },
      /**
       * 身份证较验
       */
 testid(id) {
        var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(idcardReg.test(id)) {
          return true
        }else{
          Toast.fail("证件号有误，请重填");
          return false;

        }

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
    position: relative;
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
    background: url("../../static/images/minus.png") center no-repeat;
    background-size: 0.4rem 0.4rem;
    left: 0;
  }

  .ticket-number-wrap .plus {
    background: url("../../static/images/add.png") center no-repeat;
    background-size: 0.4rem 0.4rem;
    right: 0;
  }

  .ticket-number-wrap i {
    display: inline-block;
    width: 1.173rem;
    height: 0.6rem;
    background: rgba(244, 244, 244, 1);
    line-height: 0.65rem;
    margin-top: 0.48rem;
    font-style: normal;
    font-size: 0.5rem;
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
    line-height: 0.6rem;
    width: 5.5rem;
    display: inline-block;
    border-bottom: 1px solid #DADADA;
  }
  .form-item .input-wrap input{
    outline: none;
    border: none;
    font-size: 0.32rem;
    text-indent: 10px;
  }
  .footer-wrap{
    width:100%;
    height:1.33rem;
    background:rgba(255,255,255,1);
    box-shadow:0px -0.03rem 0.16rem 0px rgba(0,0,0,0.05);
    position: fixed;
    bottom: 0;
    left: 0;
    line-height: 1.33rem;
    font-size:0.32rem;
    font-family:PingFangSC-regular;
    font-weight:400;
    color:#464646;
    padding-left: 0.44rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    letter-spacing: 2px;

  }
  .footer-wrap i{
    font-size:0.36rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(224,104,119,1);
font-style: normal;
  }
  .footer-wrap mark{
    font-size:0.5rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(224,104,119,1);
    background: transparent;
  }
  .footer-wrap button{
    width:3.4666rem;
    height:100%;
    background:linear-gradient(180deg,rgba(251,210,73,1) 0%,rgba(245,166,35,1) 100%);
    font-size:0.48rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    float: right;
    outline: none;
    border: none;
    letter-spacing: 1px;

  }
  ::-webkit-input-placeholder {
    color:rgba(218,218,218,1);
  }
  :-moz-placeholder {/* Firefox 18- */
    color:rgba(218,218,218,1);
  }
  ::-moz-placeholder{/* Firefox 19+ */
    color:rgba(218,218,218,1);
  }
  :-ms-input-placeholder {
    color:rgba(218,218,218,1);
  }

</style>
