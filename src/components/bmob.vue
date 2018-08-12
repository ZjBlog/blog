<template>
  <div  style="background: #efefef;">
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
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
      textarea: ''
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
</style>
