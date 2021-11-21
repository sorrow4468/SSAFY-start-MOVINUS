<template>
  <div>
    <h1>ReviewsItem</h1>
    <p>{{review.title}}</p>
    <p>{{review.content}}</p>
    <p>{{review.rank}}</p>
  </div>
</template>

<script>
export default {
  name: 'ReviewsItem',
  props:{
    review:{
      type: Object
    }
  }
}
</script>

<style>

</style>