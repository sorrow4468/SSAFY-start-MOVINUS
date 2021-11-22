<template>
  <b-navbar type="dark" variant="black" fixed="top" id="nav" class="d-flex justify-content-between">
    <div> 
      <router-link :to="{ name:'MovieList' }" class="fs-2 text-decoration-none">홈</router-link> |       
      <router-link :to="{ name:'Community' }" class="fs-4 text-decoration-none">커뮤니티</router-link> | 
      <router-link :to="{ name:'Recommend' }" class="fs-4 text-decoration-none">영화추천</router-link>
    </div>
    <div class="position-absolute translate-middle top-50 start-50">
      <router-link :to="{ name:'MovieList' }" class="fs-2 text-decoration-none">
        MOVINUS
      </router-link>
    </div>
    <div>      
      <span v-if="isLogin">
        <router-link @click.native="logout()" to="#" class="fs-5 text-decoration-none">로그아웃</router-link>
      </span>
      <span v-if="!isLogin">
        <router-link :to="{ name:'Login' }" class="fs-5 text-decoration-none">로그인</router-link> | 
        <router-link :to="{ name:'Signup' }" class="fs-5 text-decoration-none">회원가입</router-link>
      </span>
    </div>
  </b-navbar>
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
  @import './assets/styles/common.css';
</style>
