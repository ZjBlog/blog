<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;">
    <header-blog index='1'></header-blog>
    <div style="min-height:500px;">
      <aplayer :autoplay="false"
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'http://7xnxtj.com1.z0.glb.clouddn.com/cjdn.mp3',
          pic: ''
        }" />
    </div>
    <footer-blog></footer-blog>
  </div>
</template>

<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import Aplayer from 'vue-aplayer'
Aplayer.disableVersionBadge = true
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex2: '1'
    }
  },
  components: {
    Aplayer,
    HeaderBlog,
    FooterBlog
  },
  methods: {
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
