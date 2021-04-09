import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  deviceInfo: {}
}

const mutations = {
  setDeviceInfo (state, val) {
    state.deviceInfo = val
  }
}

const actions = {

}

export default new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations
})
