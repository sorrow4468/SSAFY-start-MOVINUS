<template>
  <div>
    <h1>ReviewsItem</h1>
    
    <p>리뷰: {{review.title}}</p>
    <!-- <p>영화제목: {{review.movie_title}}</p>  -->
    <p>내용: {{review.content}}</p>
    <p>작성시간: {{review.created_at}}</p>
    <p>수정시간: {{review.updated_at}}</p>
    <p>별점: {{review.rank}}</p>
    <div>
      <p>리뷰제목: <input type="text" v-model="review.title"></p>
      <label for="content">내용: </label>
      <textarea name="content" id="content" cols="30" rows="10" v-model="review.content"></textarea>
      <p>평점: 
        <select v-model="review.rank">
          <option disabled value="">평점</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>    
    </div>

    <button class="btn btn-success" @click="updateReview()">수정</button>
    <button class="btn btn-danger" @click="deleteReview(review)">삭제</button>
    <Comments/>
  </div>


</template>

<script>
import { mapState } from 'vuex'
import Comments from '@/components/community/Comments'

export default {
  components: { 
    Comments,
  },
  
  name: 'ReviewsItem',
  computed:{
    ...mapState([
      'review',
    ])
  },
  methods: {
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    updateReview() {
      console.log(this.review.form)
      const form = {
        id: this.review.id,
        title: this.review.title,
        content: this.review.content,
        rank: this.review.rank,
      }      
      const formsetToken = {
        form: form,
        token: this.setToken()
        
      }
      this.$store.dispatch('updateReview', formsetToken)
      // this.id = null,
      // this.title = null
      // this.content = null
      // this.rank = null
    }
  }
}
</script>

<style>

</style>