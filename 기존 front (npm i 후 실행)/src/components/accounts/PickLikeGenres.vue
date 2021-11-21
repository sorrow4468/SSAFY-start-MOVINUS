<template>
  <div>
    <h1>좋아하는 장르를 골라골라</h1>
    <div v-for="genre in credentials.likeGenres" :key="genre.id">      
      <label for="genre">{{ genre['name'] }} </label>
      <input type="checkbox" id="genre" 
        v-model="genre['isLiked']"
        >
    </div>
    <button @clikck="isPicked">선택</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'PickLikeGenres',
  computed: {
    ...mapState([
      'credentials',
      'genres',
      'isPicked',
    ]),
    ...mapGetters([
      'isPicked',
    ])
  },
  
}
</script>

<style>

</style>