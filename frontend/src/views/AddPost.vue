<template>
  <div>
    <h1>Add new post:</h1>
    <div>
      <form v-on:submit.prevent>
        <label for="title">Title:</label>
        <input type="text" name="title" v-model="newPost.title" />
        <label for="text">Text:</label>
        <textarea name="text" v-model="newPost.text" />
        <label for="image">Image URL:</label>
        <input type="text" name="image" v-model="newPost.image" />
        <button @click="addPost">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
export default {
  data() {
    return {
      newPost: {
        title: "",
        text: "",
        image: "",
        // created_by: "",
        // created_at: "",
      },
    };
  },
  methods: {
    async addPost() {
      await PostService.addPost(this.newPost, this.$store.user);
      this.newPost.title = "";
      this.newPost.text = "";
      this.newPost.image = "";
    },
  },
};
</script>

<style>
textarea {
  width: 300px;
  height: 150px;
}
</style>