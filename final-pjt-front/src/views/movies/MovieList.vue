<template>
  <div>
    <h1>다양한 영화들</h1>
    <hr>
    <b-row class="justify-content-center">
      <b-col col="3" class="m-3" v-for="movie in movies" :key="movie.id">
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지">
      </b-col>
    </b-row>
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