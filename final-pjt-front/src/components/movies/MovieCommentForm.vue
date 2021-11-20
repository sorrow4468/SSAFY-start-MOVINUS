<template>
  <div>
    <input type="text" placeholder="댓글을 작성해주세요" v-model="comment.content">
      <input type="number" v-model="comment.rank">
      <button @click="createComment(comment)">댓글작성</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  name: 'MovieCommentForm',
  computed: {
    ...mapState([
      'comment',
    ])
  },
  methods: {
    ...mapActions([
      'createComment',
      'setToken'
    ])
  },
  // created(){
  //   this.setToken()
  // }
}
</script>

<style>

</style>