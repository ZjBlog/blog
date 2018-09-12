<template>
    <header class="layout-header">
        <div class="layout-header-nav-wrapper">
            <ul class="layout-header-nav">
                <li  class="layout-header-nav-item" :class="index===1 ? 'curr1': ''">
                    <a href="/" :class="index===1 ? 'curr': ''">首&nbsp;&nbsp;页</a>
                </li>
                <li  class="layout-header-nav-item" :class="index===2 ? 'curr1': ''">
                    <a :class="$index===2 ? 'curr': ''" href="javacript:void(0);" @click="handleSelect('2')">文章详情</a>
                </li>
                <li  class="layout-header-nav-item" :class="index===3 ? 'curr1': ''">
                     <a :class="index===3 ? 'curr': ''"  href="javacript:void(0);" @click="handleSelect('3')">每天一记</a>
                </li>
                <li  class="layout-header-nav-item" :class="index===4 ? 'curr1': ''">
                  <a :class="index===4 ? 'curr': ''" href="/login.html">登录</a>
                </li>
                <li class="layout-header-nav-item-right">
                    <a href="/login.html" @click="handleSelect('4')" v-if="!auth">猿码集</a>
                    <a  href="/login.html" @click="handleSelect('5')" v-if="auth">欢迎您, ZJ</a>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
const ls = require('local-storage')
export default {
  name: 'headerblog',
  data () {
    return {
      auth: false
    }
  },
  mounted () {
    if (ls.get('isAuth')) {
      this.auth = true
    } else {
      this.auth = false
    }
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '2') {
        if (window.location.href.indexOf('detail') !== -1) {
          console.info('保持当前页面状态')
        } else {
          this.$router.push('/detail')
        }
      } else if (key === '1') {
        this.$router.push('/')
      } else if (key === '3') {
        this.$router.push('/create.html')
      } else if (key === '-1') {
        this.$router.push('/')
      } else if (key === '4' || key === '5') {
        console.info('..............')
        window.location.href = '/login.html'
      }
    }
  }
}
</script>
<style scoped>
    .layout-header {
        color: white;
    }
    .layout-header-nav-wrapper {
        background-color: #08c68a;
        width: 100%;
    }

    .layout-header-nav {
        height: 48px;
        margin: 0;
        padding: 0;
        display: block;
        list-style: none;
    }
    .layout-header-nav-item {
        float: left;
        width: 20%;
        height: 48px;
        margin: 0;
        text-align: center;
        line-height: 48px;
        vertical-align: middle;
    }

    .layout-header-nav-item:hover {
        background-color: #ffbb1c;
    }

    .layout-header-nav-item a {
        color: #FFFFFF;
        font-size: 16px;
        display: inline-block;
        width: 96px;
        height: 48px;
        text-decoration: none;
    }

    .layout-header-nav-item a:hover {
        background: url(../../static/images/hover.png) no-repeat;
        width:96px;
        height:54px;
    }
    .curr1 {
        background-color: #ffbb1c;
    }
    .curr {
        background: url(../../static/images/hover.png) no-repeat;
    }
    .layout-header-nav-item a.curr {
        background: url(../../static/images/hover.png) no-repeat;
        width:96px;
        height:54px;
    }

    .layout-header-nav-item-right{
        float:right;
        background: url(../../static/images/right-nav.png) no-repeat;
        width:20%;
        height:48px;
        text-align: left;
    }

    .layout-header-nav-item-right a{
        color: #FFFFFF;
        font-size: 16px;
        display: inline-block;
        line-height: 48px;
        margin-left: 15%;
        height:48px;
        text-decoration: none;
    }
</style>
