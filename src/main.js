// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
// 在入口处引入了 就不需要再引入了
import Vue from 'vue'
import App from './App'
import router from './router'
import instance from './http/index'
// import './assets/debugger.js'
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
Vue.filter('time', function (value) {
  let date = new Date(value)
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
})
Vue.filter('desc', function (val) {
  let res = val.length > 48 ? val.substring(0, 47) + '...' : val
  return res
})
Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$http = instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
