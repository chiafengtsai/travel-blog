<script>
import blogContent from "./fixtures/blog-content";

export default {
  name: "App",
  components: {
    Primary: () => import("./components/Content/Primary"),
    Trinity: () => import("./components/Content/Trinity"),
    Standalone: () => import("./components/Content/Standalone"),
    Hero: () => import("./components/Hero/Hero"),
    Intro: () => import("./components/Content/Intro"),
    Gallery: () => import("./components/Content/Gallery"),
    Video: () => import("./components/Content/Video")
  },
  computed: {
    blogContent() {
      return blogContent;
    }
  }
};
</script>


<template>
  <div>
    <div id="app" v-lazy-container="{ selector: 'img',}">
      <template v-for="(item, index) in blogContent">
        <component
          :title="item.title"
          :subtitle="item.subtitle"
          :is="item.name"
          :imgUrl="item.url"
          :imgUrls="item.imgUrls"
          :key="index"
          :dayNumber="item.day"
          :text="item.text"
          :layout="item.type"
          :videoUrl="item.videoUrl"
          :showVideo="item.showVideo"
        />
      </template>
    </div>
  </div>
</template>


<style lang="scss">
@import "./assets/main.scss";
</style>
