<script>
export default {
  name: "Trinity",
  props: {
    imgUrls: {
      type: Array,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: "text-align-left",
      validator: value =>
        ["text-align-left", "text-align-right"].includes(value)
    }
  }
};
</script>

<template functional>
  <div>
    <div class="trinity-wrap" v-if="props.imgUrls">
      <img class="trinity__img" :data-src="url" v-for="url in props.imgUrls.slice(0,2)" :key="url" />
      <div class="trinity__img-meta" :class="props.layout">
        <img
          class="trinity__img"
          :data-src="url"
          v-for="url in props.imgUrls.slice(2,3)"
          :key="url"
        />
        <p class="trinity__text" v-html="props.text"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.trinity-wrap {
  margin: 100px auto;

  @include for-tablet-landscape-up {
    margin: 260px auto;
  }
}

.trinity__img {
  margin: 10px;

  &:nth-of-type(1) {
    width: 80%;

    @include for-tablet-landscape-up {
      width: 50%;
    }
  }

  &:nth-of-type(2) {
    width: 72%;

    @include for-tablet-landscape-up {
      width: 40%;
    }
  }
}

.trinity__img-meta {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @include for-tablet-landscape-up {
    flex-direction: row;
    align-items: flex-start;
  }

  .trinity__img {
    width: 76%;

    @include for-tablet-landscape-up {
      width: 58%;
    }
  }

  &.text-align-right {
    flex-direction: row-reverse;
  }
}

.trinity__text {
  font-family: $fontFacePTSerif;
  font-size: 1.4rem;
  margin: 0 10px;
  width: 50%;

  @include for-tablet-landscape-up {
    width: 20%;
    padding: 10px;
    text-align: left;
  }
}
</style>