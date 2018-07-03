// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index.js'
import Axios from 'axios'
import qs from 'qs'

import global_ from './components/global/global'

import { Group, base64, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'

// 全局注册vux组件
Vue.component('group', Group)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false;

// 获取屏幕宽度设置font-size
(function (doc, win) {
  var docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

// 解决点击延迟
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

// 定义axios
const service = Axios.create({
  // baseURL: 'http://dev.nzb.yunzujia.com.cn/',
  // baseURL: 'http://localhost:8080/',
  timeout: 20000 // request timeout
})
service.interceptors.request.use(function (config) {
  // console.log('请求开始')
  config.headers['Token'] = sessionStorage.getItem('apiAuth')
  config.headers['platform'] = sessionStorage.getItem('platform')
  return config
})
// 响应拦截
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
service.interceptors.response.use(
  response => {
    // console.log('response:' + response.status)
    // response.status = 401;
    // console.log('response:' + response.status)
    if (response) {
      switch (response.status) {
        case 401:
          // 这里写清除token的代码
          sessionStorage.clear()
          // router.replace({
          //   path: '/login'
          //   // query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
          // })
      }
    }
    return response
  },
  error => {
    // console.log('error123:'+ error.response.status);
    if (error.response) {
      // 只要报错，统一跳转到500
      // 这里写清除token的代码
      sessionStorage.clear()
      // router.replace({
      //   path: '/500'
      //   // query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
      // })
      // switch (error.response.status) {
      //     case 500:
      //         // 这里写清除token的代码
      //         sessionStorage.clear();
      //         router.replace({
      //             path: '/500'
      //             // query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
      //         });
      // }
    }
    return Promise.reject(error.response.data)
  })
// 响应拦截结束

// 全局设置
Vue.prototype.$axios = service
Vue.prototype.$qs = qs
Vue.prototype.$base64 = base64
Vue.prototype.$GLOBAL = global_

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
