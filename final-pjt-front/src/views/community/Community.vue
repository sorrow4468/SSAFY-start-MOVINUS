<template>
  <div>
    <h1>Community</h1>
    <Reviews/>
    <ReviewForm/>
  </div>
</template>

<script>
import Reviews from '@/components/community/Reviews'
import ReviewForm from '@/components/community/ReviewForm'

export default {
  name:'Community',
  components: {
    Reviews,
    ReviewForm
  }
}
</script>

<style>

</style>