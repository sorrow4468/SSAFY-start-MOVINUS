<template>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="username">ID: </label>
      <input v-model="credentials.username" type="text" id="username" placeholder="아이디">
    </div>
    <div>
      <label for="password">password: </label>
      <input v-model="credentials.password" type="password" id="password" placeholder="비밀번호">
    </div>
    <div>
      <label for="passwordConfirmation">password confirmation: </label>
      <input v-model="credentials.passwordConfirmation" type="password" id="passwordConfirmation" @keyup.enter="signup" placeholder="비밀번호 확인">
    </div>    
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data() {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
      }
    }
  },
  methods: {
    signup() {
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: this.credentials,
      })
      .then(
        this.$router.push({ name:'Login' })
      )
      .catch(
        err => console.log(err)
      )
    }
  }
}
</script>

<style>

</style>