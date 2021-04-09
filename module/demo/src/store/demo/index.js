import {get} from '~common/assets/js/http.js'

const state = {
  demo: []
}

const mutations = {
  setDemo (state, val) {
    state.demo = val
  }
}

const actions = {
  demo ({ commit }, msg) {
    return get('/demo', {
      params: {}
    }).then(res => {
      commit('setDemo', msg)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
