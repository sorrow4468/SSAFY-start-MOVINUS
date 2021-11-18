<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h1>{{ movie.title }}</h1>
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지">
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
    getMovies: function() {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/'
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
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>

</style>