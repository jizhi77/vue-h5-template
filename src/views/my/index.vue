<template>
  <div class="page-my-index-wrap">
    <h5-video
      @play="play"
      autoplay
      :showControlBar="false"
      src="https://uatcdn.sharegoodsmall.com/sharegoods/h5/resource/topic/gene/1.mp4"
    >
    </h5-video>
  </div>
</template>
<script>
import { H5Video } from "vue-h5-video";

export default {
  components: {
    H5Video
  },

  data() {
    return {
      sources: ""
    };
  },

  methods: {
    play() {}
  }
};
</script>
<style>
.page-my-index-wrap {
}
</style>
