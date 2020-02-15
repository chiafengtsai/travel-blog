<script>
export default {
  name: "Video",
  props: {
    videoUrl: {
      type: String,
      default: null
    }
  }
};
</script>

<template functional>
  <div class="video-wrap">
    <video muted autoplay :src="props.videoUrl" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";

.video-wrap {
  display: none;

  @include for-tablet-landscape-up {
    display: block;
    margin: 200px auto;
  }
}
</style>