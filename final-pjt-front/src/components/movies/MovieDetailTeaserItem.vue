<template>
  <div>
    <iframe :src="videoURL" frameborder="0" style="width:480px; height:220px;" class="me-4"></iframe>
  </div>
</template>

<script>
export default {
  name: 'MovieDetailTeaserItem',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgSrc() {
      return this.video.snippet.thumbnails.high.url
    },
    videoURL: function () {
      const { videoId } = this.video.id
      return `https://www.youtube.com/embed/${videoId}`
    },
  }
}
</script>

<style>

</style>