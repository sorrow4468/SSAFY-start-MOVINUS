<template>
  <div>
    <h1>Comments</h1>
    <comment-form></comment-form>
    <comments-item></comments-item>
  </div>
</template>

<script>
import CommentForm from '@/components/community/CommentForm'
import CommentsItem from '@/components/community/CommentsItem'

export default {
  name:'Comment',
  components: {
    CommentForm,
    CommentsItem,
  }
}
</script>

<style>

</style>