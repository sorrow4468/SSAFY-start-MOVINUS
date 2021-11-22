<template>
  <div v-if="comment.review===review.id">
    <p>{{comment.content}}</p>
    <p>{{comment.updated_at}}</p>
    <button class="btn btn-success">댓글수정</button>
    <button class="btn btn-danger">댓글삭제</button>
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
}
</script>

<style>

</style>