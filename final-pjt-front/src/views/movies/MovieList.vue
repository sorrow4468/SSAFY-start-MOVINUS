<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie }}
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
    }
  },
  methods: {
    getMovies: function() {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/'
      })
        .then(res => {
          console.log(res)
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