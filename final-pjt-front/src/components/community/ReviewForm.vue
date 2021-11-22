<template>
  <div>
    <!-- <h1>ReviewForm</h1> -->
    <p>리뷰제목: <input type="text" v-model="form.title"></p>
    <!-- <p>영화제목: <input type="text"></p> -->
    <label for="content">내용: </label>
    <textarea name="content" id="content" cols="30" rows="10" v-model="form.content"></textarea>
    <p>평점: 
      <select v-model="form.rank">
        <option disabled value="">평점</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>    
    <button @click="createReview">리뷰작성</button>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  data(){
    return{
      form: {
        title: null,
        content: null,
        rank: null,
      }
    }
  },
  methods:{
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    createReview() {
      const formsetToken = {
        form: this.form,
        token: this.setToken()
      }
      this.$store.dispatch('createReview', formsetToken)
      this.title = null
      this.content = null
      this.rank = null
    }
  }
}
</script>

<style>

</style>