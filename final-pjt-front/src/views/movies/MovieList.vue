<template>
  <div>
    <button @click="this.$router.push({name:'Login'})"> Log in페이지로 가라 </button>
    <ul>
      <li v-for="movie in movies" :key="movie.id">        
        <h1 >{{ movie.title }}</h1>
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지"
          @click="getDetail(movie)">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieList',
  data() {
    return {
      movies: null,
      imgSrc: null,
      detail_movie: null,
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    getMovies: function() {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/',
        // headers: this.setToken()
      })
        .then(res => {
          console.log(res)
          this.movies = res.data
          this.imgSrc = "https://image.tmdb.org/t/p/w300"
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDetail(movie) {      
      // console.log(movie)
      this.$store.dispatch('getDetail', movie)
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

</style>