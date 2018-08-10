<template>
  <div class="hello"  v-title data-title="NBB(No Bug Blog)-好记性不如烂笔头" style="background: #efefef;" >
    <header-blog index='3'></header-blog>
    <div  v-loading="loading" style="min-height:500px;text-align:center" element-loading-text="玩命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
      <div v-show="show && !auth" style="width:600px;" class="demo-block">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名" suffix-icon="el-icon-edit" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd" >
            <el-input v-model="ruleForm.pwd" placeholder="请输入密码" suffix-icon="el-icon-edit" :maxlength="6" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="show && auth">
        <vue-editor v-model="content" placeholder="开始写文章吧"></vue-editor>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>
<script>
import HeaderBlog from '@/components/headerblog'
import FooterBlog from '@/components/footerblog'
import { VueEditor } from 'vue2-editor'
import configration from '../../static/configuration.json'
const hash = require('object-hash')
const ls = require('local-storage')
export default {
  name: 'create',
  data () {
    return {
      loading: true,
      show: false,
      auth: false,
      msg: 'Welcome to Your Vue.js App',
      content: '',
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
      console.info(this.content)
      this.content = ''
    }
  },
  mounted () {
    if (ls.get('isAuth')) {
      this.loading = false
      this.show = true
      this.auth = true
    } else {
      this.loading = false
      this.show = true
      this.auth = false
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
