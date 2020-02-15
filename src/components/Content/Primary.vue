<script>
export default {
  name: "Primary",
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    dayNumber: {
      type: Number,
      required: true
    },
    showVideo: {
      type: Boolean,
      default: false
    },
    videoUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="primary-wrap">
    <div class="primary__header">
      <p class="primary__subtitle">day</p>
      <h2 class="primary__title">0{{dayNumber}}</h2>
    </div>
    <video tabindex="-1" autoplay muted loop v-if="showVideo" :src="videoUrl"></video>
    <img :data-src="imgUrl" v-else />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.primary-wrap {
  position: relative;
  margin: 10px;

  @include for-tablet-landscape-up {
    max-width: 1280px;
    margin: auto;
  }
}

video {
  width: 100%;
}

.primary__header {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  background-color: white;
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;

  @include for-tablet-landscape-up {
    width: 200px;
    height: 200px;
  }
}

.primary__subtitle {
  text-transform: uppercase;
  @include subtitle;
}

h2 {
  @include title;
}
</style>