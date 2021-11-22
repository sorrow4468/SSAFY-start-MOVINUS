<template>
  <div>
    <h1>ReviewsItem</h1>
    
    <p>리뷰: {{review.title}}</p>
    <!-- <p>영화제목: {{review.movie_title}}</p>  -->
    <p>내용: {{review.content}}</p>
    <p>작성시간: {{review.created_at}}</p>
    <p>수정시간: {{review.updated_at}}</p>
    <p>별점: {{review.rank}}</p>
    <button class="btn btn-success" @click="updateReview(review)">수정</button>
    <button class="btn btn-danger" @click="deleteReview(review)">삭제</button>
    <Comments/>
  </div>


</template>

<script>
import { mapState } from 'vuex'
import Comments from '@/components/community/Comments'

export default {
  components: { Comments },
  name: 'ReviewsItem',
  computed:{
    ...mapState([
      'review',
    ])
  },
  mathods: {
    // updatdeReview() {
    //   const 
    // }
  }
}
</script>

<style>

</style>