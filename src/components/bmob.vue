<template>
  <div  style="background: #efefef;max-width:1200px;margin:auto;text-align:center">
      <textarea  class="text" v-model="comtent" placeholder="评论一下吧!" maxlength="200" style="margin-bottom:15px;">
      </textarea>
      <div class="er1" >
        <p style="line-height:10px;margin-right:50px;color:red;" v-show="show">请输入评论</p>
        <p style="line-height:10px;margin-right:50px;">还可以输入<span style="color:#409EFF;">{{count}}</span>字</p>
        <button class="button button1" style="margin-right:20px;"  @click="comment">发布评论</button>
      </div>
      <div v-for="(item,index) in items" :key="index" class="er2" style="margin-top:15px;">
          <div class="xwcms" :style="item.avatar | avatar"></div>
          <div style="width:150px;flex-shrink:0;">
            <p>
              张瑾春
            </p>
            <p>
              2018年8月12日
            </p>
          </div>
          <div>
            <p class="text3">
              参考消息网8月16日报道 港媒称，澳大利亚与中国的关系正经历一段艰难时期。自从澳大利亚总理马尔科姆·特恩布尔提出针对外国干涉的新法以来，两国关系就一波未平一波又起。据香港《南华早报》网站8月15日报道，当特恩布尔指出中国涉嫌干涉别国内政，并以此作为去年年底通过这项法案的正当理由时，北京指责美国的重要盟友澳大利亚怀有“冷战思维”，并召见其大使表示抗议。报道称，就在澳大利亚和中国最近几周试图通过加你哈
            </p>
          </div>
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
      show1: false,
      comtent: '',
      msg: 'Welcome to Your Vue.js App',
      items: [{'name': 'dddd', 'avatar': 'https://www.gravatar.com/avatar/a63c9ca1fbe7a75217ad129bdb09304b?s=100&d=monsterid', 'moment': 'ddd'}]
    }
  },
  computed: {
    count () {
      return 200 - this.comtent.length
    },
    show () {
      if (this.comtent) {
        return false
      }
      return this.show1
    }
  },
  components: {
    HeaderBlog,
    FooterBlog
  },
  methods: {
    comment () {
      if (!this.comtent) {
        this.show1 = true
        return false
      }
      console.info('...')
    }
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
    flex-shrink: 0;
    margin-left: 10px;
    width: 100px;
    height: 100px;
    /* margin: 0 auto; */
    /* background: no-repeat url("../../static/images/123.png") left top; */
    -webkit-background-size: 100px 100px;
    -moz-background-size: 100px 100px;
    background-size: 100px 100px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
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
  .er1 {
  width: 99%;
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:flex-end;
  align-items: center;
  border: 1px solid #409EFF;
  border-radius:6px;
  height: 42px;
  margin: auto;
}
  .er2{
  width: 99%;
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  /* justify-content:flex-end; */
  align-items: center;
  border: 1px solid #409EFF;
  border-radius:6px;
  height: 100px;
  margin: auto;
  background-color: white;
}
textarea{outline:none}
.text {
  text-indent:34px;
  border-style:none;
  margin:0;
  padding:0;
  width: 99%;
  resize:none;
  height: 76px;
  border:solid 1px#409EFF;
  border-radius:6px;
  word-break:break-all;
  word-wrap: break-word;
  line-height: 24px;
}
.button {
  background-color: #409EFF;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius:6px;
  outline:none;
}
.button1 {
  background-color: white;
  color: #409EFF;
  border-right: 1px solid #409EFF;
  border-left: 1px solid #409EFF;
}

.button1:hover {
  background-color: #409EFF;
  color: white;
}
.text3 {
word-break:normal;
white-space:pre-warp;
word-wrapL:break-word;
text-indent:2em;
text-align:left;
}
</style>
