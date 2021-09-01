import { createStore } from "vuex";
import axios from "axios";
// import UserService from "../services/UserService";
// import PostService from "../services/PostService";

export default createStore({
  state: {
    posts: [],
    myPosts: [],
    user: {},
    token: "",
  },
  getters: {
    getLastThree(state) {
      return state.posts.slice(-3).reverse();
    },
    getUsersPosts(state) {
      const user = this.user;
      return state.posts.filter((post) => post.author === user.username);
    },
    getUserNameSurname(state) {
      console.log("from getters", state.user.name, state.user.surname);

      return `${state.user.name} ${state.user.surname}`;
    },
    getUserUsername(state) {
      console.log("from getters Username", state.user.username);

      return state.user.username;
    },
    getUserInitials(state) {
      console.log("from getters Initials", state.user.initials);

      return state.user.initials;
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
      console.log(state);
      console.log("User from srore payload", user);
      console.log("User from srore state", state.user);
    },
  },

  actions: {
    async getPosts(context) {
      // axios
      //   .get("http://localhost:3400/api/posts-management/posts/")
      //   // .then((res) => {
      //   //   return res.json();
      //   // })
      //   .then((data) => context.commit("fillPosts", { posts: data }));

      await fetch("http://localhost:3400/api/posts-management/posts/")
        .then((res) => {
          return res.json();
        })
        .then((data) => context.commit("fillPosts", { posts: data }));
    },

    async setUser(context, user) {
      await axios
        .post("http://localhost:3400/api/users-management/users/login", {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          console.log("actions with axios", { user: response.data.user });
          // this.$store.dispatch("setUser");
          context.commit("setUser", { user: response.data.user });
          // localStorage.setItem("token", response.data.accessToken);
        });
      // const suser = await UserService.loginUser(user);
      // // console.log("Sore action user: ", user);

      // // console.log("Store: ", this.$store.user);
    },

    // getMyPosts(context) {
    //   fetch("http://localhost:3300/api/posts-management/posts/my-posts")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => context.commit("fillPosts", { myPosts: data }));
    // },
  },
});
