<template>
  <div>
    <h1>다양한 영화들</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지">

      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieList',
  computed:{
    ...mapState([
      'movies',
      'imgSrc'
    ])
  }
  
}
</script>

<style>

</style>