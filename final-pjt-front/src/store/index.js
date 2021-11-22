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
    movie: null,
    genres: null,
    imgSrc: "https://image.tmdb.org/t/p/w300",
    reviews: [],
    review: null,
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
    GO_MOVIE_DETAIL(state, movieinfo){
      state.movie = movieinfo
      console.log(state.movie)
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
    goMovieDetail({ commit }, movieinfo){
      commit('GO_MOVIE_DETAIL',movieinfo)
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
          console.log(res)
          commit('CREATE_REVIEW',res.data)
          router.push({name:'Community'})
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  modules: {
  },
})
