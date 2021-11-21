<template>
  <div>
    <pick-like-genres v-if="isLogin && !isPicked"></pick-like-genres>
    <ul>
      <li v-for="movie in movies" :key="movie.id">        
        <h1 >{{ movie.title }}</h1>
        <img :src="imgSrc+movie.poster_path" alt="포스터이미지"
          @click="getDetail(movie)">
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import PickLikeGenres from '@/components/accounts/PickLikeGenres'


export default {
  components: { PickLikeGenres },
  name: 'MovieList',
  methods: {
    ...mapActions([
      'getDetail',
    ]),
    // pickLikeGenre() {
      
    // }
  },
  computed: {
    ...mapState([
      'movies',
      'imgSrc',
      'isLogin',
      'isPicked'
    ])
  },
  // created(){
  //   this.pickLikeGenre()
  // }
}
</script>

<style>

</style>