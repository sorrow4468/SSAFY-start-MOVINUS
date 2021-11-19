<template>
  <div>
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
// import axios from 'axios'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'MovieList',
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    // getMovies: function() {
    //   axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1:8000/movies/',
    //     // headers: this.setToken()
    //   })
    //     .then(res => {
    //       console.log(res)
    //       this.movies = res.data
    //       this.imgSrc = "https://image.tmdb.org/t/p/w300"
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    ...mapActions([
      'getMovies',
      'getDetail',
    ])
    // getDetail(movie) {      
    //   // console.log(movie)
    //   this.$store.dispatch('getDetail', movie)
    // }
  },
  computed: {
    ...mapState([
      'movies',
      'imgSrc',
    ])
  }
}
</script>

<style>

</style>