<template>
  <div>
    <h1>좋아하는 장르를 골라골라</h1>
    <div v-for="genre in credentials.likeGenres" :key="genre.id">      
      <label for="genre">{{ genre['name'] }} </label>
      <input type="checkbox" id="genre" 
        v-model="genre['isLiked']"
        >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  name: 'PickLikeGenres',
  computed: {
    ...mapState([
      'credentials',
      'genres',
    ])
  }
}
</script>

<style>

</style>