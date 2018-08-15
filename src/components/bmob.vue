<template>
  <div  style="background: #efefef;max-width:1200px;">
      <div v-for="(item,index) in items" :key="index">
          <div class="xwcms" :style="item.avatar | avatar"></div>
          <div v-text="item.moment"></div>
      </div>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import '../assets/Bmob-1.6.2.min.js'
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [{'name': 'dddd', 'avatar': 'https://www.gravatar.com/avatar/a63c9ca1fbe7a75217ad129bdb09304b?s=200&d=monsterid', 'moment': 'ddd'}]
    }
  },
  components: {
    HeaderBlog,
    FooterBlog
  },
  methods: {
  },
  mounted () {
    window.Bmob.initialize('f8328d2a0f60bcdf593b4599d77acc12', '42f9db0aa62e6f2bd7850d324b0c473d')
    const query = window.Bmob.Query('Blog')
    query.equalTo('blogId', '==', 'ghnvbkojl986fr50q1zci33')
    query.find().then(res => {
      console.info(res)
    }).catch(err => {
      console.info(err)
    })
    // query.set('blogId', '博客id')
    // query.set('moment', '评论')
    // query.set('avatar', 'img')
    // query.save().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xwcms {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    /* background: no-repeat url("../../static/images/123.png") left top; */
    -webkit-background-size: 200px 200px;
    -moz-background-size: 200px 200px;
    background-size: 200px 200px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    -webkit-transition: -webkit-transform 2s ease-out;
    -moz-transition: -moz-transform 2s ease-out;
    -o-transition: -o-transform 2s ease-out;
    -ms-transition: -ms-transform 2s ease-out;
  }
  .xwcms:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
</style>
