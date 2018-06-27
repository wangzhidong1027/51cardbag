// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import MyForm from './components/main-components/my-form'
// import { XInput, Group } from 'vux'

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

Vue.config.productionTip = false
// Vue.component('x-input', XInput)
// Vue.component('group', Group)
Vue.use(MintUI)
Vue.component('my-form', MyForm)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
