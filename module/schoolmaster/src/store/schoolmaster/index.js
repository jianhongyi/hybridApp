import Vue from 'vue'
import Vuex from 'vuex'
import axios from '~common/assets/js/axios.js'

Vue.use(Vuex)

const state = {
  LOADING: false, // 全局loading
  userInfo: {}, // 绑定信息 用户手机号 userID
  hmWechatInfo: {}, // 微信用户信息 头像 unionID
  hmOrgCode: '',
  hmOrgId: '',
  hmOrgName: '',
  hmOrgList: []
}

const mutations = {
  showLoading (state) {
    state.LOADING = true
  },
  hideLoading (state) {
    state.LOADING = false
  },
  setUserInfo (state, val) {
    state.userInfo = val
  },
  setWechatInfo (state, val) {
    state.hmWechatInfo = val
    localStorage.setItem('hmWechatInfo', JSON.stringify(val))
  },
  setOrgCode (state, val) {
    state.hmOrgCode = val
    localStorage.setItem('hmOrgCode', val)
  },
  setOrgId (state, val) {
    state.hmOrgId = val
    localStorage.setItem('hmOrgId', val)
  },
  setOrgName (state, val) {
    state.hmOrgName = val
    localStorage.setItem('hmOrgName', val)
  },
  setOrgList (state, val) {
    state.hmOrgList = val
    localStorage.setItem('hmOrgList', JSON.stringify(val))
  }
}

const actions = {
  /**
   * 微信登录 获取wechatUnionId
   * @param {Object} context 仓库命令
   */
  SIGN_IN (context, params) {
    return axios.get('/query/wechat/info', {params})
  },
  /**
   * 查询绑定关系 获取用户信息
   * @param {Object} context 仓库命令
   */
  GET_USERINFO (context, params) {
    context.commit('showLoading')
    return axios.get('/query/bind/info', {params})
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations
})
