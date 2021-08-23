import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllPosts from "../views/AllPosts.vue";
import Login from "../views/Login.vue";
import AddPost from "../views/AddPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all-posts",
    name: "AllPosts",
    component: AllPosts,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Login,
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
