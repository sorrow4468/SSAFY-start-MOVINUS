<template>
  <div class="pt-5 m-5">
    <div v-if="reviewShow">
      <p class="fs-1 fw-bold d-flex justify-content-start">{{review.title}}</p>
      <hr style="height:5px;">
      <p class="fs-3 d-flex justify-content-start">{{review.content}}</p>
      <p class="d-flex justify-content-end">{{review.created_at}}</p>
      <p>{{this.date}}</p>
      <hr style="height:5px;">
      <p>평점: {{review.rank}}</p>
      <div>
        <b-button pill variant="outline-warning border-3" 
          class="text-light fw-bold fs-6 m-3" 
          id="show-btn" 
          @click="$bvModal.show('bv-modal-example')"
        >수정
        </b-button>
        <b-button pill variant="outline-danger border-3" 
          class="text-light fw-bold fs-6 m-3" @click="deleteReview()">삭제</b-button>
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title>
            리뷰 수정
          </template>
            <div class="d-block">
              <div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-group-1"
                  class="mb-3"          
                >         
                  <label id="input-group-1" for="input-1">제목 : </label>
                  <b-form-input
                    id="input-1"
                    v-model="review.title"
                    type="text"
                    placeholder="제목을 입력해주세요"
                    required
                    block
                    class="mb-3"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="내용:" label-for="input-2">
                  <b-form-textarea
                    id="input-2"
                    v-model="review.content"
                    placeholder="내용을 입력해주세요"
                    required
                    rows="3"
                    max-rows="6"
                    class="mb-3"
                  ></b-form-textarea>
                </b-form-group>

                <div>
                  <label for="input-with-list">평점</label>
                  <b-form-input list="input-list" id="input-with-list" 
                    placeholder="평점을 입력해주세요"
                    v-model="rank"
                    class="mb-3"
                  ></b-form-input>
                  <b-form-datalist id="input-list" :options="options"></b-form-datalist>
                </div>
                <div class="d-flex justify-content-center">                
                  <b-button type="submit" pill variant="outline-primary border-3" class="fw-bold fs-6 m-2" @click="updateReview()">수정</b-button>
                  <b-button type="reset" pill variant="outline-danger border-3" class="fw-bold fs-6 m-2">초기화</b-button>
                </div>
              </b-form>
            </div>          
          </div>
        </b-modal>
      </div>
    </div>
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
      reviewShow: true,      
      show: true,
      rank: null,
      options: ['5', '4', '3', '2', '1'],
    }
  },
  computed:{
    ...mapState([
      'review',
    ]),        
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
        rank: this.rank,
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
    onSubmit(event) {
        event.preventDefault()
        alert('리뷰가 작성하신 내용으로 수정되었습니다!')
      },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = null
      this.form.content = null
      this.form.rank = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style>

</style>