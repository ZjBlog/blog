<template>
  <div class="main"  :style="{background: backgroundColor}">
      <textarea  class="text"  :style="{borderColor: mainColor}" v-model="comtent" placeholder="评论一下吧!" maxlength="200">
      </textarea>
      <div class="er1" :style="{borderColor: mainColor}">
        <p style="line-height:10px;margin-right:50px;color:red;" v-show="show">请输入评论</p>
        <p style="line-height:10px;margin-right:50px;">还可以输入<span :style="{color:mainColor}">{{count}}</span>字</p>
        <button id="mr" class="button button1"   @click="comment">发布评论</button>
      </div>
      <div v-for="(item,index) in pageData" :key="index" class="er2" :style="{marginTop:'15px',borderColor: mainColor}">
          <div class="xwcms" :style="item.avatar | avatar"></div>
          <div style="width:150px;flex-shrink:0;">
            <p>
              {{item.name}}
            </p>
            <p>
              {{item.createdAt}}
            </p>
          </div>
          <div>
            <p class="text3">
              {{item.moment}}
            </p>
          </div>
      </div>
      <div style="height:20px;"></div>
      <div style="margin-bottom：15px;height:70px;" v-if="more">
        <button class="button2" style="vertical-align:middle" @click="moreData"><span>加载更多 </span></button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      dis: true,
      num: 1,
      show1: false,
      comtent: ''
    }
  },
  props: {
    mainColor: {
      type: String,
      default: '#409EFF'
    },
    backgroundColor: {
      type: String,
      default: '#efefef'
    },
    worldCount: {
      type: Number,
      default: 200
    },
    allCount: {
      type: Number,
      required: true,
      default: 0
    },
    size: {
      type: Number,
      default: 10,
      required: true
    },
    pageData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    more () {
      return Math.ceil(this.allCount / this.size) > 1 && this.allCount !== this.num * this.size
    },
    count () {
      return this.worldCount - this.comtent.length
    },
    show () {
      if (this.comtent) {
        return false
      }
      return this.show1
    }
  },
  watch: {
    pageData: function (curVal, oldVal) {
      console.info(curVal.length + '=====' + oldVal.length)
      this.dis = true
    }
  },
  components: {
  },
  methods: {
    moreData () {
      if (this.dis) {
        this.dis = false
        this.$emit('moreData', this.num)
      }
    },
    comment () {
      if (!this.comtent) {
        this.show1 = true
        return false
      }
      this.$emit('submit', this.comtent)
    }
  },
  mounted () {
    // window.Bmob.initialize('f8328d2a0f60bcdf593b4599d77acc12', '42f9db0aa62e6f2bd7850d324b0c473d')
    // const query = window.Bmob.Query('Blog')
    // query.equalTo('blogId', '==', 'ghnvbkojl986fr50q1zci33')
    // query.find().then(res => {
    //   console.info(res)
    // }).catch(err => {
    //   console.info(err)
    // })
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
   .main {
     max-width:1200px;
     margin:auto;
     text-align:center
   }
   #mr {
     margin-right:20px;
   }
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
  border: 1px solid;
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
  border: 1px solid;
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
  border:solid 1px;
  border-radius:6px;
  word-break:break-all;
  word-wrap: break-word;
  line-height: 24px;
  margin-bottom:15px;
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
word-wrap:break-word;
text-indent:2em;
text-align:left;
}

.button2 {
  display: inline-block;
  border-radius: 4px;
  background-color: #409EFF;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 12px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button2 span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button2:hover span {
  padding-right: 25px;
}

.button2:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
