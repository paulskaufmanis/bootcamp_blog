<template>
  <div class="single-post">
    <div class="post-wrapper">
      <img :src="thisPost().image" alt="" />
      <div class="post-content">
        <h1>{{ thisPost().title }}</h1>
        <p class="post-author">Author: {{ thisPost().created_by }}</p>
        <p class="post-date">Date: {{ thisPost().created_at }}</p>
        <p>{{ thisPost().text }}</p>
      </div>
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


</style>