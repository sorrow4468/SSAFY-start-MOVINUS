<template>
  <div>
    <!-- <p>{{comment.content}}</p>
    <p>{{comment.updated_at}}</p> -->
  </div>

</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    comment: {
      type: Object,
    }
  },  
}
</script>

<style>

</style>