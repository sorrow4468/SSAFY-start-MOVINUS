<template>
  <div>
    <MovieDetailTeaserItem
      v-for="(video, idx) in youtubeVideos.slice(0,1)"
      :key="idx"
      :video="video"
    />
  </div>
</template>

<script>
import MovieDetailTeaserItem from '@/components/movies/MovieDetailTeaserItem'
import { mapState } from 'vuex'

export default {
  name: 'MovieDetailTeaser',
  components: {
    MovieDetailTeaserItem,
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([
      'youtubeVideos'
    ])
  },
  created() {
    this.$store.dispatch('searchYoutube', this.title + 'movie' + 'trailer')
  },
}
</script>

<style>

</style>