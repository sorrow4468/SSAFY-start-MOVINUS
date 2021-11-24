<template>
  <div style="padding-top:60px;">
    <div class="d-flex">    
      <img :src="imgSrc+movie.poster_path" alt="포스터이미지" style="object-fit:none;">
      <div>        
        <div class="d-flex justify-content-between">        
          <p class="m-3 fs-3">{{ movie.title }}</p>
          <p class="m-3 fs-3">평점 : {{ movie.vote_average }}</p>
        </div>
        <div class="m-3 fs-5 text-start">{{ movie.overview }}</div>
        <MovieDetailTeaser :title="movie.title"/>
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
  props: {
    movie: {
      type: Object,
      required: true
    },
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