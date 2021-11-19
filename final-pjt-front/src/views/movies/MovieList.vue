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
    ...mapActions([
      'getDetail',
    ])
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