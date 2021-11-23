<template>
  <div v-if="comment.review.id===review.id">
    
    <div v-if="show">
      <p>{{comment.content}}</p>
      <p>{{comment.user.username}}</p>
      
    
    </div>
    <div v-else>
      <input v-model="comment.content">
      <button class="btn btn-success" @click="updateComment">댓글수정</button>
    </div>
    <p>{{comment.created_at}}</p>
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