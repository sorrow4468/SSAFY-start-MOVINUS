<template>
  <div>
    <h2 class="m-3">이 영화와 장르가 비슷한 영화들</h2>
    <div class="d-flex justify-content-around">      
      <div v-for="findGenreName in findGenreNames" :key="findGenreName.id">
        <div class="fs-3 text-light" @click="getGenreMovies(findGenreName['id'])">{{ findGenreName['name'] }}</div>        
      </div>
    </div>
    <div v-if="randomMovies" class="d-flex">
      <div v-for="randomMovie in randomMovies" :key="randomMovie.id"> 
        <img @click="goMovieDetail(randomMovie)" class="m-3 w-75" :src="imgSrc + randomMovie.poster_path" :alt="randomMovie.title">

        <!-- {{ randomMovie.vote_count }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MovieRecommend',
  computed: {
    ...mapState([
      'genres',
      'randomMovies',      
      'genreMovies',
      'findGenreNames',    
      'imgSrc',  
    ])
  },
  methods: {
    ...mapActions([      
      'getGenreMovies',
      'findGenreName',
      'goMovieDetail',
    ])
  },
  created() {
    this.findGenreName()
  },
}
</script>

<style>

</style>