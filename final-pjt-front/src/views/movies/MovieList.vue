<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h1 @click="this.$router.push({ name:'Detail', params: { movieId:movie.id } })">{{ movie.title }}</h1>
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지"
          @click="getDetail">
        <p>{{ movie.overview }}</p>
        <p>{{ movie.genres }}</p>
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
          // console.log(res)
          this.movies = res.data
          this.imgSrc = "https://image.tmdb.org/t/p/w300"
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDetail() {
      return this.$router.push({ name:'Detail', params: { movieId: this.movie.id } })
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

</style>