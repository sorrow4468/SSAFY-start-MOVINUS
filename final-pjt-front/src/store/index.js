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
    imgSrc: "https://image.tmdb.org/t/p/w300",
    movies: null,
    genres: null
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
      // console.log(movie)
      state.movie = movie   
      state.movieId = movie.id
      router.push({ name: 'Detail', params: { movieId: state.movieId } })
    },
    GET_MOVIES(state, moviedata){
      state.movies = moviedata
      // state.imgSrc = state.imgSrc + movie.poster_path
    },
    GET_GENRES(state, genredata){
      state.genres = genredata
      console.log(state.genres)
    }
  },
  actions: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
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
    },
    getMovies({ commit }){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/',
        // headers: this.setToken()
      })
        .then(res => {
          // console.log(res)
          commit('GET_MOVIES',res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getGenres({ commit }){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/genres/',
        // headers: this.setToken()
      })
        .then(res => {
          // console.log(res)
          commit('GET_GENRES',res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
