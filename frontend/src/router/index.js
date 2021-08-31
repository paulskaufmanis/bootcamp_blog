import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllPosts from "../views/AllPosts.vue";
import MyPosts from "../views/MyPosts.vue";
import Login from "../views/Login.vue";
import AddPost from "../views/AddPost.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id?",
    name: "AllPosts",
    component: AllPosts,
  },
  {
    path: "/my-posts",
    name: "MyPosts",
    component: MyPosts,
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
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
