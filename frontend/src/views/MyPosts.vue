<template>
  <div>
    <div v-if="!$route.params.id">
      <h1>My posts</h1>
      <div v-for="post in myPosts" :key="post.title" class="post-wrapper">
        <router-view :to="'/my-posts/' + post.id">
          <div
            class="post-card"
            :style="{ backgroundImage: `url(${post.image})` }"
            @click="openPost(post.id)"
          ></div>
          <div class="post-content">
            <h3 class="post-title">{{ post.title }}</h3>

            <p class="post-text">{{ post.text }}</p>
            <p class="post-date">{{ post.dateCreated }}</p>
          </div>
        </router-view>
      </div>
    </div>

    <div v-if="$route.params.id">
      <Post />
    </div>
  </div>
</template>

<script >
import { mapState } from "vuex";
import Post from "../components/Post.vue";

export default {
  methods: {
    openPost(id) {
      this.$router.push(`/posts/${id}`);
    },
  },
  components: { Post },
  computed: {
    ...mapState(["myPosts"]),
  },
//   findPostbyId() {
//     const post = this.posts.find(({ id }) => this.$route.params.id == id);
//     return JSON.stringify(post);
//   },
  mounted() {
    this.$store.dispatch("getMyPosts");
  },
};
</script>
<style scoped>
.post-wrapper {
  /* display: flex;
  justify-content: center; */
}
.post-card {
  /* height: 10rem;
  width: 15rem;
  size: fit-content;
  margin: 1rem; */
  /* padding: 20px; */
}

.post-content {
  /* width: 24rem; */
}
</style>