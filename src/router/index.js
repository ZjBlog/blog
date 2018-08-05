import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main.vue'
import Detail from '@/components/detail.vue'
Vue.use(Router)
const routes = [{
  path: '/index.html',
  component: Main
}, {
  path: '/index.htm',
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
  path: '/h',
  component: HelloWorld
}]
export default new Router({
  mode: 'history',
  // 解决部署服务器不是根域名的情况
  base: '/blog/',
  routes: routes
})
