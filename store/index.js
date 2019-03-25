import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'
Vue.use(Vuex)

export const state = () => ({
  authUser: null,
  csrfToken: null,
  article: null
})
export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  },
  setArticle(state, data) {
    state.article = data
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    if (req.cookies) {
      commit('SET_CSRF_TOKEN', req.csrfToken())
    }
  }
}
