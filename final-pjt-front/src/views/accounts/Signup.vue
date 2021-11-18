<template>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="username">ID: </label>
      <input v-model="credentials.username" type="text" id="username">
    </div>
    <div>
      <label for="password">password: </label>
      <input v-model="credentials.password" type="password" id="password">
    </div>
    <div>
      <label for="passwordConfirmation">password confirmation: </label>
      <input v-model="credentials.passwordConfirmation" type="password" id="passwordConfirmation" @keyup.enter="signup">
    </div>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
      }
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: this.credentials,
      })
        .then(() => {
          // console.log(res)
          this.$router.push({name:'Login'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>