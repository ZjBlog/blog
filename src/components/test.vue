<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;" >
    <header-blog index='1'></header-blog>
    <div style="min-height:500px;">
        {{msg}}
        <img :src="url">
    </div>
    <vue-q-art :config="config" ref='vq'></vue-q-art>
    <a class='el-button el-button--warning' @click="dd" style="font: 400 13.3333px Arial;" >下 &nbsp;&nbsp;&nbsp;&nbsp;载</a>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import {uuid} from '../assets/uuid.js'
import VueQArt from 'vue-qart'
const hash = require('object-hash')
const ls = require('local-storage')
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: '',
      config: {
        value: window.location.href,
        imagePath: '../../static/images/logo.png',
        filter: 'color'
      }
    }
  },
  components: {
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
    let md5 = ''
    if (ls.get('md5')) {
      md5 = ls.get('md5')
    } else {
      md5 = hash.MD5(uuid())
      ls.set('md5', md5)
    }
    this.url = `https://www.gravatar.com/avatar/${md5}?s=200&d=monsterid`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
