import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './router'
// import Util from '../libs/util.js'

Vue.use(Router)

const RouterConfig = {
  routes: routers
}

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  // console.log('要转到'+to.name)
  //  console.log('拦截before')
  let apiAuth = sessionStorage.getItem('apiAuth')
  var title = to.meta.title || '卡宝管家'
  window.document.title = title
  if (!apiAuth && to.name !== 'login' && to.name !== 'settle' && to.name !== 'error-500' && to.name !== 'error-404') { // 如果不是注册，并且未登录，就跳转到登录页面
    next({
      name: 'login'
    })
    window.scrollTo(0, 0)
  } else if (apiAuth && to.name === 'login') {
    // 已经登录打开登录页面，回到主页
    next({
      // name: 'home'
    })
  } else {
    next()
  }
})
