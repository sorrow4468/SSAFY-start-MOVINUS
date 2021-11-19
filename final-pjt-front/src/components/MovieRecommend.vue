<template>
  <div>
    <h1>MovieRecommend</h1>
    <p>이 영화와 장르가 비슷한 영화들</p>
    <p>{{ movie.genres }}</p>
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
    ])
  }
}
</script>

<style>

</style>