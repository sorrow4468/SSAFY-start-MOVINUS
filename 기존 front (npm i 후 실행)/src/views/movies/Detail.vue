<template>
  <div>
    <h1>DETAIL</h1>
    <movie-detail></movie-detail>
    <movie-recommend></movie-recommend>
    <movie-comment></movie-comment>
  </div>
</template>

<script>
import MovieDetail from '@/components/movies/MovieDetail'
import MovieRecommend from '@/components/movies/MovieRecommend'
import MovieComment from '@/components/movies/MovieComment'

export default {
  name: 'Detail',
  components: {
    MovieDetail,
    MovieRecommend,
    MovieComment,
  }
}
</script>

<style>

</style>