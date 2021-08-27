<template>
  <div class="all-posts">
    <div v-if="!$route.params.id" class="posts-block">
      <div class="all-posts-heading">
        <h2>ALL POSTS</h2>
        <form class="search-wrap">
          <input class="search-box" type="text" name="" id="" />
          <button>
            <div id="search-icon"></div>
          </button>
        </form>
      </div>
      <div
        v-for="post in posts"
        :key="post.title"
        class="post-wrapper"
        @click="openPost(post.id)"
      >
        <router-view :to="'/posts/' + post.id">
          <div
            class="post-card"
            :style="{ backgroundImage: `url(${post.image})` }"
          ></div>
          <div class="post-content">
            <div>
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-text">{{ post.text }}</p>
            </div>
            <div class="post-footer">
              <div class="initials-wrap">
                <p class="initials">PA</p>
              </div>
              <div>
                <p class="post-author">Post Author</p>
                <p class="post-date">{{ post.dateCreated }}</p>
              </div>
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

<script >
import { mapState } from "vuex";
import Post from "../components/Post.vue";

export default {
  methods: {
    openPost(id) {
      this.$router.push(`/posts/${id}`);
    },
  },
  components: { Post },
  computed: {
    ...mapState(["posts"]),
  },
  findPostbyId() {
    const post = this.posts.find(({ id }) => this.$route.params.id == id);
    return JSON.stringify(post);
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
<style scoped>
.all-posts {
  display: flex;
  flex-direction: column;

  background-image: url(https://play-guitars.com/wp-content/uploads/2019/03/bass-guitar-for-beginners-01.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  padding: 2rem;
}

.all-posts-heading {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 1rem;
  padding-right: 1rem;
}

.search-wrap {
  flex-direction: row;
}

.search-box {
  width: 6rem;
  height: 1.5rem;
  background: inherit;
  border: none;
  border-bottom: 2px solid black;
  padding-left: 0.5rem;
}
.search-box:focus {
  outline: none;
}

#search-icon {
  font-size: 1.9em;
  display: inline-block;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.11em solid black;
  position: relative;
  border-radius: 0.35em;
}
#search-icon:before {
  content: "";
  display: inline-block;
  position: absolute;
  right: -0.25em;
  bottom: -0.1em;
  border-width: 0;
  background: black;
  width: 0.35em;
  height: 0.09em;
  transform: rotate(45deg);
}

button {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid black;
}

.posts-block {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: rgba(192, 192, 192, 0.8);
  width: 21rem;
}

.post-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.post-card {
  height: 9.5rem;
  width: 19rem;
  background-size: cover;
  margin: 1rem 1rem 0 1rem;
}

.post-content {
  margin: 0 1rem;
  padding: 1rem;
  background: white;
}

.post-title {
  margin-bottom: 0.5rem;
}

.post-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  padding-top: 1rem;
  margin: 1rem 0;
}

.initials-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: lightgrey;
  border-radius: 50%;
  margin-right: 1rem;
}

.initials {
  font-size: x-large;
  font-weight: 500;
}

.post-author {
  font-weight: 600;
}

.post-date {
  font-size: small;
}

@media only screen and (min-width: 768px) {
  .posts-block {
    width: 40rem;
  }

  .post-wrapper {
    flex-direction: row;
  }

  .post-card {
    height: 19rem;
    min-width: 19rem;
    margin: 1rem 0 1rem 1rem;
  }

  .post-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 1rem 1rem 1rem 0;
    width: 19rem;
  }

  @media only screen and (min-width: 1440px) {
    .posts-block {
      width: 60rem;
    }

    .post-card {
      min-width: 30rem;
    }
    .post-content {
      width: 30rem;
      /* justify-content: ; */
    }
  }
}
</style>