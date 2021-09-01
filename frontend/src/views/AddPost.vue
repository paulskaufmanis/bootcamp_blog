<template>
  <!-- <div>
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
    </div> -->
  <div class="add-post-wrapper">
    <div>
      <form autocomplete="off" v-on:submit.prevent>
        <div class="input">
          <label for="title"></label>
          <input
            type="text"
            name="title"
            placeholder="Write title"
            v-model="newPost.title"
          />
        </div>

        <div class="input">
          <label for="text"></label>
          <textarea
            name="text"
            placeholder="Say your thoughts...."
            v-model="newPost.text"
          />
        </div>

        <div class="input">
          <label for="image"></label>
          <input
            type="text"
            name="image"
            placeholder="Add image URL:"
            v-model="newPost.image"
          />
        </div>

        <button @click="addPost">Publish your post</button>
        <span>Loading post...</span>
        <div class="loader"></div>
        <!-- <span></span> -->
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
        created_by: this.$store.state.user.name,
        created_at: "",
      },
    };
  },
  methods: {
    async addPost() {
      await PostService.addPost(this.newPost);
      this.newPost.title = "";
      this.newPost.text = "";
      this.newPost.image = "";
      this.newPost.created_by = "";
    },
  },
};
</script>

<style scoped>
textarea {
  width: 300px;
  height: 150px;
  resize: none;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 35px 0;
  background: lightgray;
  opacity: 0.92;
  padding: 35px;
}
input,
textarea {
  padding: 8px 16px;
  width: 100%;
}
input:focus,
input:active {
  outline: none;
  border: none;
}
::placeholder {
  font-family: "Poppins";
  font-size: 12px;
}
.input {
  padding: 4px;
}
.loader {
  height: 15px;
  border-radius: 10px;
  margin: 20px;
  left: 28%;
}
.loader {
  position: relative;
  width: 40%;
  background: rgb(7, 246, 250);
  box-shadow: 0 0 20px blue;
  animation: animate 3s forwards;
}

@keyframes animate {
  from {
    width: 0%;
  }
  to {
    width: 40%;
  }
}

button {
  padding: 8px 30px;
}
</style>