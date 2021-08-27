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
.single-post {
  display: flex;
  margin: auto;
  justify-content: center;
  width: 21rem;
  background-color: rgba(192, 192, 192, 0.8);
}
.post-wrapper {
  width: 19rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.post-content {
  background: white;
  padding: 1rem;
}

.post-author {
  font-weight: 600;
  margin-top: 0.5rem;
}

.post-date {
  font-size: smaller;
  margin-bottom: 0.5rem;
}

.back {
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 1rem;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .single-post {
    width: 42rem;
  }
  .post-wrapper {
    width: 40rem;
  }
}

@media only screen and (min-width: 1440px) {
  .single-post {
    width: 62rem;
  }
  .post-wrapper {
    width: 60rem;
  }
}
</style>