<template>
  <div>
    <img src="@/assets/img/main_background.png" alt="" class="w-100 pt-5">
    <div class="fs-2 position-relative position-start pt-5">다양한 영화들</div>
    <hr>
    <b-row class="justify-content-center">
      <b-col cols="3" class="m-3" v-for="movie in movies" :key="movie.id" style="">
        <div @click="goMovieDetail(movie)" class="banner_img">          
          <img :src="imgSrc+movie.poster_path" alt="포스터이미지"
            style="height:450px; width:300px; object-fit:cover;">
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieList',
  computed:{
    ...mapState([
      'movies',
      'imgSrc'
    ])
  },
  methods:{
    goMovieDetail(movieinfo){
      this.$store.dispatch('goMovieDetail',movieinfo)
    }
  }
  
}
</script>

<style>

</style>