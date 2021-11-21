<template>
  <div>
    <h1>Review 게시판</h1>
    <div v-for="review in reviews" :key="review.id" :review=review>
      <p @click="goReviewDetail(review.id)">{{review.title}}</p>
      <span>{{review.user.username}} </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import ReviewsItem from './ReviewsItem.vue'


export default {
  name: 'Reviews',
  // components: { ReviewsItem },
  methods: {
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    goReviewDetail(reviewId) {
      return this.$router.push({name: 'ReviewsItem',params:{reviewId: reviewId}})
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