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
    margin:0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 25px;
  }
  .post-wrapper{
    width: 100%;
  }
  img {
    width: 80%;
      margin: 55px 25px 25px 25px
  }
  h1{
    font-size: 24px;
  }

  /* .post-wrapper {
    display: flex;
    flex-direction: column;
  } */
  /* h1 {
    text-align: center;
  }
  .post-content > p{
    font-size: 14px;
  } */
   /* .post-wrapper{
    width:100%;
    background-color: lightgray;
  }  */

  
 .post-content{
    padding:0 20px;
  }

  .post-auth-date{
    margin: 15px 0;
  }
  .post-content > p{
    font-size: 14px;
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
 
  @media (min-width: 1240px){
    img{
      width: 65%;
    }
  }

 


</style>
