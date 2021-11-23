<template>
  <div v-if="comment.review.id===review.id">    
    <b-row v-if="show">
      <b-col cols="2" class="d-flex justify-content-start">{{comment.user.username}}</b-col>
      <b-col cols="5" class="d-flex justify-content-start">{{comment.content}}</b-col>    
      <b-col cols="3" class="d-flex justify-content-start">{{comment.created_at}}</b-col>
      <b-col cols="2" class="d-flex justify-content-start">수정, 삭제</b-col>
    </b-row>
    <div v-else>
      <input v-model="comment.content">
      <button class="btn btn-success" @click="updateComment">댓글수정</button>
    </div>
    <button class="btn btn-success" @click="showToggle">댓글수정</button>
    <button class="btn btn-danger" @click="deleteComment">댓글삭제</button>
  </div>

</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    comment: {
      type: Object,
    },
    review: {
      type: Object,
    }
  },
  data(){
    return {
      show: true,
    }
  },
  methods:{
    showToggle(){
      return this.show = !this.show
    },
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    updateComment(){
      const commentdata = {
        commentId: this.comment.id,
        reviewId: this.review.id,
        content: {
          content: this.comment.content
        },
        token: this.setToken()
      }
      this.$store.dispatch('updateComment',commentdata)
      this.showToggle()
    },
    deleteComment(){
      const commentdata = {
        commentId: this.comment.id,
        token: this.setToken()
      }
      this.$store.dispatch('deleteComment',commentdata)
    }
  }, 
}
</script>

<style>

</style>