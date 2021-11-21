<template>
  <div>
    <h1 style="padding-top:220px;">로그인</h1>
    <div class="d-flex justify-content-center">
      <b-form style="width:400px;">        
        <b-form-input class="rounded-pill mt-3" style="height:50px;" id="username" v-model="credentials.username" required placeholder="아이디"></b-form-input>
        <b-form-input class="rounded-pill mt-3" style="height:50px;" v-model="credentials.password" type="password" id="password" aria-describedby="password-help-block" placeholder="비밀번호" @keyup.enter="login"></b-form-input>
        <b-button class="rounded-pill mt-3 w-100" style="height:50px;" @click="login" variant="primary">로그인</b-button>
        <p class="m-3">로그인 후 메인페이지로 이동합니다</p>
      </b-form>
    </div>
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