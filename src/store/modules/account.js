import axios from 'axios';
import {MAIN_PATH} from "@/static";

// ivan322@mail.ru
export default {
  actions: {
    async getAccount({commit}, payload) {
      const {params, type} = payload
      return new Promise((resolve, reject) => {
        axios({url: `${MAIN_PATH}/user/${type}`, data: params, method: 'POST' })
          .then(response => {
            const data = response.data;
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token
            commit('setAccount', data)
            resolve(data)
          })
          .catch(err => {
            commit('accountError', err)
            reject(err)
          })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${MAIN_PATH}/user/logout`,
          method: 'POST',
        })
          .then(response => {
            const data = response.data
            localStorage.removeItem('token')
            commit('logout', data)
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
          .catch(err => reject(err))
      })
    },
  },
  mutations: {
    setAccount(state, data) {
      state.user = data.user
      state.token = data.token
    },
    accountError(state, err) {
      state.error = err
    },
    logout(state, data) {
      if (Object.keys(data)[0] === 'success' && Object.values(data)[0]) {
        state.user = {}
        state.token = ''
        state.error = null
      } else {
        state.error = Object.values(data)[0]
      }
    },
  },
  state: {
    user: {},
    token: localStorage.getItem('token') || '',
    error: null,
  },
  getters: {
    token(state) {
      return state.token
    },
  },
}
