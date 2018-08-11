<template>
  <div class="hello"  v-title data-title="标题内容" style="background: #efefef;" >
    <header-blog index='2'></header-blog>
    <el-row :gutter="20">
      <el-col :span="3" :offset="17">
        <el-button type="info" round @click="edit">编辑</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="danger" round @click="del">删除</el-button>
      </el-col>
    </el-row>
    <div style="min-height:200px;text-align:center">
      <h1>{{title}}</h1>
      <aplayer :autoplay="false"
        :music="{
          title: '简介',
          artist: '',
          src: 'https://tsn.baidu.com/text2audio?tex=%E4%BD%A0%E5%A5%BD%E7%99%BE%E5%BA%A6&tok=24.38f8ac864b48a6638923c040c5c8a522.2592000.1536564936.282335-11590498&cuid=987456456&ctp=1&lan=zh',
          pic: '../../static/images/logo.png'
        }" />
     <div v-html="html"></div>
     <vue-q-art :config="config" ref='vq'></vue-q-art>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import Aplayer from 'vue-aplayer'
import VueQArt from 'vue-qart'
Aplayer.disableVersionBadge = true
export default {
  name: 'detail',
  data () {
    return {
      id: '',
      mp3: {
        title: '',
        artist: 'NBB',
        src: '',
        pic: '../../static/images/logo.png'
      },
      title: '测试',
      html: 'ddd',
      desc: '',
      msg: 'Welcome to Your Vue.js App',
      activeIndex2: '1',
      config: {
        value: window.location.href,
        imagePath: '../../static/images/logo.png',
        filter: 'color'
      }
    }
  },
  components: {
    Aplayer,
    VueQArt,
    HeaderBlog,
    FooterBlog
  },
  methods: {
    init (id) {
      this.$http.get(`/api/v5/gists/${id}`).then(res => {
        let result = res.data
        let vm = this
        for (let key in result.files) {
          vm.title = key
          vm.desc = result['description']
          vm.html = result.files[key].content
          break
        }
      })
    },
    edit () {
    },
    del () {
    }
  },
  mounted () {
    if (!this.$route.params.id) {
      this.$message({
        message: '找篇笔记看看吧.',
        showClose: true,
        type: 'success',
        center: true,
        onClose: function () {
          window.location.href = '/'
        },
        duration: 2000
      })
    } else {
      this.id = this.$route.params.id
      this.init(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu--horizontal>.el-menu-item {
  height: 100px;
  line-height:100px;
}
.el-menu-item {
  font-size: 20px;
}
a{text-decoration:none}
ul{text-align:center;}
.header {
  background-color: #1fa0ff;
  height: 100px;
}

</style>
