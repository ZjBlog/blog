<template>
  <div class="hello"  v-title data-title="标题内容" style="min-height:500px;">
    <aplayer autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://7xnxtj.com1.z0.glb.clouddn.com/cjdn.mp3',
        pic: ''
      }" />
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Aplayer,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
