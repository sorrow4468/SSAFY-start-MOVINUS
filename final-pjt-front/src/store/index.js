import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

// const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default new Vuex.Store({
  state: {    
    isLogin: false,
    movies: null,
    genres: null,
    imgSrc: "https://image.tmdb.org/t/p/w300",
    reviews: [],
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    },
    LOGOUT(state) {
      state.isLogin = false
      localStorage.removeItem('jwt')
      router.push({ name: 'Login' })
    },
    GET_MOVIES(state, moviedata){
      state.movies = moviedata
      // state.imgSrc = state.imgSrc + movie.poster_path
    },
    GET_GENRES(state, genredata){
      state.genres = genredata
      // state.genres.forEach(genre => {
      //   const like_genres_data = {
      //     'id': genre['id'],
      //     'name': genre['name'],
      //     'isLiked': false,
      //   }
      //   state.credentials.likeGenres.push(like_genres_data)
      // })
    },
    GET_REVIEWS(state, reviewItems){
      state.reviews = reviewItems
    }
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
    logout({ commit }){
      commit('LOGOUT')
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
    getReviews({ commit }, token){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
        headers: token,
      })
        .then(res=> {
          // console.log(res)
          commit('GET_REVIEWS', res.data)
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  modules: {
  },
})
