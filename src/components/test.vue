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
import VueQArt from 'vue-qart'
export default {
  name: 'test',
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
    HeaderBlog,
    FooterBlog,
    VueQArt
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
