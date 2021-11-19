<template>
  <div>
    <h1>MovieDetail</h1>
    <div class="d-flex">      
      <img :src="imgSrc" alt="포스터이미지">
      <div>        
        <div class="d-flex justify-content-between">        
          <p>제목 : {{ movie.title }}</p>
          <p>평점 : {{ movie.vote_average }}</p>
          <br>
        </div>
        <div>{{ movie.overview }}</div>
        <movie-detail-teaser></movie-detail-teaser>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieDetailTeaser from '@/components/MovieDetailTeaser'

export default {
  name: 'MovieDetail',
  components: {
    MovieDetailTeaser,
  },
  computed: {
    ...mapState([
      'movie',
      'imgSrc',
    ])
  }
}
</script>

<style>

</style>