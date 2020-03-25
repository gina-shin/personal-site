import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'english'
  },
  getters: {
    language: (state) => state.language
  },
  mutations: {
    changeLanguage(state, language) {
      state.language = language
    }
  },
  actions: {
    changeLanguage ({ commit }, language) {
      commit('changeLanguage', language)
    }
  },
  modules: {
  }
})
