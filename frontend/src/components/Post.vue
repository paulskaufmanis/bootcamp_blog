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
  .single-post{
    width: 100vw;
  }
  .post-wrapper{
    width:100%;
    background-color: lightgray;
  }

  img {
    height:50vh;
  }
  .post-content{
    padding:20px;
  }
  .post-auth-date{
    margin: 15px 0;
  }
  .post-auth-date > p{
    font-size: 12px;
  }
  .back {
    padding: 6px 18px;
    background: gray;
    margin: 20px;
    border-radius: 8px;
  }

  @media (max-width: 375px)
  and (min-width: 1024px){
    .post-wrapper{
      width: 86%;
    }
  }


</style>