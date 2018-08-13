<template>
  <div class="hello"  v-title data-title="NBB(No Bug Blog)-文章详情" style="background: #efefef;" id="detail">
    <header-blog index='2'></header-blog>
    <div class="btn-flex"  v-if="auth" style="max-width:1200px;margin:0 auto;">
      <el-button type="info" round @click="edit">编辑</el-button>
      <el-button type="danger" round @click="del" style="margin-right:20px;">删除</el-button>
    </div>
    <div style="min-height:655px;text-align:center;max-width:1200px;margin:0 auto;">
      <h1>{{title}}</h1>
      <aplayer  autoplay  v-if="mp5show"
        :music="mp3"/>
     <vue-editor v-model="html"  :editorToolbar="customToolbar"></vue-editor>
     <!-- <vue-q-art :config="config" ref='vq'></vue-q-art> -->
    <el-input type="textarea" :rows="2" placeholder="评论一下吧" v-model="textarea"></el-input>
    <!-- <el-row class="er">
      <el-col :span="3" :offset="16">
        <p style="line-height:10px;">还可以输入<span style="color:#409EFF;">{{count}}</span>字</p>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="primary" round @click="comment">提&nbsp;&nbsp;交</el-button>
      </el-col>
    </el-row> -->
    <div class="er1" >
      <p style="line-height:10px;margin-right:50px;">还可以输入<span style="color:#409EFF;">{{count}}</span>字</p>
      <el-button type="primary" style="margin-right:20px;" round @click="comment">提&nbsp;&nbsp;交</el-button>
    </div>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import configration from '../../static/configuration.json'
import { VueEditor } from 'vue2-editor'
import '../assets/Bmob-1.6.2.min.js'
import {uuid} from '../assets/uuid.js'
const Aplayer = () => import('vue-aplayer')
const FooterBlog = () => import('@/components/footerblog')
const HeaderBlog = () => import('@/components/headerblog')
const hash = require('object-hash')
const ls = require('local-storage')
const urlencode = require('urlencode')
Aplayer.disableVersionBadge = true
export default {
  name: 'detail',
  data () {
    return {
      textarea: '',
      customToolbar: [],
      id: '',
      mp3: {
      },
      title: 'No Bug Blog',
      html: 'No Bug Blog',
      desc: '',
      activeIndex2: '1',
      auth: '',
      mp5show: false
    }
  },
  components: {
    Aplayer,
    VueEditor,
    HeaderBlog,
    FooterBlog
  },
  computed: {
    count () {
      if (this.textarea) {
        return 200 - this.textarea.length
      } else {
        return 200
      }
    }
  },
  methods: {
    comment () {
      if (!this.textarea) {
        this.$message.error('请输入评论')
      } else {
        let md5 = ''
        if (ls.get('md5')) {
          md5 = ls.get('md5')
        } else {
          md5 = hash.MD5(uuid())
          ls.set('md5', md5)
        }
        let url = `https://www.gravatar.com/avatar/${md5}?s=200&d=monsterid`
        const query = window.Bmob.Query('Blog')
        query.set('blogId', this.id)
        query.set('moment', this.textarea)
        query.set('avatar', url)
        query.save().then(res => {
          this.textarea = ''
          this.$message.success('提交成功')
        }).catch(err => {
          console.log(err)
        })
      }
    },
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
    window.Bmob.initialize(configration.bmobid, configration.bmobkey)
  }
}
</script>
<style>
#detail .ql-toolbar {
  display: none;
}
</style>
<style scoped>
.btn-flex {
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:flex-end;
  align-items: center;
  margin-top: 20px;
}
.er1 {
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:flex-end;
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius:10px;
  margin-top: 10px;
  height: 42px;
  margin-bottom: 10px;
}
</style>
