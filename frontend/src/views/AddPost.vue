<template>
  <div class="add-post-wrapper">
    <!-- <div> -->
      <form autocomplete="off" v-on:submit.prevent>
        <div class="input">
          <input
            type="text"
            name="title"
            placeholder="Write title"
            v-model="newPost.title"
          />
          <label for="title">Write title</label>
        </div>

        <div class="input">
          <textarea
            name="text"
            placeholder="Say your thoughts...."
            v-model="newPost.text"
          />
          <label class="textarea-label" for="text">Say your thoughts</label>

        </div>

        <div class="input">
          <input
            type="text"
            name="image"
            placeholder="Add image URL:"
            v-model="newPost.image"
          />
          <label for="image">Add image URL:</label>

        </div>
        <div class="btn">
          <button @click="addPost">Publish your post</button>
        </div>
      
      </form>
    <!-- </div> -->
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
        created_by: localStorage.getItem("author"),
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
  padding: 15px 5px;
  max-width: 768px;
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
    color: transparent;
}
.input {
  padding: 4px;
  margin: 8px;
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
input {
  display: block;
}

label {
  display: block;
  position: absolute;
  pointer-events: none;
  color: #999;
  transition: 0.5s;
  transform: translateY(-1.9em);
  transform-origin: 0 0;
  transition: all 0.3s;
  margin-left: 16px;
}

.textarea-label{
  transform: translateY(-9.5em);
}
input:focus, textarea:focus {
  border-bottom: 1px solid red;
}
input:focus ~ label, 
input:not(:placeholder-shown) ~ label
 {
  transform: translateY(-4.1em);
  color: red;
  transition: 0.5s;
  background: transparent;
  font-size: 12px;
  margin-left: 14px;
  
}

textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label 
{
   transform: translateY(-14.5em);
  color: red;
  transition: 0.5s;
  background: transparent;
  font-size: 12px;
  margin-left: 14px;
  outline: none !important;

}
.btn {
  display: flex;
  justify-content: center;
  width: 100%;
}
button {  
  width: 50%;
  margin: 12px 0;
  padding: 6px 24px;
  outline: none;
  border: 1px solid #dbe2ef;
  background: #39c2f5;
  border: none;
  cursor: pointer;
  font-family: 'Poppins';
}

@media (max-width: 375px)
and (min-width: 768px)
{
  
  .add-post-wrapper {
    margin: 7%;
     display: flex;
    justify-content: center;
  }
}
</style>