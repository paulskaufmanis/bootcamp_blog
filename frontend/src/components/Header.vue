<template>
  <div class="header">
    <div class="aside-left">
      <!-- logo -->
      <router-link to="/">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>
      <!-- navigation -->
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">All posts</router-link>
      </div>
    </div>
    <div class="aside-right">
      <!-- add blog -->
      <router-link to="/add-post">
        <span class="add">+</span>
      </router-link>
      <!-- login -->
      <img src="../assets/avatar.png" @click="clicker" />
    </div>
    <Dropdown :options="options" v-if="dropdownState" />
  </div>
</template>

<script >
import Dropdown from "../components/Dropdown.vue";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      // pass data in Dropdown component
      options: [
        {
          title: "My posts",
          url: "my-posts",
        },
        {
          title: "Log in",
          url: "login",
        },
      ],
      dropdownState: false,
    };
  },
  components: { Dropdown },
  methods: {
    clicker() {
      return (this.dropdownState = !this.dropdownState);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #dfb6ae;
  padding: 25px;
}

.aside-right,
.aside-left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.add {
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  font-weight: bold;
  margin-right: 15px;
  font-size: 35px;
}
img {
  width: 32px;
  height: 32px;
}

a {
  text-decoration: none;
}
</style>