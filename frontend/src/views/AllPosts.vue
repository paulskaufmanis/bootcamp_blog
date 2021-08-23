<template>
  <div>
    <h1>All posts</h1>
    <div v-for="post in posts" :key="post.title" class="post-wrapper">
      <div class="post-card" :style="{ backgroundImage: `url(${post.image})` }">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-text">{{ post.text }}</p>
      </div>
    </div>

    <!-- <div v-for="post in posts" :key="post.title" class="post-wrapper">
      <Posts :title="post.title" :image="post.image" />
      <button @click="getLatestPosts">get all posts in console</button>
    </div> -->
  </div>
</template>

<script >
// import Posts from "../components/Posts.vue";
import PostService from "../services/PostService.js";
// import data from "../data/db.json";

export default {
  // component: { Posts },
  data() {
    return {
      posts: [],
    };
  },

  // methods: {
  //   getLatestPosts() {
  //     let latestPosts = this.posts
  //       .sort((a, b) => (a.last_nom > b.last_nom && 1) || -1)
  //       .slice(0, 3);
  //     for (let i = 0; i < latestPosts.length; i++) {
  //       console.log(latestPosts[i].title, latestPosts[i].date);
  //       return latestPosts[i].title;
  //     }
  //   },
  // },
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
<style scoped>
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