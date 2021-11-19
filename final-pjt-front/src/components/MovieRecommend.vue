<template>
  <div>
    <h1>MovieRecommend</h1>
    <p>이 영화와 장르가 비슷한 영화들</p>
    <template v-for="movie_genre in movie.genres">
      <template v-for="genre in genres" v-if="movie_genre === genre[id]">
      
        {{ genre.name }} 
        
      </template>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieRecommend',
  computed: {
    ...mapState([
      'movie',
      'imgSrc',
      'genres',
    ])
  }
}
</script>

<style>

</style>