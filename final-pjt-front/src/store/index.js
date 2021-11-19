import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: null,
    isLogin: false,    
    movieId: null,
    imgSrc: "https://image.tmdb.org/t/p/w300"
  },
  mutations: {
    LOGOUT(state) {
      state.isLogin = false
      localStorage.removeItem('jwt')
      router.push({ name: 'Login' })
    },
    LOGIN(state) {
      state.isLogin = true               
    },
    GET_DETAIL(state, movie) {
      console.log(movie)
      state.movie = movie   
      state.movieId = movie.id   
      state.imgSrc = state.imgSrc + movie.poster_path
      router.push({ name: 'Detail', params: { movieId: state.movieId } })
    }
  },
  actions: {
    logout({ commit }) {
      commit('LOGOUT')
    },
    login({ commit }, credentials) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: credentials,
      })
        .then(res => {
          // console.log(res)
          localStorage.setItem('jwt', res.data.token)
          commit('LOGIN')
          router.push({name: 'MovieList'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDetail({ commit }, movie) {
      commit('GET_DETAIL', movie)
    }
  },
  modules: {
  }
})
