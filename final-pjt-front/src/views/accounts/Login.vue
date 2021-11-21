<template>
  <div>
    <h2>Login</h2>
    <div>
      <label for="username">ID: </label>
      <input v-model="credentials.username" type="text" id="username" placeholder="아이디">
    </div>
    <div>
      <label for="password">password: </label>
      <input v-model="credentials.password" type="password" id="password" placeholder="비밀번호">
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>