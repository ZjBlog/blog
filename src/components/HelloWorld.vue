<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-q-art :config="config"></vue-q-art>
  </div>
</template>

<script>
import VueQArt from 'vue-qart'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1',
      config: {
        value: 'https://www.baidu.com',
        imagePath: '../../static/images/logo.png',
        filter: 'color'
      }
    }
  },
  components: {
    VueQArt
  }
}
</script>
