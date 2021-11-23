<template>
  <div>
    <h2 class="m-3">이 영화와 장르가 비슷한 영화들</h2>
    <div class="d-flex justify-content-around">             
      <div name="findGenreNames" v-for="(findGenreName,idx) in findGenreNames" :key="idx">
        <div class="fs-3 text-light" @click="getGenreMovies(findGenreName['id'])" id="movieGenre">{{ findGenreName['name'] }}</div>        
      </div>
    </div>
    <div v-if="randomMovies" class="d-flex justify-content-between">
      <div v-for="(randomMovie,idx) in randomMovies.slice(0, 5)" :key="idx"> 
        <img @click="goMovieDetail(randomMovie)" class="m-3 w-100" :src="imgSrc + randomMovie.poster_path" :alt="randomMovie.title"
          style="width:192px; height:292px; object-fit:fill;"
        >

        <!-- {{ randomMovie.vote_count }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import methods from '@/assets/js/event.js'

export default {
  
  name: 'MovieDetailRecommend',
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
    ]),
    // clickRandomMovie() {
    //   document.getElementById('movieGenre').click();
    // },
  },
  created() {
    this.findGenreName()    
  },
  mounted() {
    methods.clickRandomMovie()
  }
  
}
</script>

<style>

</style>