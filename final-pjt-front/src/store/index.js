import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import _ from 'lodash'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

// const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default new Vuex.Store({
  state: {    
    isLogin: false,
    movies: null,
    movie: null,
    genres: [],
    imgSrc: "https://image.tmdb.org/t/p/w300",
    reviews: [],
    review: null,
    genreMovies: null,
    randomMovies: [],    
    findGenreNames: [],
    comments: [],
    comment: null,
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
      // console.log(state.genres)
      genredata.forEach(genre => {
        const genre_data = {
          'id': genre['id'],
          'name': genre['name'],
          'isLiked': false,
        }
        state.genres.push(genre_data)
      })
    },
    GO_MOVIE_DETAIL(state, movieinfo){
      state.movie = movieinfo
      // console.log(state.movie)
      router.push({name:'Detail', params:{movieId: movieinfo.id}})
    },

    /////////////////////////////////////////
    GO_REVIEW_DETAIL(state, reviewinfo){
      state.review = reviewinfo
      router.push({name: 'ReviewsItem',params:{reviewId: reviewinfo.id}})
    },
    /////////////////////////////////////////

    GET_REVIEWS(state, reviewItems){
      state.reviews = reviewItems
    },
    CREATE_REVIEW(state, reviewdata){
      state.review = reviewdata
      router.go()
    },
    UPDATE_REVIEW(state, reviewdata){
      state.review = reviewdata
      router.go()
    },
    DELETE_REVIEW(state, reviewdata){
      const index = state.reviews.indexOf(reviewdata)
      state.reviews.splice(index, 1)
    },
  
    GET_GENRE_MOVIES(state, movie) {
      // console.log(movie)
      state.genreMovies = movie
    },
    GET_RANDOM_MOVIES(state){
      state.randomMovies = _.sampleSize(state.genreMovies, 5)
    },

    // detail.vue안에서 추천할 때
    FIND_GENRE_NAME(state) {
      state.findGenreNames = []
      state.randomMovies = null
      // if (state.findGenreNames.length === 0) {
      state.genres.forEach(genre => {
        state.movie.genres.forEach(movie_genre => {            
          if (movie_genre === genre['id']) {
            // console.log(genre['name'])
            if (state.findGenreNames.length !== state.movie.genres.length) {
              const genre_name_id = {
                'id': genre['id'],
                'name': genre['name']
              }
              state.findGenreNames.push(genre_name_id)
            }
          }
        })
      })
      // }
      // console.log(state.findGenreNames)
    },
    GET_COMMENTS(state, commentdata){
      state.comments = commentdata
    }
    ,
    CREATE_COMMENT(state, commentdata) {
      state.comment = commentdata
      router.go()
    },
    UPDATE_COMMENTS(state, commentdata){
      state.comment = commentdata
      router.go()
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
    checkLogin({commit}, token) {
      if (token) {
        commit('LOGIN')
      }
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
    goMovieDetail({ commit }, movieinfo){
      commit('GO_MOVIE_DETAIL',movieinfo)
      router.go()
    },
    /////////////////////////////////////////////
    goReviewDetail({ commit }, reviewinfo){
      // console.log(reviewinfo)
      commit('GO_REVIEW_DETAIL',reviewinfo)
    },
    /////////////////////////////////////////////
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
    },
    createReview({ commit }, reviewdata){
      // console.log(reviewdata)
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/community/reviews/',
        data: reviewdata.form,
        headers: reviewdata.token
      })
        .then(res=>{
          // console.log(res)
          commit('CREATE_REVIEW',res.data)
          router.go()
        })
        .catch(err=> {
          console.log(err)
        })
    },
    updateReview({ commit }, reviewdata){
      // console.log(reviewdata)
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/reviews/${reviewdata.form.id}/`,
        data: reviewdata.form,
        headers: reviewdata.token
      })
        .then(res=>{
          // console.log(res)
          commit('UPDATE_REVIEW',res.data)
          
        })
        .catch(err=> {
          console.log(err)
        })
    },
    deleteReview({ commit }, reviewdata){
      // console.log(reviewdata)
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/reviews/${reviewdata.id}/`,
        headers: reviewdata.token
      })
        .then(res=>{
          console.log(res)
          commit('DELETE_REVIEW',res.data)
          router.push({name:'Community'})
        })
        .catch(err=> {
          console.log(err)
        })
    },
    getGenreMovies({ commit }, genreId) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/genres/${genreId}/`,
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
    findGenreName({ commit }) {
      commit('FIND_GENRE_NAME')    
    },
    createComment({ commit }, commentdata){
      // console.log(commentdata)
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/community/reviews/${commentdata.reviewId}/comments/`,
        data: commentdata.content,
        headers: commentdata.token
      })
        .then(res=> {
          // console.log(res)
          commit('CREATE_COMMENT',res.data)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    getComments({ commit }, commentdata){
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/community/reviews/${commentdata.reviewId}/comments/`,
        headers: commentdata.token
      })
        .then(res=> {
          // console.log(res)
          commit('GET_COMMENTS', res.data)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    updateComment({ commit }, commentdata){
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/comments/${commentdata.commentId}/`,
        data: commentdata.content,
        headers: commentdata.token
      })
        .then(res=>{
          commit('UPDATE_COMMENTS', res.data)
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  getters:{
    comments(state){
      return state.comments
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
