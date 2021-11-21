<template>
  <div>
    <h1>ReviewsItem</h1>
    
    <p>리뷰: {{review.title}}</p>
    <!-- <p>영화제목: {{review.movie_title}}</p>  -->
    <p>내용: {{review.content}}</p>
    <p>작성시간: {{review.created_at}}</p>
    <p>수정시간: {{review.updated_at}}</p>
    <p>별점: {{review.rank}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReviewsItem',
  computed:{
    ...mapState([
      'review',
    ])
  }
}
</script>

<style>

</style>