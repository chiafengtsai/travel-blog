<script>
export default {
  name: "Intro",
  props: {
    text: {
      type: String,
      default: null
    }
  }
};
</script>

<template functional>
  <div class="intro-wrap">
    <p class="intro__text" v-if="props.text" v-html="props.text"></p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.intro-wrap {
  margin: 80px auto;

  @include for-tablet-landscape-up {
    margin: 160px auto;
  }
}

.intro__text {
  font-family: $fontFacePTSerif;
  text-align: left;
  max-width: 584px;
  display: block;
  line-height: 1.8;
  margin: 0 10px;

  @include for-tablet-landscape-up {
    margin: 0 auto;
  }
}
</style>