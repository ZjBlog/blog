// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import instance from './http/index'
import {
  Pagination,
  Message,
  Row,
  Col,
  Menu,
  MenuItem,
  Input,
  Switch,
  Button,
  Form,
  FormItem,
  Loading,
  MessageBox
} from 'element-ui'
import './assets/debugger.js'
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
Vue.filter('time', function (value) {
  let date = new Date(value)
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
})
Vue.filter('avatar', function (value) {
  return {'background': 'url(' + value + ') no-repeat left top'}
})
Vue.filter('desc', function (val) {
  let res = val.length > 48 ? val.substring(0, 47) + '...' : val
  return res
})
Vue.config.debug = true
Vue.config.productionTip = false
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading)
// MessageBox，Message,Notification这三个组件只能挂载Vue原型上调用
// 不能使用Vue.use()；否则项目运行会默认执行一次，即使没有使用它们
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http = instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
