import { createStore } from "vuex";
// import UserService from "../services/UserService";
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
    getUsersPosts(state) {
      const user = this.user;
      return state.posts.filter((post) => post.author === user.username);
    },
    getUserNameSurname(state) {
      return `${state.user.name} ${state.user.surname}`;
    },
  },
  mutations: {
    fillPosts(state, { posts }) {
      state.posts = posts;
    },
    fillMyPosts(state, { myPosts }) {
      state.myPosts = myPosts;
    },
    setUser(state, payload) {
      state.user = payload;
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

    async setUser(context, user) {
      // const user = await UserService.loginUser(user);
      // console.log("Sore action user: ", user);
      context.commit("setUser", { user: user });
      // console.log("Store: ", this.$store.user);
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
