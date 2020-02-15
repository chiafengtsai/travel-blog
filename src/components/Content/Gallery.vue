<script>
export default {
  name: "Gallery",
  props: {
    imgUrls: {
      type: Array,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
};
</script>

<template functional>
  <div>
    <div class="gallery-wrap">
      <img class="gallery__img" :data-src="url" v-for="url in props.imgUrls" :key="url" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.gallery-wrap {
  margin: 10px;
  display: flex;
  flex-direction: column;

  @include for-tablet-landscape-up {
    margin: 100px 40px;
  }
}

.gallery__img {
  margin: 20px auto;
  width: 100%;

  @include for-tablet-landscape-up {
    margin: 20px;
  }

  @include for-tablet-landscape-up {
    width: 60%;
  }

  &:nth-of-type(5n + 1) {
    align-self: flex-start;
  }

  &:nth-of-type(5n + 2) {
    align-self: flex-end;
  }

  &:nth-of-type(5n + 3) {
    align-self: center;
  }

  &:nth-of-type(5n + 4) {
    margin-top: 0;
    align-self: flex-start;

    @include for-tablet-landscape-up {
      margin-top: 100px;
    }
  }

  &:nth-of-type(5n) {
    align-self: flex-end;
  }
}
</style>