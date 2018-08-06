<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;">
      <el-row class="header">
        <el-col :span="6">
          <div style="min-width:200px;height:100px;">
            <img src="../../static/images/code.png" width="100px;" height="100%" style="margin-top: -1px;margin-left:50%"/>
          </div>
        </el-col>
        <el-col :span="16" :offset="2">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#1fa0ff"
            text-color="#fff"
            active-text-color="#f7ba2a">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">我的工作台</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    <div style="min-height:500px;">
      <!-- <aplayer autoplay
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'http://7xnxtj.com1.z0.glb.clouddn.com/cjdn.mp3',
          pic: ''
        }" /> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Aplayer from 'vue-aplayer'
Aplayer.disableVersionBadge = true
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex2: '1'
    }
  },
  components: {
    Aplayer,
    Footer
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu--horizontal>.el-menu-item {
  height: 100px;
  line-height:100px;
}
.el-menu-item {
  font-size: 20px;
}
a{text-decoration:none}
ul{text-align:center;}
.header {
  background-color: #1fa0ff;
  height: 100px;
}
</style>
