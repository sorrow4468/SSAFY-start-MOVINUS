<template>
  <div>
    <h1>ReviewsItem</h1>
    <div v-if="show">
      <p>리뷰: {{review.title}}</p>
      <!-- <p>영화제목: {{review.movie_title}}</p>  -->
      <p>내용: {{review.content}}</p>
      <p>작성시간: {{review.created_at}}</p>
      <p>수정시간: {{review.updated_at}}</p>
      <p>별점: {{review.rank}}</p>
      <button class="btn btn-success" @click="showToggle">수정</button>
    </div>
    <div v-else>
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
      <button class="btn btn-success" @click="updateReview()">수정</button>
    </div>
      <button class="btn btn-danger" @click="deleteReview()">삭제</button>

    <Comments :review="review"/>
  </div>


</template>

<script>
import { mapState } from 'vuex'
import Comments from '@/components/community/Comments'

export default {
  name: 'ReviewsItem',
  components: { 
    Comments,
  },
  data() {
    return {
      show: true
    }
  },
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
      // console.log(this.review.form)
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
    },
    deleteReview(){
      const idsetToken = {
        id: this.review.id,
        token: this.setToken()
      }
      this.$store.dispatch('deleteReview', idsetToken)
    },
    showToggle(){
      return this.show = !this.show
    }
  }
}
</script>

<style>

</style>