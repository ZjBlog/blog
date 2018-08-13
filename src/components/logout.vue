<template>
  <div class="hello" style="background: #efefef;" >
    <header-blog index='1'></header-blog>
    <div style="min-height:350px;text-align:center;">
        <h1 style="margin-top:50px;">{{msg}}</h1>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
const FooterBlog = () => import('@/components/footerblog')
const HeaderBlog = () => import('@/components/headerblog')
const ls = require('local-storage')
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Hope to see you again. NBB',
      activeIndex2: '1'
    }
  },
  components: {
    HeaderBlog,
    FooterBlog
  },
  methods: {
    open2 () {
      if (!ls.get('isAuth')) {
        this.open7()
        return false
      }
      this.$confirm('确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ls.remove('isAuth')
        window.location.href = '/'
      }).catch(() => {
        window.location.href = '/'
      })
    },
    open7 () {
      this.$confirm('你还没有登录,去登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$router.push('login')
      }).catch(() => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.open2()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
