<template>
  <div>    
    <!-- <b-button pill variant="outline-warning border-3" 
      class="text-light fw-bold fs-6 m-3" 
      @click="toggle">리뷰 작성 열기
    </b-button>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          class="mb-3"          
        >         
          <label id="input-group-1" for="input-1">제목 : </label>
          <b-form-input
            id="input-1"
            v-model="form.title"
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
            v-model="form.content"
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
            v-model="form.rank"
            class="mb-3"
          ></b-form-input>
          <b-form-datalist id="input-list" :options="options"></b-form-datalist>
        </div>

        <b-button type="submit" pill variant="outline-success border-3" class="text-light fw-bold fs-6" @click="createReview">리뷰 작성</b-button>
        <b-button type="reset" pill variant="outline-danger border-3" class="text-light fw-bold fs-6 m-3">초기화</b-button>
      </b-form>   
    </div> -->
    <div>
      <b-button pill variant="outline-warning border-3" 
      class="text-light fw-bold fs-6 m-3" 
      v-b-modal.modal-1>리뷰 작성</b-button>
      <b-modal id="modal-1" title="리뷰 작성">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              class="mb-3"          
            >         
              <label id="input-group-1" for="input-1">제목 : </label>
              <b-form-input
                id="input-1"
                v-model="form.title"
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
                v-model="form.content"
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
                v-model="form.rank"
                class="mb-3"
              ></b-form-input>
              <b-form-datalist id="input-list" :options="options"></b-form-datalist>
            </div>

            <b-button type="submit" pill variant="outline-success border-3" class="fw-bold fs-6" @click="createReview">리뷰 작성</b-button>
            <b-button type="reset" pill variant="outline-danger border-3" class="fw-bold fs-6 m-3">초기화</b-button>
          </b-form>   
        </div>
      </b-modal>
    </div>
    
    
    
    <!-- <p>리뷰제목: <input type="text" v-model="form.title"></p>
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
    <button @click="createReview">리뷰작성</button> -->
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
      },
      ranks: [{ text: '평점', value: null }, '5', '4', '3', '2', '1'],
      show: true,
      options: ['5', '4', '3', '2', '1']
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
    },
    onSubmit(event) {
        event.preventDefault()
        alert('작성하신 리뷰가 등록되었습니다!')
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
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style>

</style>