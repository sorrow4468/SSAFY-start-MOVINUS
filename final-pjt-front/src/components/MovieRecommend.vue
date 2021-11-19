<template>
  <div>
    <h1>MovieRecommend</h1>
    <p>이 영화와 장르가 비슷한 영화들</p>
    <!-- <template v-for="movie_genre in movie.genres">
      <template v-for="genre in genres" v-if="movie_genre === genre.id">
      
        {{ genre.name }} 
        
      </template> -->
    <div v-for="findGenreName in findGenreNames" :key="findGenreName.id">
      <p @click="getGenreMovies(findGenreName['id'])">{{ findGenreName['name'] }}</p>
    </div>
    <!-- </template> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'MovieRecommend',  
  methods: {
    ...mapActions([
      'findGenreName',
      'getGenreMovies',
    ])
  },
  computed: {
    ...mapState([
      'movie',
      'imgSrc',
      'genres',
      'findGenreNames',
      'genreMovies',
    ]),
  },  
  created() {
    this.findGenreName()
  }
}
</script>

<style>

</style>