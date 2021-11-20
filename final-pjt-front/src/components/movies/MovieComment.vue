<template>
  <div>
    <h1>MovieComment</h1>
    <div>
      <input type="text" placeholder="댓글을 작성해주세요" v-model="comment.content">
      <input type="number" v-model="comment.rank">
      <button>댓글작성</button>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'MovieComment',
  computed: {
    ...mapState([
      'comment',
    ])
  }
}
</script>

<style>

</style>