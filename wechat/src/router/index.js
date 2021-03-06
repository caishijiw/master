import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScenicIntroduction',
      // redirect:'/ConsultingComplaints',
      component: resolve => require(['@/pages/ScenicIntroduction'], resolve),
      meta: {
        title: '采石矶概况'
      }
    },
    {
      path: '/spotIntroduction',
      name: 'spotIntroduction',

      component: resolve => require(['@/pages/spotIntroduction'], resolve),
      meta: {
        title: '景点介绍'
      }
    },
    {
      path: '/AppropriateIndex',
      name: 'AppropriateIndex',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/AppropriateIndex'], resolve),
      meta: {
        title: '宜游指数'
      }
    },

    {
      path: '/attractionsDetails',
      name: 'attractionsDetails',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/attractionsDetails'], resolve),
      meta: {
        title: '景点详情'
      }
    },
    {
      path: '/guideRoute',
      name: 'guideRoute',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/guideRoute'], resolve),
      meta: {
        title: '导游路线'
      }
    },
    {
      path: '/guideTour',
      name: 'guideTour',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/guideTour'], resolve),
      meta: {
        title: '导游导览'
      }
    },
    {
      path: '/helpKey',
      name: 'helpKey',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/helpKey'], resolve),
      meta: {
        title: '一键求助'
      }
    },
    {
      path: '/parking',
      name: 'parking',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/parking'], resolve),
      meta: {
        title: '停车场'
      }
    },
    {
      path: '/ticketOrder',
      name: 'ticketOrder',
      // redirect: '/hometab',
      component: resolve => require(['@/pages/ticketOrder'], resolve),
      meta: {
        title: '订票'
      }
    },
    {
      path: '/maptest',
      name: 'maptest',
      component: resolve => require(['@/pages/maptest'], resolve),
      meta: {
        title: '景点介绍'
      }
    },
    {
      path: '/OverviewScenic',
      name: 'OverviewScenic',
      component: resolve => require(['@/pages/OverviewScenic'], resolve),
      meta: {
        title: '景点概览'
      }
    },
    {
      path: '/gzh_lvyougonglue',
      name: 'gzh_lvyougonglue',
      component: resolve => require(['@/pages/gzh_lvyougonglue'], resolve),
      meta: {
        title: '旅游攻略'
      }
    },
    {
      path: '/ConsultingComplaints',
      name: 'ConsultingComplaints',
      component: resolve => require(['@/pages/ConsultingComplaints'], resolve),
      meta: {
        title: '资讯投诉'
      }
    }
  ]
})
