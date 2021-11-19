<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link :to="{ name:'MovieList' }">Movies</router-link>|
      <router-link :to="{ name:'Login' }">Log In</router-link>|
      <router-link :to="{ name:'Signup' }">Sign Up</router-link> |
      <router-link @click.native="logout()" to="#">Log Out</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'logout',
      'login',
      'getMovies',
      'getGenres',
    ])
  },
  computed: {
    ...mapState([
      'isLogin',
    ])
  },
  created() {
    this.getMovies()
    this.getGenres()
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
