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
    <center>
        <form autocomplete="off" v-on:submit.prevent>
          <div class="input">
            <label for="image"></label>
            <input type="text" name="image" placeholder="Copy Image URL:" v-model="newPost.image" />
          </div>

          <div class="input">
            <label for="title"></label>
            <input type="text" name="title" placeholder="Write title" v-model="newPost.title" />
          </div>

          <div class="input">
            <label for="text"></label>
            <textarea name="text" placeholder="Say your thoughts...." v-model="newPost.text" />
          </div>
                 <button @click="addPost">Publish your post</button>
                 Loading your blog
                 <span></span>

          
          
        </form>
        </center>
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
      await PostService.addPost(this.newPost);
      this.newPost.title = "";
      this.newPost.text = "";
      this.newPost.image = "";
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
  opacity: .92;
  padding: 35px;
}
input, textarea {
padding: 8px 16px;
width: 100%;
}
input:focus, input:active {
  outline: none;
  border: none;
}
::placeholder{
  font-family: 'Poppins';
  font-size: 12px;
}
.input {
  padding: 4px;
}
span {
  width: 100%;
  height: 10px;
  border-radius: 50px;
  background-color: cyan;
  margin-top: 10px;
}
button{padding: 8px 30px;}

</style>