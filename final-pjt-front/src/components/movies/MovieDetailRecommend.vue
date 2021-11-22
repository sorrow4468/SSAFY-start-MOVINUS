<template>
  <div>
    <p>이 영화와 장르가 비슷한 영화들</p>
    <div v-for="findGenreName in findGenreNames" :key="findGenreName.id">
      <p @click="getGenreMovies(findGenreName['id'])">{{ findGenreName['name'] }}</p>
    </div>
    <div v-if="randomMovies">
      <!-- <movie-filter-genre> -->
      <div v-for="randomMovie in randomMovies" :key="randomMovie.id"> 
        {{ randomMovie.title }}
        {{ randomMovie.vote_count }}
        <!-- {{ randomMovie.like_users|length }} -->
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
    ])
  },
  methods: {
    ...mapActions([      
      'getGenreMovies',
      'findGenreName',
    ])
  },
  created() {
    this.findGenreName()
  },
}
</script>

<style>

</style>