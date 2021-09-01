<template>
  <div class="home">
    <div v-if="!$route.params.id" class="posts">
      <div v-for="post in getLastThree" :key="post.id" class="post-card">
        <router-view :to="'/posts/' + post.id">
          <div
            class="post-background"
            :style="{ backgroundImage: `url(${post.image})` }"
            @click="openPost(post.id)"
          >
            <div class="post-background shadow">
              <h2 class="post-title">{{ post.title }}</h2>
            </div>
          </div>
        </router-view>
      </div>
    </div>
    <div v-if="$route.params.id">
      <Post />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "../components/Post.vue";

export default {
  methods: {
    openPost(id) {
      this.$router.push(`/posts/${id}`);
    },
  },

  components: { Post },

  computed: {
    ...mapGetters(["getLastThree"]),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
.posts {
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 15px 0;
  background: lightgray;
  opacity: 0.95;
}
.post-card {
  width: 100%;
  width: 19rem;
  height: 19rem;
  padding: 15px 30px;
  background: lightgray;
  /* opacity: 0.9; */
}
.post-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 25%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .home {
    align-items: center;
  }
  .posts {
    margin: 0 7%;
    margin-bottom: 35px;
  }

  .post-card {
    display: block;
    width: 40rem;
    height: 10rem;
    padding: 30px;
    margin-bottom: 35px;
  }
  .post-background {
    height: 10rem;
    background: cover;
  }
}
@media (min-width: 1024px) {
  .posts {
    flex-direction: row;
    margin: 5%;
    padding: 15px;
  }
  .post-card {
    padding: 15px;
  }
}
</style>
