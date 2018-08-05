<template>
  <div class="hello"  v-title data-title="标题内容">
    <aplayer autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://m10.music.126.net/20180606174657/5e260c2beb8ddfc3c1cc78398e5fbe85/ymusic/ee56/313f/cae3/f7ba25e37921ac14ea5d61377d88ef3a.mp3',
        pic: ''
      }"  />
  </div>
</template>

<script>
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
    Aplayer
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
