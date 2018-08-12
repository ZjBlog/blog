<template>
  <div class="hello"  v-title data-title="NBB(No Bug Blog)-文章详情" style="background: #efefef;" >
    <header-blog index='2'></header-blog>
    <div class="btn-flex"  v-if="auth">
      <el-button type="info" round @click="edit">编辑</el-button>
      <el-button type="danger" round @click="del">删除</el-button>
    </div>
    <div style="min-height:200px;text-align:center">
      <h1>{{title}}</h1>
      <aplayer  autoplay  v-if="mp5show"
        :music="mp3"/>
     <vue-editor v-model="html"  :editorToolbar="customToolbar"></vue-editor>
     <!-- <vue-q-art :config="config" ref='vq'></vue-q-art> -->
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import Aplayer from 'vue-aplayer'
import VueQArt from 'vue-qart'
import configration from '../../static/configuration.json'
import { VueEditor } from 'vue2-editor'
const ls = require('local-storage')
const urlencode = require('urlencode')
Aplayer.disableVersionBadge = true
export default {
  name: 'detail',
  data () {
    return {
      customToolbar: [],
      id: '',
      mp3: {
      },
      title: 'No Bug Blog',
      html: 'No Bug Blog',
      desc: '',
      activeIndex2: '1',
      config: {
        value: window.location.href,
        imagePath: '../../static/images/logo.png',
        filter: 'color'
      },
      auth: '',
      mp5show: false
    }
  },
  components: {
    Aplayer,
    VueQArt,
    VueEditor,
    HeaderBlog,
    FooterBlog
  },
  methods: {
    init (id) {
      this.$http.get(`/api/v5/gists/${id}`).then(res => {
        let result = res.data
        let m = {}
        let vm = this
        for (let key in result.files) {
          vm.title = key
          vm.desc = result['description']
          vm.html = result.files[key].content
          break
        }
        m.title = '语音预览'
        m.pic = '../../static/images/logo.png'
        m.artist = '--NBB'
        m.src = 'http://tsn.baidu.com/text2audio?tex=' + urlencode(urlencode(this.desc)) + '&tok=' + configration.baidutoken + '&cuid=123456789' + '&ctp=1&lan=zh&spd=6'
        this.mp3 = m
        this.mp5show = true
      })
    },
    edit () {
      this.$router.push(`/create/${this.id}.html`)
    },
    del () {
      this.$confirm('由于码云Api问题,暂不支持删除, 是否去官网删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        lockScroll: false
      }).then(() => {
        window.open('https://gitee.com')
        // this.$http.delete(`/v5/gists/${this.id}`).then(res => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!',
        //     onClose: function () {
        //       window.location.href = '/'
        //     }
        //   })
        // }).catch(res => {
        //   console.info(res)
        // })
      }).catch(() => {
        console.info('取消删除')
      })
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
    this.auth = ls.get('isAuth')
  }
}
</script>
<style scoped>
.btn-flex {
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:flex-end;
  align-items: center;
  margin-top: 20px;
}
</style>
