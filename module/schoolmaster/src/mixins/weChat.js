// 微信登录流程 获取机构列表
import { offline } from '~common/assets/js/util.js'

export default {
  computed: {
    weChatInfo () {
      return this.$store.schoolmaster.state.hmWechatInfo
    }
  },
  created () {
    this.setStoreInit()
    let wechatUnionId = this.weChatInfo.wechatUnionId
    if (wechatUnionId) {
      // 存在wechatUnionId 直接获取用户信息
      this.getUserInfo(wechatUnionId)
    } else {
      // 不存在>>>获取code>>>获取wechatUnionId>>>完成登录
      this.getCode()
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
    // 初始化 同步localStorage到store中
    setStoreInit () {
      let hmOrgCode = localStorage.getItem('hmOrgCode')
      let hmOrgId = localStorage.getItem('hmOrgId')
      let hmOrgName = localStorage.getItem('hmOrgName')
      let hmOrgList = localStorage.getItem('hmOrgList')
      let hmWechatInfo = localStorage.getItem('hmWechatInfo')
      hmWechatInfo && this.$store.schoolmaster.commit('setWechatInfo', JSON.parse(hmWechatInfo))
      hmOrgList && this.$store.schoolmaster.commit('setOrgList', JSON.parse(hmOrgList))
      hmOrgCode && this.$store.schoolmaster.commit('setOrgCode', hmOrgCode)
      hmOrgId && this.$store.schoolmaster.commit('setOrgId', Number(hmOrgId))
      hmOrgName && this.$store.schoolmaster.commit('setOrgName', hmOrgName)
    },
    // 获取机构列表
    getOrgList (userId) {
      let params = {
        userId
      }
      this.$axios.get('/org/chooseorg', { params })
        .then((res) => {
          if (res && res.length > 0) {
            this.$store.schoolmaster.commit('setOrgList', res)
            // 选择机构页面 带有enter参数: 1是公众号入口直接进入 2是重新登录跳转
            if (this.$route.query.enter) {
              // 如果只有一个机构 默认选中第一个 否则置空
              this.$store.schoolmaster.commit('setOrgCode', res.length > 1 ? '' : res[0].orgCode)
              this.$store.schoolmaster.commit('setOrgId', res.length > 1 ? '' : res[0].id)
              this.$store.schoolmaster.commit('setOrgName', res.length > 1 ? '' : res[0].orgName)

              // 如果只有一个机构直接进入首页 如果多个进入选择机构页面
              if (this.$route.query.enter === '1' || this.$route.query.enter === '2') {
                if (res.length === 1) {
                  this.$router.replace('dataIndex')
                }
              }
              if (this.$route.query.enter === '1' && res.length > 1) {
                this.$router.replace({
                  path: 'choiceOrg',
                  query: {
                    path: 'dataIndex'
                  }
                })
              }
            }
          } else {
            this.$toast('暂无访问权限')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 登录，非静默授权，第一次有弹框
    getCode () {
      this.$store.schoolmaster.commit('showLoading')
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
        let params = {
          code,
          source: 2
        }
        this.$store.schoolmaster.dispatch('SIGN_IN', params)
          .then((res) => {
            if (res) {
              this.$store.schoolmaster.commit('setWechatInfo', res)
              this.getUserInfo(res.wechatUnionId)
            }
            this.$store.schoolmaster.commit('hideLoading')
          })
          .catch(() => {
            this.$store.schoolmaster.commit('hideLoading')
          })
      }
    },
    // 查询绑定关系 获取用户信息
    getUserInfo (wechatUnionId) {
      let params = {
        wechatUnionId
      }
      this.$store.schoolmaster.dispatch('GET_USERINFO', params)
        .then((res) => {
          if ((res && res.isOrgEmpty) || !(res && res.userId)) {
            this.$router.replace('login')
          } else if (res && res.userId) {
            this.$store.schoolmaster.commit('setUserInfo', res)
            this.getOrgList(res.userId)
          }
          this.$store.schoolmaster.commit('hideLoading')
        })
        .catch(() => {
          this.$store.schoolmaster.commit('hideLoading')
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
