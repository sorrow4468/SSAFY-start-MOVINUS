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
export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: this.credentials,
      })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style>

</style>