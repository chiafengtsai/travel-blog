<script>
export default {
  name: "Hero",
  props: {
    imgUrl: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<template functional>
  <div class="hero-wrap" v-if="props.imgUrl">
    <div class="hero__header">
      <p class="hero-subtitle">{{props.subtitle}}</p>
      <h1 class="hero-title">{{props.title}}</h1>
    </div>
    <img class="hero-image" :data-src="props.imgUrl" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.hero-wrap {
  position: relative;
  margin-top: 100px;

  @include for-tablet-landscape-up {
    margin-top: 230px;
  }
}

.hero__header {
  position: absolute;
  z-index: 1;
  text-align: center;
  width: 100%;
  margin: -70px 0 0;

  @include for-tablet-landscape-up {
    margin: -130px 0 0;
  }
}

.hero-title {
  @include title;
}

.hero-subtitle {
  @include subtitle;
}

.hero-image {
  margin: auto;
  width: 100%;

  @include for-tablet-landscape-up {
    width: 82.5%;
    max-width: 1440px;
  }
}
</style>