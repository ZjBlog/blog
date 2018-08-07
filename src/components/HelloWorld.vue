<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="height:100px;">
      <img src="../../static/images/logo.png" height="100px" width="100px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
