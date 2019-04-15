import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'
Vue.use(Vuex)

export const state = () => ({
  authUser: null,
  csrfToken: null,
  article: null,
  register: []
})
export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  },
  setArticle(state, data) {
    state.article = data
  },
  setRegister(state, data) {
    state.register = data
  },
  SET_USER(state, user) {
    state.authUser = user
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
  },
  register({ commit }, { name, email, password, permission, _csrf }) {
    return fetch('/api/register', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      },
      body: JSON.stringify({ name, email, password, permission, _csrf })
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('既にメールアドレスが登録されています')
        } else {
          return res.json()
        }
      })
      .then((register) => {
        commit('setRegister', register)
      })
  },
  login({ commit }, { usermail, password, _csrf }) {
    return fetch('/api/login', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      },
      body: JSON.stringify({ usermail, password, _csrf })
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('ログイン失敗')
        } else {
          return res.json()
        }
      })
      .then((authUser) => {
        commit('SET_USER', authUser)
      })
  },
  logout({ commit }, { _csrf }) {
    return fetch('/api/logout', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      }
    })
      .then(() => {
        commit('SET_USER', null)
      })
  }
}
