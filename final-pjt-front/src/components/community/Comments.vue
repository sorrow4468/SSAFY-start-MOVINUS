<template>
  <div>
    <h1>Comments</h1>
    <comment-form :review="review"></comment-form>
    <comments-item v-for="comment in comments" :key="comment.id"></comments-item>
  </div>
</template>

<script>
import CommentForm from '@/components/community/CommentForm'
import CommentsItem from '@/components/community/CommentsItem'

export default {
  name:'Comments',
  components: {
    CommentForm,
    CommentsItem,
  },
  props:{
    review:{
      type:Object,
    }
  }
}
</script>

<style>

</style>