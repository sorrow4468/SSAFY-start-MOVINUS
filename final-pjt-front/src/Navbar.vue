<template>
  <div id="nav">
    <!-- <ul>
      <li>
        <router-link :to="{ name:'MovieList' }">홈</router-link> |
      </li>
      <li>
        <router-link :to="{ name:'Community' }">커뮤니티</router-link> |
      </li>
      <li>
        <router-link :to="{ name:'Recommend' }">영화 추천</router-link> |
      </li>
    </ul> -->
      <router-link :to="{ name:'MovieList' }">홈</router-link> |
      <router-link :to="{ name:'Community' }">커뮤니티</router-link> |
      <router-link :to="{ name:'Recommend' }">영화 추천</router-link> |
    
    <span v-if="isLogin">
      <router-link @click.native="logout()" to="#">로그아웃</router-link>
    </span>
    <span v-if="!isLogin">
      <router-link :to="{ name:'Login' }">로그인</router-link> |
      <router-link :to="{ name:'Signup' }">회원가입</router-link>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    getToken() {
      const token = localStorage.getItem('jwt')
      return token
    },
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  
}
</script>

<style>

</style>