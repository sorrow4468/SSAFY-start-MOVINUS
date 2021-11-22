<template>
  <div>
    <h1>영화 추천</h1>
    <div v-for="genre in genres" :key="genre.id" class="d-flex">
      <label :for="genre['id']">{{ genre['name'] }} </label>
      <input type="checkbox" :id="genre['id']" v-model="genre['isLiked']">
      <div v-if="genre['isLiked']">
        
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
      'genreMovies',
      'randomMovies'      
    ])
  },
  methods: {
    ...mapActions([      
      'getGenreMovies',
    ])
  },
  created() {
    this.getGenreMovies()
  }
}
</script>

<style>

</style>