<template>
  <div class="home">
    <h1>This home page</h1>
    <div v-for="post in posts" :key="post.title" class="post-wrapper">
      <div class="post-card" :style="{ backgroundImage: `url(${post.image})` }">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-text">{{ post.text }}</p>
      </div>
    </div>

    <!-- <Posts
      v-for="post in posts"
      :title="post.title"
      :img="post.image"
      :key="post.title"
    /> -->

    <!-- v-for="post in posts" -->
    <!-- :title="post.title" -->
    <!-- :img="post.image" -->
    <!-- :key="post.title" -->
    <!-- @click="clicker" -->

    <!-- <template v-for="item in items.slice(0, 3)"> -->
  </div>
</template>

<script>
// import Posts from "../components/Posts.vue";
import PostService from "../services/PostService.js";

export default {
  name: "Home",
  // components: { Posts },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    clicker() {
      console.log("post clicked");
    },
  },
  async created() {
    try {
      await PostService.getPosts(this.posts);
      console.log(this.posts);
    } catch (err) {
      console.log(err.message);
    }
  },
};
</script>

<style>
.post-wrapper {
  display: flex;
  justify-content: center;
}
.post-card {
  height: 10rem;
  width: 40rem;
  size: fit-content;
  margin: 1rem;
}
</style>
