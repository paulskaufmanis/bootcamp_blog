<template>
    <div class="header-wrapper">
        <div class="branding">
          <router-link class="logo" to="/">team4</router-link>
        </div>
        <nav class="navigation-wrapper">
          <ul v-show="!mobile" class="navigation">
            <li><router-link class="link link-home" to="/">home</router-link></li>
            <li><router-link class="link link-posts" to="/posts"
                >all posts</router-link
              >
            </li>
            <li class="hidden"><span></span></li>
            <li>          <router-link to="/add-post"
                ><button class="add">+</button></router-link
              >
            </li>
            <li>          <button class="avatar">
                <img src="../assets/avatar.png" @click="clicker" />
              </button>
            </li>
          </ul>
          <Dropdown :options="options" v-if="dropdownState" />
        </nav>
            
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">        
                
            <li v-for="option in options1" :key="option.title">
                  <a :href="option.url">{{option.title}}</a>
              </li>

            </ul>
        </transition>
          
    </div>
    <!-- <Dropdown :options="options" v-if="dropdownState" /> -->
 
  <div class="icon">
      <img
        v-show="mobile"
        @click="toggleMobileNav"
        src="../assets/hamburger-icon.png"
        :class="{ 'icon-active': mobileNav }"
      />
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";

export default {
  components: { Dropdown },
  props: {},
  data() {
    return {
      // pass data in Dropdown component
      options: [
        { title: "My posts", url: "my-posts" },
        { title: "Log in", url: "login" },
      ],
      options1: [
        { title: "Home", url: "/" },
        { title: "All posts", url: "posts" },
        { title: "Add post", url: "add-post" },
        { title: "My posts", url: "my-posts" },
        { title: "Log in", url: "login" },
      ],
      
      dropdownState: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    clicker() {
      console.log('clicked avatar')
      return (this.dropdownState = !this.dropdownState);
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 375) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style>
.header-wrapper{
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: 0 35px;
}

.branding {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 5%; */
  
}
.navigation-wrapper {
  /* position: absolute; */
  display: flex;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
  }
}
ul,
.link {
  display: flex;
  flex:1;
  color: black;
  list-style: none;
  text-decoration: none;
}
li {
  text-transform: uppercase;
  /* padding: 8px 12px; */
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.link:hover {
  color: black;
  border-color:black;
}
button {
  border: none;
  outline: none;
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 99;
}
img {
  cursor: pointer;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(180deg);
}
.avatar {
  width: 32px;
  height: 32px;
}
button {
  width: 32px;
  height: 32px;
  border-radius: 50px;
}

.dropdown-nav {
      display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: #fff; */
    background-color: green;
    /* padding-left: 20px; */
    top: 54px;

  top: 30px;
}

.dropdown-nav > li {
  margin-left: 0;
  padding: 15px;
  color: black;
  background-color: green;

}

.dropdown-nav > li a {
  color: black;
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
  cursor: pointer;
}
img {
  width: 32px;
  height: 32px;
}
.hidden {
  flex: 1;
}

a {
  text-decoration: none;
}
/* nav {
  display: flex;
  padding: 35px;
} */
@media (min-width: 375px) {
  header {
    padding: 0;
    margin-top: 35px;
  }
  .branding{
    position: absolute;
  }
}
</style>