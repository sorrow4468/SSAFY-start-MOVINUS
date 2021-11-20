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
      <input v-model="credentials.passwordConfirmation" type="password" id="passwordConfirmation" @keyup.enter="signup()">
    </div>    
    <!-- <pick-like-genres></pick-like-genres> -->
    <button @click="signup()">회원가입</button>
  </div>
</template>

<script>
// import PickLikeGenres from '@/components/accounts/PickLikeGenres'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  // components: {
  //   PickLikeGenres,
  // },  
  methods: {
    ...mapActions([
      'signup',
    ])
  },
  computed: {
    ...mapState([
      'credentials',
    ])
  }
}
</script>

<style>

</style>