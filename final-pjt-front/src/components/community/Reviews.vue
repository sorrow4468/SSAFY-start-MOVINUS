<template>
  <div>
    <h1>Review 게시판</h1>
    <div v-for="review in reviews" :key="review.id" :review="review">
      <p @click="goReviewDetail(review)">{{review.title}}</p>
      <span>{{review.user}} </span>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// import ReviewsItem from './ReviewsItem.vue'


export default {
  name: 'Reviews',
  components: {
    // ReviewsItem, 
  },
  methods: {
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    goReviewDetail(reviewinfo) {
      this.$store.dispatch('goReviewDetail',reviewinfo)
    }
  },
  computed: {
    ...mapState([
      'reviews'
    ])
  },
  created() {
    this.$store.dispatch('getReviews',this.setToken())
  }

}
</script>

<style>

</style>