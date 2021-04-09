import Vue from 'vue'
import Vuex from 'vuex'
import axios from '~common/assets/js/axios.js'

Vue.use(Vuex)

const state = {
  LOADING: false, // 全局loading
  userInfo: {}, // 家长用户信息
  currentBind: null, // 当前孩子信息
  studentData: null // 学生数据概览
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
    state.currentBind = val.children ? val.children.filter(item => item.currentBind === 1)[0] : null
  },
  setStudentData (state, val) {
    state.studentData = val
  }
}

const actions = {
  /**
   * 微信登录 获取wechatUnionId
   * @param {Object} context 仓库命令
   */
  SIGN_IN (context, params) {
    return axios.get('/parents/api/query/wechat/info', {params})
  },
  /**
   * 获取用户信息
   * @param {Object} context 仓库命令
   */
  GET_USERINFO (context, params) {
    context.commit('showLoading')
    return axios.get('/parents/api/query/bind/info', {params})
  },
  /**
   * 学生练习概览
   * @param {Object} context 仓库命令
   * @param {String} stuId 学生ID
   */
  GET_STUDATA (context, stuId) {
    axios.get('/parents/api/query/stuhomewk/detail', {params: {stuId}})
      .then((res) => {
        context.commit('setStudentData', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  /**
   * 学生练习信息list
   * @param {Object} context 仓库命令
   */
  GET_HOMEWORKLIST (context, params) {
    params = Object.assign({}, params)
    return axios.post('/parents/api/query/stuhomewk/info', params)
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations
})
