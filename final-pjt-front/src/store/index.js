import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: null,
    isLogin: false,    
    movieId: null,
    imgSrc: "https://image.tmdb.org/t/p/w300",
    movies: null,
    genres: null,
    findGenreNames: [],
    genreMovies: null,
    randomMovies: [],
    credentials: {
      username: null,
      password: null,
      passwordConfirmation: null,
      like_genres: [],
    },
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
      state.genres.forEach(genre => {
        const like_genres_data = {
          'id': genre['id'],
          'name': genre['name'],
          'isLiked': false,
        }
        state.credentials.like_genres.push(like_genres_data)
      })
      // console.log(state.genres)
    },
    FIND_GENRE_NAME(state) {
      state.findGenreNames = []
      state.randomMovies = null
      // if (state.findGenreNames.length === 0) {
      state.genres.forEach(genre => {
        state.movie.genres.forEach(movie_genre => {            
          if (movie_genre === genre['id']) {
            // console.log(genre['name'])
            const genre_name_id = {
              'id': genre['id'],
              'name': genre['name']
            }
            state.findGenreNames.push(genre_name_id)
          }
        })
      })
      // }
      // console.log(state.findGenreNames)
    },
    GET_GENRE_MOVIES(state, movie) {
      // console.log(movie)
      state.genreMovies = movie
    },
    GET_RANDOM_MOVIES(state){
      state.randomMovies = _.sampleSize(state.genreMovies, 5)
    },
    SIGNUP(state) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: state.credentials,
      })
        .then(() => {
          // console.log(res)
          router.push({name:'Login'})
        })
        .catch(err => {
          console.log(err)
        })
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
    findGenreName({ commit }) {
      commit('FIND_GENRE_NAME')    
    },
    getGenreMovies({ commit }, genreId) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/genres/${genreId}`,
        // headers: this.setToken()
      })
        .then(res => {
          // console.log(res.data)
          commit('GET_GENRE_MOVIES', res.data)
          commit('GET_RANDOM_MOVIES')
        })
        .catch(err => {
          console.log(err)
        })      
    },
    signup({ commit }) {
      commit('SIGNUP')
    }
  },
  modules: {
  },
})
