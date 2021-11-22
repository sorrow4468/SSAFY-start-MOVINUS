<template>
  <div>
    <h1>Comments</h1>
    {{comments}}
    <comment-form :review="review"></comment-form>
    <div>      
      <comments-item v-for="comment in comments" :key="comment.id" :comment="comment"></comments-item>    
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommentForm from '@/components/community/CommentForm'
import CommentsItem from '@/components/community/CommentsItem'

export default {
  name:'Comments',
  components: {
    CommentForm,
    CommentsItem,
  },  
  props:{
    review:{
      type:Object,
    }
  },
  computed: {
    ...mapState([
      'comments',
    ])
  },
  methods:{
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    getComments(){
      const reviewIdsetToken = {
        reviewId: this.review.id,
        token: this.setToken()
      }
      this.$store.dispatch('getComments',reviewIdsetToken)
    }
  },
  created(){
    this.getComments()
  }
}
</script>

<style>

</style>