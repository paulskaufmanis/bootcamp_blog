<template>
  <div class="home">
    <h1>This home page</h1>
    <div class="post-cards">
      <div v-for="post in getLastThree" :key="post.id" class="post-wrapper">
        <div
          class="post-card"
          :style="{ backgroundImage: `url(${post.image})` }"
        >
          <h3 class="post-title">{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLastThree"]),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style>
.home{
    margin-top: 50px;
}

.post-cards {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

}

.post-wrapper {
  display: flex;
  justify-content: center;
  /* margin:auto; */
  /* width: 100%; */
}
.post-card {
  height: 10rem;
  width: 95%;
  /* size: fit-content; */
  margin: 1rem;

  border-radius: 8px;
  padding: 25px;
  cursor: pointer;
}

.post-content {
  width: 24rem;
}

@media only screen and (max-width: 375px) {
  body {
    background-color: lightblue;    
  }
  .post-card {
    width: 90%;
  }

  
}

@media only screen and (max-width: 768px) {
  body {
    background-color: green;    
  }
  .post-card {
    width: 75%;
  }
  
}

@media only screen and (min-width: 1440px) {
  body {
    background-color: yellow;    
  }
  .post-cards {
    /* display: flex; */
    /* flex-direction: row; */
    /* width: 19rem;
    height: 19rem; */
  } 
}
</style>
