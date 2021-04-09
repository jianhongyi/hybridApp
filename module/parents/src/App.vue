<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <router-view v-if="!stuId"></router-view>
  </div>
</template>

<script>
import Loading from './components/loading'
import cookie from '~common/assets/js/cookie.js'
import { offline } from '~common/assets/js/util.js'

export default {
  created () {
    let wechatUnionId = cookie.getCookie('wechatUnionId')
    if (wechatUnionId) {
      // 存在wechatUnionId 直接获取用户信息
      this.getUserInfo(wechatUnionId)
    } else {
      // 不存在>>>获取code>>>获取wechatUnionId>>>完成登录
      this.getCode()
    }
  },
  computed: {
    LOADING () {
      return this.$store.parents.state.LOADING
    },
    stuId () {
      return this.$route.query.stuId
    },
    currentBind () {
      return this.$store.parents.state.currentBind
    },
    userInfo () {
      return this.$store.parents.state.userInfo
    }
  },
  components: {
    Loading
  },
  watch: {
    userInfo: {
      handler (val) {
        if (this.stuId && this.userInfo.wechatUnionId) {
          this.changeChild(this.stuId)
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    offline(() => {
      console.log('网络正常')
    }, () => {
      this.$toast('网络异常，请检查')
    })
  },
  methods: {
    changeChild (stuId) {
      if (Number(stuId) === this.currentBind.userId) {
        this.$router.push({query: {}})
        return false
      }
      this.$store.parents.commit('showLoading')
      let params = {
        stuId: stuId,
        unionId: this.userInfo.wechatUnionId
      }
      this.$axios.put('/parents/api/update/parent/bind/status', params)
        .then(data => {
          this.$router.push({query: {}})
          window.location.reload()
        })
        .catch(() => {
          this.$router.push({query: {}})
          window.location.reload()
        })
    },
    // 登录，非静默授权，第一次有弹框
    getCode () {
      const code = this.getQueryVariable('code')
      const local = window.location.href
      let urlParams = {
        appid: 'wx89f2301d41684133', // k12家长：wxdddf31d36d7ad373
        redirect_uri: encodeURIComponent(local),
        response_type: 'code',
        scope: 'snsapi_userinfo',
        state: 'STATE'
      }
      if (code == null || code === '') {
        // 获取code
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?' +
          this.objToParams(urlParams) +
          '#wechat_redirect'
      } else {
        // 把code传给后台>>>获取wechatUnionId>>>请求用户信息
        this.$store.parents.commit('showLoading')
        let params = {
          code,
          source: 2
        }
        this.$store.parents.dispatch('SIGN_IN', params)
          .then((res) => {
            if (res) {
              cookie.setCookie('wechatUnionId', res.wechatUnionId)
              this.getUserInfo(res.wechatUnionId)
            }
            this.$store.parents.commit('hideLoading')
          })
          .catch(() => {
            this.$store.parents.commit('hideLoading')
          })
      }
    },
    // 获取用户信息
    getUserInfo (wechatUnionId) {
      let params = {
        wechatUnionId
      }
      this.$store.parents.dispatch('GET_USERINFO', params)
        .then((res) => {
          if (res) {
            this.$store.parents.commit('setUserInfo', res)
            this.$store.parents.commit('hideLoading')
          } else {
            this.getCode()
          }
        })
        .catch(() => {
          this.$store.parents.commit('hideLoading')
        })
    },
    // object转成URL上参数形式
    objToParams (obj) {
      let str = ''
      let keys = Object.keys(obj)
      for (let key of keys) {
        str += key + '=' + obj[key] + '&'
      }
      return str.substr(0, str.length - 1)
    },
    // 获取URL上参数
    getQueryVariable (variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] === variable) { return pair[1] }
      }
      return ''
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  background: #f6f7fb;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
