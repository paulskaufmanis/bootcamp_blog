<template>
  <div class="all-posts">
    <div v-if="!$route.params.id" class="posts-block">
      <div class="all-posts-heading">
        <h2>All posts</h2>
        <form class="search-wrap">
          <input class="search-box" type="text" name="" id="" />

          <div class="search-icon-wrapper">
            <div class=" search-icon">
            </div>
          </div>

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
.posts-block {
  width: 19rem;
}
.all-posts {
  display: flex;
  justify-content: center;
  margin: 10px;
  background: lightgray;
  opacity: 0.92;
}
.all-posts-heading{
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 1rem;
  align-items: flex-end;
  padding-right: 15px;
}
h2 {
  font-size: 22px;
}


.post-wrapper {
  background: gray;
  margin-bottom: 20px;
  cursor: pointer; 
}

.post-card {  
 height: 9.5rem;
 background-size: cover;

}
.post-title{
  text-align:start;
}
.post-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-text{
  margin-top: 8px;
  max-height: 108px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;

  }
.post-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  padding-top: 1rem;
  margin: 8px 0;
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
  margin:0;
  padding: 0;
}
.post-author {
  font-size: 10px;
  margin-bottom: 4px;
}
.post-date {
  font-size: 10px;
}
.all-posts-heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 1rem;
  padding-right: 1rem;
}
.search-wrap {
  display: flex;
  /* flex-direction: row; */
  border-bottom: 1px solid black;
  align-items: flex-end;
  margin-bottom: 8px;
  
}
.search-box {
  width: 6rem;
  height: 1.5rem;
  background: inherit;
  border: none;
  padding-left: 0.5rem;
  outline: none;
}
input{
  margin:0;
}

.search-icon-wrapper{
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
  cursor: pointer;
}

.search-icon { 
  font-size: 10em;
  width:50%;
  box-sizing: content-box;
  height:50%;
  border: 2px solid black;
  position: relative;
  border-radius: 50px;
}
  .search-icon:before {
  content: "";
  display: inline-block;
  position: absolute;
  right: -6px;
  bottom: -3px;
  border-width: 0;
  background: black;
  width: 8px;
  height: 2px;
  transform: rotate(45deg);
}
 
@media
(min-width: 768px) {
   .all-posts {
     margin: 45px 150px;
     padding: 0 25px;
   }
  .posts-block {
    /* padding: 0 ; */
    width: 60rem;    
  }
  .post-wrapper {
    display: flex;
    margin-bottom: 45px;
 }
  .post-card {
    height: 300px;
    width: 50%;
 }
  .post-content{
    width: 50%;
  }
  .post-text{
    font-size: 14px;
  }
  .post-author {
    font-size: 12px;
  }
}
@media (min-width: 1240px){
  .all-posts{
    margin: 35px 200px;
  }
}

</style>