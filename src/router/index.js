import Vue from 'vue'
import Router from 'vue-router'
import appHome from '../components/pages/home/home'
import appMine from '../components/pages/mine/mine'
import appClassify from '../components/pages/classify/classify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: appHome
    },
    {
      path: '/mine',
      name: 'mine',
      component: appMine
    },
    {
      path: '/classify',
      name: 'classify',
      component: appClassify
    }
  ]
})
