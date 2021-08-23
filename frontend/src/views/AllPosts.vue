<template>
  <div>
    <h1>All posts</h1>
    <div v-for="post in posts" :key="post.title" class="post-wrapper">
      <div
        class="post-card"
        :style="{ backgroundImage: `url(${post.image})` }"
      ></div>
      <div class="post-content">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-text">{{ post.text }}</p>
        <p class="post-date">{{ post.dateCreated }}</p>
      </div>
    </div>
  </div>
</template>

<script >
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
<style scoped>
.post-wrapper {
  display: flex;
  justify-content: center;
}
.post-card {
  height: 10rem;
  width: 15rem;
  size: fit-content;
  margin: 1rem;
}

.post-content {
  width: 24rem;
}
</style>