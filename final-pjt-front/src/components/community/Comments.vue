<template>
  <div class="">
    <div class="fw-bold fs-3 d-flex justify-content-start">댓글</div>
    <CommentForm :review="review"/>
    <b-row>
      <b-col cols="2" class="d-flex justify-content-start">작성자</b-col>
      <b-col cols="5" class="d-flex justify-content-start">내용</b-col>
      <b-col cols="3" class="d-flex justify-content-start">작성시간</b-col>
      <b-col cols="2" class="d-flex justify-content-start"></b-col>
    </b-row>
    <hr style="height:5px;">
    <CommentsItem v-for="comment in comments" :key="comment.id" :comment="comment" :review="review"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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
    ]),
    ...mapGetters([
      'comments'
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