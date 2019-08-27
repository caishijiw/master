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
Vue.use(Vant);
/**
 *引入css
 */
import  "./assets/css/user.css"
import  './assets/font/fontStyle.css'
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
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
