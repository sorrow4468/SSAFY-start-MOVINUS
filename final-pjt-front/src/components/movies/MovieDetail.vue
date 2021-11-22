<template>
  <div>
    <h1 style="padding-top:120px;">DETAIL</h1>
    <div class="d-flex">      
      <img :src="imgSrc+movie.poster_path" alt="포스터이미지">
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
    <movie-detail-recommend></movie-detail-recommend>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieDetailTeaser from '@/components/movies/MovieDetailTeaser'
import MovieDetailRecommend from '@/components/movies/MovieDetailRecommend'

export default {
  name: 'MovieDetail',
  components: {
    MovieDetailTeaser,
    MovieDetailRecommend,
  },
  computed: {
    ...mapState([
      'movie',
      'imgSrc',
    ])
  },
}
</script>

<style>

</style>