import { createStore } from "vuex";
// import PostService from "../services/PostService";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getLastThree(state) {
      return state.posts.slice(-3).reverse();
    },
    
  },
  mutations: {
    fillPosts(state, { posts }) {
      state.posts = posts;
    },

  },

  actions: {
    getPosts(context) {
      fetch("http://localhost:3300/api/posts-management/posts/")
        .then((res) => {
          return res.json();
        })
        .then((data) => context.commit("fillPosts", { posts: data }));
    },
  },
});
