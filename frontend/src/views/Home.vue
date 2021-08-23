<template>
  <div class="home">
    <h1>This home page</h1>
    <div class="post-cards">
      <div v-for="post in getLastThree" :key="post.id" class="post-wrapper">
        <div
          class="post-card"
          :style="{ backgroundImage: `url(${post.image})` }"
        >
          <h3 class="post-title">{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLastThree"]),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style>
.post-cards {
  display: flex;
  justify-content: center;
}

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
