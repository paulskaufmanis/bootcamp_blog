import { createStore } from "vuex";
// import PostService from "../services/PostService";

export default createStore({
  state: {
    posts: [],
    myPosts: [],
    user: {},
  },
  getters: {
    getLastThree(state) {
      return state.posts.slice(-3).reverse();
    },
    getUsersPosts(state) {
      const user = this.user;
      return state.posts.filter((post) => post.author === user.username);
    },
  },
  mutations: {
    fillPosts(state, { posts }) {
      state.posts = posts;
    },
    fillMyPosts(state, { myPosts }) {
      state.myPosts = myPosts;
    },
    setUser(state, { user }) {
      state.user = user;
    },
  },

  actions: {
    getPosts(context) {
      fetch("http://localhost:3400/api/posts-management/posts/")
        .then((res) => {
          return res.json();
        })
        .then((data) => context.commit("fillPosts", { posts: data }));
    },

    setUser(context, payload) {
      console.log(payload);
      context.commit("setUser", payload);
    },

    getMyPosts(context) {
      fetch("http://localhost:3400/api/posts-management/posts/my-posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => context.commit("fillPosts", { myPosts: data }));
    },
  },
});
