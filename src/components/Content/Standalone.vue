<script>
export default {
  name: "Standalone",
  props: {
    imgUrl: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: "basic",
      validator: value =>
        ["basic", "full-width", "align-left", "align-right"].includes(value)
    }
  }
};
</script>

<template>
  <div>
    <div v-if="imgUrl" class="standalone-wrap" :class="layout">
      <img :data-src="imgUrl" />
      <p class="standalone__text" v-html="text" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.standalone-wrap {
  margin: 40px auto;
  width: 82.5%;

  @include for-tablet-landscape-up {
    margin: 140px auto;
  }

  &.full-width {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &.align-left {
    margin-left: 20px;
    width: 72.5%;
  }

  &.align-right {
    margin-right: 20px;
    width: 72.5%;
  }
}

.standalone__text {
  font-family: $fontFacePTSerif;
  font-size: 1.4rem;

  margin: 0 10px;

  @include for-tablet-landscape-up {
    width: 50%;
    margin: auto;
    padding: 10px;
  }
}
</style>