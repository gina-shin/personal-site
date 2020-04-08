import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'english'
  },
  getters: {
    getLanguage: state => state.language
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      commit('setLanguage', language)
    }
  },
  modules: {
  }
})
