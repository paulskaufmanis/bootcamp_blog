<template>
  <div>
    <div class="header">
      <!-- <div class="hamburger" @click="clickMenu" > -->
      <img
        class="hamburger"
        @click="showMobileMenu"
        src="../assets/hamburger-icon.png"
      />
      <!-- </div> -->

      <router-link class="logo" to="/">team4</router-link>

      <nav class="navigation" id="nav" ref="mobileNavigation">
        <router-link class="link link-home" to="/">home</router-link>
        <router-link class="link link-posts" to="/posts">all posts</router-link>
        <span class="hidden"></span>
        <router-link to="/add-post">
          <button class="add">+</button>
        </router-link>
        <button class="avatar">
          <img src="../assets/avatar.png" @click="clicker" />
        </button>
      </nav>
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
      // dropmenuState: false,
      // mobileMenu: false,
      // mobileView: false,
    };
  },
  components: { Dropdown },
  methods: {
    clicker() {
      return (this.dropdownState = !this.dropdownState);
    },
    //   clickMenu() {
    //     return (this.dropmenuState = !this.dropmenuState);
    //   },

    showMobileMenu() {
      let nav = this.$refs.mobileNavigation.style;
      return nav.display === "" ? (nav.display = "block") : (nav.display = "");
   

    },
    //     //   hideMobileMenu(){
    //     //     console.log('pressing hide')
    //     // return this.$refs.mobileNavigation.style.display = "none";
    //     //   }
  },
};
</script>

<style scoped>
/* .header {
  
} */
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