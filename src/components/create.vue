<template>
  <div class="hello"  v-title data-title="猿码集-好记性不如烂笔头" style="background: #efefef;" >
    <header-blog :index='3'></header-blog>
    <div style="max-width:1200px;width:100%;margin:0 auto;text-align:center">
        <el-row style="margin-top:20px;">
          <el-col :span="8" :offset="8"><el-input placeholder="请输入标题" v-model="title" :maxlength="50" clearable> </el-input></el-col>
        </el-row>
        <el-row style="margin-top:20px;">
         <el-col :span="8" :offset="8"><el-input type="textarea" :rows="2" placeholder="请输入简介" v-model="description" :maxlength="240"> </el-input></el-col>
        </el-row>
        <el-row style="margin-top:20px;">
         <el-col :span="4" :offset="14">
          <el-switch
            v-model="pub"
            active-text="公开"
            inactive-text="私有">
          </el-switch>
         </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
        <vue-editor v-model="content" placeholder="开始写文章吧"></vue-editor>
        </el-row>
        <el-button type="primary" style="margin-top:10px;" @click="save" :disabled="dis">保存</el-button>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import configration from '../../static/configuration.json'
const FooterBlog = () => import('@/components/footerblog')
const HeaderBlog = () => import('@/components/Head')
const hash = require('object-hash')
const ls = require('local-storage')
export default {
  name: 'create',
  data () {
    return {
      id: '',
      dis: false,
      loading: true,
      show: false,
      auth: false,
      msg: 'Welcome to Your Vue.js App',
      content: '',
      title: '',
      description: '',
      pub: false,
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    VueEditor,
    HeaderBlog,
    FooterBlog
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.name === configration.username && (hash.MD5(this.ruleForm.pwd)) === configration.password) {
            ls.set('isAuth', true)
            this.show = true
            this.auth = true
          }
        } else {
          this.$message.error('账号或密码错误')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    save () {
      this.dis = true
      if (!this.title) {
        this.dis = false
        this.$message({
          message: '请输入标题',
          showClose: true,
          type: 'error',
          center: true
        })
        return false
      }
      if (!this.description) {
        this.dis = false
        this.$message({
          message: '请输入简介',
          showClose: true,
          type: 'error',
          center: true
        })
        return false
      }
      if (!this.content) {
        this.dis = false
        this.$message({
          message: '请输入内容',
          showClose: true,
          type: 'error',
          center: true
        })
        return false
      }
      // let files = {}
      // files[this.title] = {content: this.content}
      let files = {[this.title]: {content: this.content}}
      if (this.id) {
        this.$http.patch(`/api/v5/gists/${this.id}`, {'description': this.description, 'files': files, 'public': this.pub}).then(res => {
          this.open2()
        })
      } else {
        this.$http.post('/api/v5/gists', {'description': this.description, 'files': files, 'public': this.pub}).then(res => {
          this.open2()
        })
      }
    },
    open2 () {
      this.$confirm('是否继续写博客?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.title = ''
        this.content = ''
        this.description = ''
        this.dis = false
        if (this.id) {
          this.$router.push('/create.html')
        }
      }).catch(() => {
        window.location.href = '/'
      })
    },
    init (id) {
      this.$http.get(`/api/v5/gists/${id}`).then(res => {
        let result = res.data
        let vm = this
        this.pub = result.public
        for (let key in result.files) {
          vm.title = key
          vm.description = result['description']
          vm.content = result.files[key].content
          break
        }
      })
    }
  },
  mounted () {
    if (ls.get('isAuth')) {
      console.info(ls.get('isAuth'))
    } else {
      this.$router.push('/')
    }
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      this.init(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-block {
  transition: all 0.2s ease 0s;
  display: inline-flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 80px;
}
</style>
