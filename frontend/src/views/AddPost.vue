<template>
  <div>
    <h1>Add new post:</h1>
    <form v-on:submit.prevent>
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" />
      <label for="text">Text:</label>
      <input type="textarea" name="text" id="text" />
      <label for="image">Image URL:</label>
      <input type="text" name="image" id="image" />
    </form>
  </div>
</template>

<script>
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
    clearForm() {
      this.newPost.title = "";
      this.newPost.text = "";
      this.newPost.image = "";
    },
  },
};
</script>