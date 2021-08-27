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
  background-attachment: fixed;
}

.posts {
  flex-direction: column;
  background-color: rgba(192, 192, 192, 0.8);
  /* border-radius: 0.5rem; */
  margin: 2rem 0;
}

.post-card {
  display: flex;
  justify-content: center;
  height: 19rem;
  max-width: 19rem;
  margin: 2rem;
  cursor: pointer;
  /* border-radius: 0.5rem; */
  /* opacity: 0.8; */
}

/* .post-card:hover {
  opacity: 1;
} */

.post-background {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 19rem;
  /* border-radius: 0.5rem; */
  size: fit-content;
  background-size: cover;
}

.post-title {
  padding: 1rem;
  font-weight: 900;
  color: white;
}

.post-title:hover {
  font-size: xx-large;
  transition: 0.2s;
}
.shadow {
  height: 19rem;
  width: 19rem;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );
}

@media only screen and (min-width: 768px) {
  .posts {
    width: 44rem;
  }
  .post-background {
    width: 40rem;
    height: 10rem;
    background-position: center 25%;
  }

  .post-card {
    display: block;
    width: 40rem;
    height: 10rem;
  }
}

@media only screen and (min-width: 1440px) {
  .home {
    height: 35vw;
  }
  .posts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 65rem;
    height: 23rem;
  }

  .post-background {
    height: 19rem;
    max-width: 19rem;
  }

  /* .post-background:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
 */
  .post-card {
    height: 19rem;
    width: 100rem;
    margin: 1rem;
    /* overflow: hidden; */
  }
}
</style>
