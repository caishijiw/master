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
import  './assets/font/fontStyle.css'
import  './assets/font/iconfont.css'
/**
 *引入vue-awesome-swiper
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
// require styles
import 'swiper/dist/css/swiper.css'
/**
 *引入vconsole
 */
import VConsole from 'vconsole'
var vConsole = new VConsole()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
