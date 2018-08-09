<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;" >
    <header-blog index='1'></header-blog>
    <div style="min-height:500px;">
        {{msg}}
        <img :src="url">
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import {uuid} from '../assets/uuid.js'
const hash = require('object-hash')
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: ''
    }
  },
  components: {
    HeaderBlog,
    FooterBlog
  },
  methods: {
  },
  mounted () {
    this.url = 'https://www.gravatar.com/avatar/' + hash.MD5(uuid()) + '?s=200&d=monsterid'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
