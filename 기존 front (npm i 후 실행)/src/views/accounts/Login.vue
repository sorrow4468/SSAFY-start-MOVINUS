<template>
  <div>
    <h1>Log In</h1>
    <div>
      <label for="username">ID: </label>
      <input v-model="credentials.username" type="text" id="username">
    </div>
    <div>
      <label for="password">password: </label>
      <input v-model="credentials.password" type="password" id="password">
    </div>
    
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
      username: null,
      password: null,
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.credentials)
    }
  },
  computed: {
    ...mapState([
      'isLogin',
    ])
  }
}
</script>

<style>

</style>