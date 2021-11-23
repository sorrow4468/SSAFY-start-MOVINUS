<template>
  <div class="">
    <b-form-input type="text" placeholder="댓글을 입력해주세요." v-model="form.content" @keyup.enter="createComment" class="w-100 mt-2 mb-1"></b-form-input>
    <b-button pill variant="outline-success border-3" 
        class="text-light fw-bold fs-6 mt-3 mb-3 w-100" @click="createComment">작성</b-button>
  </div>
</template>

<script>
export default {
  name:'CommentForm',
  props:{
    review:{
      type:Object
    }
  },
  data(){
    return {
      form:{
        content:null,
      }
    }
  },
  methods:{
     setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    createComment() {
      const formsetToken = {
        content: this.form,
        reviewId: this.review.id,
        token: this.setToken()
      }
      this.$store.dispatch('createComment', formsetToken)
      this.form.content = null
    }
  }
}
</script>

<style>

</style>