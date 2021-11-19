<template>
  <div>
    <h1>MovieRecommend</h1>
    <p>이 영화와 장르가 비슷한 영화들</p>
    <!-- <template v-for="movie_genre in movie.genres">
      <template v-for="genre in genres" v-if="movie_genre === genre.id">
      
        {{ genre.name }} 
        
      </template> -->
    <div v-for="findGenre in findGenres" :key="findGenre.id">
      {{ findGenre }}  
    </div>
    <!-- </template> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieRecommend',
  data() {
    return {
      findGenres: []  
    }
  },
  computed: {
    ...mapState([
      'movie',
      'imgSrc',
      'genres',
    ]),
  },
  methods: {    
    findGenre() {
      this.genres.forEach(genre => {
        this.movie.genres.forEach(movie_genre => {
          if (movie_genre === genre['id']) {
            // console.log(genre['name'])
            this.findGenres.push(genre['name'])
          }
        })
      })
      return this.findGenres
    }
  },
  created() {
    this.findGenre()
  }
}
</script>

<style>

</style>