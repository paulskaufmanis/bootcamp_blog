<template>
  <div class="home">
    <div v-if="!$route.params.id" class="posts">
      <div v-for="post in getLastThree" :key="post.id" class="post-card">
        <router-view :to="'/posts/' + post.id">
          <div
            class="post-background"
            :style="{ backgroundImage: `url(${post.image})` }"
            @click="openPost(post.id)"
          >
            <div class="post-background shadow">
              <h2 class="post-title">{{ post.title }}</h2>
            </div>
          </div>
        </router-view>
      </div>
    </div>
    <div v-if="$route.params.id">
      <Post />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "../components/Post.vue";

export default {
  methods: {
    openPost(id) {
      this.$router.push(`/posts/${id}`);
    },
  },

  components: { Post },

  computed: {
    ...mapGetters(["getLastThree"]),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style scoped>
.home { 
  display: flex;
  justify-content: center;
  background-image: url(https://play-guitars.com/wp-content/uploads/2019/03/bass-guitar-for-beginners-01.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
 .posts {
  width: fit-content;
  background-color: yellow;
  padding: 15px  0;
  }

.post-card {
  width: 100%;
  width: 19rem;
  height:19rem;
  padding: 15px 30px;
  background-color: pink;
  }
  .post-background {
      width: 100%;
      height:100%;

  }

 @media
(min-width: 768px) and
(max-width: 1024px)
{ 
  
.home {
  align-items: center;
}
  .posts {
    margin: 0 7%;

  }
  .post-card {
  width: 100%;
  width: 40rem;
  height:10rem;
  padding: 15px 30px;
  background-color: pink;
  }

  .post-background {
    height: 10rem;
  }
}

@media (min-width: 1024px){
  
  .posts {
    margin: 5%;
    display: flex;
    padding: 15px;
  }
  .post-card {
  background-color: green;
  padding: 15px;
  }

}
</style>
