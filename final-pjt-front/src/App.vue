<template>
  <div id="app" class="container">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/Navbar'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    ...mapActions([
      'getMovies',
      'getGenres',
    ])
  },
  computed: {
  },
  created() {
    this.getMovies()
    this.getGenres()
  }
  
}
</script>

<style>
  @import './assets/styles/common.css';
</style>
