<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;" >
    <header-blog index='2'></header-blog>
    <div style="min-height:500px;">
      <aplayer :autoplay="false"
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://tsn.baidu.com/text2audio?tex=%E4%BD%A0%E5%A5%BD%E7%99%BE%E5%BA%A6&tok=24.38f8ac864b48a6638923c040c5c8a522.2592000.1536564936.282335-11590498&cuid=987456456&ctp=1&lan=zh',
          pic: ''
        }" />
    </div>
    <vue-q-art :config="config" ref='vq'></vue-q-art>
    <a class='el-button el-button--warning' @click="dd" style="font: 400 13.3333px Arial;" >下 &nbsp;&nbsp;&nbsp;&nbsp;载</a>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import Aplayer from 'vue-aplayer'
import VueQArt from 'vue-qart'
Aplayer.disableVersionBadge = true
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex2: '1',
      config: {
        value: window.location.href,
        imagePath: '../../static/images/logo.png',
        filter: 'color'
      }
    }
  },
  components: {
    Aplayer,
    VueQArt,
    HeaderBlog,
    FooterBlog
  },
  methods: {
    dd (e) {
      console.info(e)
      const myCanvas = this.$refs.vq.$refs.qart.children[0]
      const type = 'image/png'
      console.info(myCanvas)
      e.target.href = myCanvas.toDataURL(type)
      e.target.download = 'qr.png'
    }
  },
  mounted () {
    console.info(this.$route.params.id)
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
