import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

// const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default new Vuex.Store({
  state: {    
    isLogin: false,
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    },
  },
  actions: {
    login({commit}, credentials) {
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: credentials,
      })
        .then(res => {
          localStorage.setItem('jwt', res.data.token)
          commit('LOGIN')
          router.push({name: 'MovieList'})
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  },
})
