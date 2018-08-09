import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main.vue'
import Detail from '@/components/detail.vue'
import Test from '@/components/test.vue'
Vue.use(Router)
const routes = [{
  path: '/index.html',
  component: Main
}, {
  path: '/index',
  component: Main
}, {
  path: '/',
  component: Main
}, {
  path: '/detail',
  component: Detail
}, {
  name: 'h',
  path: '/h',
  component: HelloWorld
}, {
  path: '/detail.html',
  component: Detail
}, {
  path: '/t',
  component: Test
}]
export default new Router({
  mode: 'history',
  // 解决部署服务器不是根域名的情况
  // base: '/blog/',
  routes: routes
})
