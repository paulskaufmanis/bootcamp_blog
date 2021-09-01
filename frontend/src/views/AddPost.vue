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
          <span>Loading post...</span>
          <div class="loader"></div>
                 <!-- <span></span> --> 
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
.loader, span {
  height: 15px;  
  border-radius: 10px;
  margin: 20px;
  left: 28%;
  /* width: 100%;
  height: 10px;
  border-radius: 50px;
  background-color: cyan;
  margin-top: 10px; */
}
.loader {
  position: relative;
  width: 40%;
  background: rgb(7,246,250);
  box-shadow: 0 0 20px blue;
  animation: animate 3s forwards;

}
span {
  position: absolute;
  top: 150px;
  border: 1px solid;

}
@keyframes animate {
  from {
    width: 0%;
  }
  to {
    width: 40%;
  }
}
span {
  top: -36.4px;
  width: 40%;
  background: rgb)62,72,95);
  border: 1px solid rgb(2,58,99);
  display: block;
  z-index: -1;
}
button{padding: 8px 30px;}

</style>