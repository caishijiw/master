// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/**
 * 引入vant
 */
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
Vue.use(Vant);
/**
 *引入css
 */
import  "./assets/css/user.css"
import  '../static/font/iconfont.css'
/**
 *引入vue-awesome-swiper
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
/**
 * 引入moment
 */
import moment from 'moment'//导入文件
// require styles
import 'swiper/dist/css/swiper.css'
/**
 *引入vconsole
 */
import VConsole from 'vconsole'
var vConsole = new VConsole()
import axios from 'axios'
Vue.prototype.axios=axios;
import Vuex from 'vuex';
import store from './store/index'
//引入photo-swiper
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = {
  fullscreenEl: false
};
Vue.use(preview, options)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
