<!-- 落地页 -->
<template>
  <div class="download-wrapper">
    <img class="download-img" src="@/assets/img/download1.png" alt="落地页1" />
    <img class="download-img" src="@/assets/img/download2.png" alt="落地页2" />
    <img class="download-img" src="@/assets/img/download3.png" alt="落地页3" />
    <img class="download-img" src="@/assets/img/download4.png" alt="落地页4" />
    <img class="download-img" src="@/assets/img/download5.png" alt="落地页5" />
    <img class="download-img" src="@/assets/img/download6.png" alt="落地页6" />
    <div v-if="!isInApp" class="footer">
      <div class="download-btn-wrap">
        <img class="download-btn-icon" src="@/assets/img/download-btn-icon.png" alt="下载按钮图标"/>
        <img class="download-btn-text" src="@/assets/img/download-btn-text.png" alt="下载按钮文字"/>
      </div>
      <img ref="downloadBtn" class="download-btn" src="@/assets/img/download-btn.png" alt="下载按钮"/>
    </div>
  </div>
</template>

<script>

//  导入的其他文件 例如：import moduleName from 'modulePath';
export default {

  //  import所引入的组件注册
  components: {

  },

  data () {
    return {
      downloadBtn: null
    }
  },

  //  监听属性
  computed: {
    isInApp () {
      const ua = window.navigator.userAgent
      console.log(ua)
      return ~ua.indexOf('OrganStudent')
    }
  },

  //  监控data中的数据变化
  watch: {

  },

  //  创建完成 访问当前this实例
  created () {

  },
  //  挂载完成 访问DOM元素
  mounted () {
    this.downloadBtn = this.$refs.downloadBtn
    this.downloadBtn && this.downloadBtn.addEventListener('touchstart', this.clickHandler)
  },
  //  组件销毁之前调用
  beforeDestroy () {
    this.downloadBtn && this.downloadBtn.removeEventListener('touchstart', this.clickHandler)
    this.downloadBtn = null
  },
  //  方法集合
  methods: {
    clickHandler (e) {
      let urls = {
        ios: 'itms-apps://itunes.apple.com/app/id1524575244',
        android: 'market://details?id=com.fltrp.organ.student',
        weixin: 'http://a.app.qq.com/o/simple.jsp?pkgname=' + 'com.fltrp.organ.student'
      }
      const client = this.checkSystem()
      console.log(urls[client])
      window.location = urls[client] || ''
      e.stopPropagation()
      e.preventDefault()
    },

    checkSystem () {
      let u = window.navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      let isWeixin = !!u.match(/micromessenger/i)
      if (isWeixin) {
        return 'weixin'
      } else if (isIOS) {
        return 'ios'
      } else if (isAndroid) {
        return 'android'
      }
    }
  }

}
</script>
<style lang='less' scoped>
    .download-wrapper {
        background: #674eff;
        font-size: 0;
        padding-bottom: 3.4rem;
        .download-img {
            width: 100vw;
        }
        .footer {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px;
          width: 100vw;
          height: 3.4rem;
          background: rgba(255,255,255,0.92);
          bottom: 0;
          left: 0;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          .download-btn-wrap {
            display: flex;
            align-items: center;
            .download-btn-icon {
              width: 2.48rem;
            }
            .download-btn-text {
              width: 3.4rem;
              height: 1.7rem;
              margin-left: 20px;
            }
          }
          .download-btn {
            width: 4.6rem;
            height: 1.84rem;
          }
        }
    }
</style>
