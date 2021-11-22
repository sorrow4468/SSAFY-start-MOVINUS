<template>
  <div>
    <h1>CommentForm</h1>
    <input type="text" placeholder="댓글을 입력해주세요." v-model="form.content">
    <button class="btn btn-primary" @click="createComment">댓글작성</button>
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
      this.content = null
    }
  }
}
</script>

<style>

</style>