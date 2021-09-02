<template>
  <div class="single-post">
    <div class="post-wrapper">
      <img :src="thisPost().image" alt="" />
      <div class="post-content">
        <h1>{{ thisPost().title }}</h1>
        <div class="post-auth-date">
          <p class="post-author">Author: {{ thisPost().created_by }}</p>
          <p class="post-date">Date: {{ thisPost().created_at }}</p>
        </div>
        <p>{{ thisPost().text }}</p>
        <p class="back" @click="goBack">Back</p>
      </div>
      <div @click="editPost">Edit</div>
      <div @click="deletePost">Delete</div>
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
    deletePost() {
      const id = this.$router.currentRoute._value.params.id;
      this.$store.commit("deletePost", id);
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.single-post {
  margin-bottom: 5rem;
}
.post-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
}
img {
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  /* margin: 55px 25px 25px 25px; */
}
h1 {
  font-size: 24px;
}

.post-content {
  padding: 0 20px;
}

.post-auth-date {
  margin: 15px 0;
}
.post-content > p {
  font-size: 14px;
}

.post-auth-date > p {
  font-size: 12px;
}

.back {
  padding: 6px 18px;
  background: gray;
  margin: 20px auto;
  border-radius: 8px;
  cursor: pointer;
}

@media (min-width: 1240px) {
  img {
    width: 80%;
    margin: 1.5rem auto;
  }

  .post-content {
    width: 80%;
    margin: auto;
  }
}
</style>
