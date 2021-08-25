<template>
  <div
    class="post-card"
    :style="{ backgroundImage: `url(${newPost.image})` }"
    :v-on:click="clicker"
  >
    <h3 class="post-title">{{ newPost.title }}</h3>
    <p class="post-text">{{ newPost.text }}</p>
  </div>
</template>

<script >
export default {
  data() {
    return {
      newPost: {
        id: "",
        title: "",
        text: "",
        image: "",
        created_by: "",
        created_at: "",
      },
    };
  },
  name: "Posts",
  props: {
    title: String,
    text: String,
    image: String,
  },
};
</script>

<style scoped>
.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  /* background: gray; */
  width: 100vw;
}
.post {
  padding: 15px;
  width: 19rem;
  height: 19rem;
  overflow: hidden;
  display: inline-block;
  line-height: 1.3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.post:hover {
  cursor: pointer;
}
.post-article {
  height: 123px;
  overflow: hidden;
}
</style>