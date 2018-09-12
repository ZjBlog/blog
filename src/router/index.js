import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/main.vue')
const Detail = () => import('@/components/detail.vue')
const Test = () => import('@/components/test.vue')
const Create = () => import('@/components/create.vue')
const Logout = () => import('@/components/logout.vue')
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/components/login')
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
  path: '/detail/:id.html',
  component: Detail
}, {
  path: '/detail',
  component: Detail
}, {
  path: '/create',
  component: Create
}, {
  path: '/create/:id.html',
  component: Create
}, {
  path: '/create.html',
  component: Create
}, {
  path: '/logout',
  component: Logout
}, {
  path: '/logout.html',
  component: Logout
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
}, {
  path: '/login.html',
  component: Login
}]
export default new Router({
  mode: 'history',
  // 解决部署服务器不是根域名的情况
  // base: '/blog/',
  routes: routes
})
