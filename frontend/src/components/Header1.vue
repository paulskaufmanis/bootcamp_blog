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
                ><div class="add-wrapper"><div class="add"></div></div></router-link
              >
            </li>
            <li>          <div class="avatar">
                <img src="../assets/avatar.png" @click="clicker" />
              </div>
            </li>
          </ul>
          <Dropdown :options="options" v-if="dropdownState" />
        </nav>
            
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">        
                
            <li class="drd-link" v-for="option in options1" :key="option.title">
                  <a :href="option.url">{{option.title}}</a>
              </li>

            </ul>
        </transition>
          
    </div>
    <!-- <Dropdown :options="options" v-if="dropdownState" /> -->
 
  <div class="icon" v-show="mobile"
        @click="toggleMobileNav"
        src="../assets/hamburger-icon.png"
        :class="{ 'icon-active': mobileNav }">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <!-- <img
        v-show="mobile"
        @click="toggleMobileNav"
        src="../assets/hamburger-icon.png"
        :class="{ 'icon-active': mobileNav }"
      /> -->
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

<style scoped>
.header-wrapper{
    display: flex;
    align-items: center;
    /* align-items: flex-start; */
    position: relative;
    padding: 0 35px;
    background: rgba(14, 13, 14, .8);
}

.branding {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 6px;
  /* padding: 5%; */
  color: gray;
}
.logo {
  list-style: none;
  text-decoration: none;
  color: rgba(134, 229, 244, 1);
  font-weight: 800;
  font-family:'Poppins', sans-serif;
  font-size: 34px;
  margin-right: 25px;
}

.navigation-wrapper {
  /* position: absolute; */
  display: flex;
  padding: 25px 0;
  align-items: center;
  transition: 0.5s ease all;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
    
  }
}

.navigation, .link {
  display: flex;
  flex:1;
  color: #fff;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 100%;
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
  color: #fff;
  border-color:#fff;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 50px;
  overflow: hidden;
}
.avatar > img {
  height: 120%;
  width: 120%;
}
.icon {
  width: 28px;
  height: 28px;
  display: inline-block;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 25px;
  z-index: 99;
  background-color: transparent;

}
.icon > .line {
  width: 100%;
  height: 2px;
  background: white;
  margin: 6px 0;
  transition: 0.4s;
}
.icon:hover {
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
.avater:hover{
  cursor: pointer;
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
     backdrop-filter: blur(3px) saturate(98%);
    -webkit-backdrop-filter: blur(3px) saturate(98%);
    background-color: rgba(11, 223, 245, 0.37);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    /* padding-left: 20px; */
    top: 50px;
    left:0;
}

.dropdown-nav > li {
  margin-left: 0;
  padding: 15px;
  color: black;
   backdrop-filter: blur(3px) saturate(98%);
    -webkit-backdrop-filter: blur(3px) saturate(98%);
    background-color: rgba(134, 229, 244, 0.8);
    border-radius: 4px;
    border: 1px solid rgba(209, 213, 219, 0.3);

}

.dropdown-nav > li a {
  color: black;
}
.add-wrapper{
  height: 32px;
  width: 32px;
}
.add {
      width: 100%;
      height: 90%;
      background: white;
      position: relative;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }
    .add:before {
      content: "";
      position: absolute;
      right: 80%;
      top: 22px;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-right: 8px solid white;
      border-bottom: 4px solid transparent;
       transform: rotate(-35deg);
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
@media (max-width: 375px) {
  .header-wrapper{
    align-items: center;

  }
  header {
    padding: 0;
    margin-top: 35px;
  }

  .navigation-wrapper {
    padding: 25px 0;
  }
  .branding{
    position: absolute;
  }
  
  
}
</style>