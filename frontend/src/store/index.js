import { createStore } from "vuex";
// import PostService from "../services/PostService";

export default createStore({
  state: {
    posts: [],
    myPosts: [],
    user: {
      id: "1",
      name: "Pauls",
      surname: "Kaufmanis",
      username: "pauls.kaufmanis@gmail.com",
      password: "123asd",
      initials: "PK",
    },
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
    fillMyPosts(state, { myPosts }) {
      state.myPosts = myPosts;
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
    getMyPosts(context) {
      fetch("http://localhost:3300/api/posts-management/posts/my-posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => context.commit("fillPosts", { myPosts: data }));
    },
  },
});
