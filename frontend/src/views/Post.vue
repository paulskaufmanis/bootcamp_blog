<template>
  <div>
    <div class="post-wrapper">
      <img :src="thisPost().image" alt="" />
      <h1>{{ thisPost().title }}</h1>
      <p>Date: {{ thisPost().created_at }}</p>
      <p>Author: {{ thisPost().created_by }}</p>
      <p>{{ thisPost().text }}</p>
      <p class="back" @click="goBack">Back</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    thisPost() {
      const post = this.posts.find(({ id }) => this.$route.params.id == id);
      return post;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style scoped>
.post-wrapper {
  width: 40rem;
  display: flex;
  flex-direction: column;
}
</style>