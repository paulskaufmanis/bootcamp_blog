<template>
  <div>
    <div class="header-wrapper">
      <div class="branding">
        <router-link class="logo" to="/">team4</router-link>
      </div>
      <nav class="navigation-wrapper">
        <ul class="navigation" 
            v-show="!mobile">
          <li class="list-element"><router-link class="link" to="/">home</router-link></li>
          <li class="list-element"><router-link class="link" to="/posts"
                >all posts</router-link></li>
          <li class="hidden"><span></span></li>
          <li class="list-element"><router-link to="/add-post"
                ><div class="add-wrapper"><div class="add"></div></div></router-link >
          </li>
          <li class="list-element"  @mouseover="hover = true"
           ><div class="avatar-wrapper" 
          ><div class="avatar">
            </div></div>
          </li>
        </ul>
          <Dropdown :options="options" v-if="hover" @mouseleave="hover = false"/>
      </nav>
            
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li class="drd-link" v-for="option in options1" :key="option.title">
            <a :href="option.url">{{option.title}}</a>
            <hr>
          </li>
        </ul>
        </transition>
    </div>
    <div class="icon" v-show="mobile"
        @click="toggleMobileNav"
        src="../assets/hamburger-icon.png"
        :class="{ 'icon-active': mobileNav }">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>      

  </div>
    </div>
 
  
</template>

<script>
import Dropdown from "./Dropdown.vue";

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
      //pass data in mobile menu
      options1: [
        { title: "Home", url: "/" },
        { title: "All posts", url: "posts" },
        { title: "Add post", url: "add-post" },
        { title: "My posts", url: "my-posts" },
        { title: "Log in", url: "login" },
      ],
      
      // dropdownState: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      hover: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {

    // clicker() {
    //   return (this.dropdownState = !this.dropdownState);
    // },


    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
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
  position: relative;
  padding: 0 7%;
  background: rgba(14, 13, 14, .8);
}

.branding {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 6px;
  color: gray;
}
.logo {
  list-style: none;
  text-decoration: none;
  color: rgba(134, 229, 244, 1);
  font-weight: 800;

  font-family:'Poppins', sans-serif;
  font-size: 28px;
  margin-right: 7%;

}

.navigation-wrapper {
  display: flex;
  padding: 25px 0;
  align-items: center;
  transition: 0.5s ease all;
  width: 100%;
  margin: 0 auto;
}

.navigation,
.link {
  display: flex;
  flex: 1;
  color: #fff;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 100%;
}
.list-element {
  text-transform: uppercase;
  margin-left: 4%;
}
.link {
  font-size: 0.8rem;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.link:hover {
  color: #fff;
  border-color: #fff;
}
.avatar-wrapper {
  padding-top: 7px;
  border: 2px solid white;
  height: 28px;
  width: 32px;
  transform: scale(0.7);
  border-radius: 4px;
  cursor: pointer;
}
.avatar {
  position: relative;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-right: 9px solid white;
  transform: rotate(-40deg);
 }
.avatar:after {
  content: "";
  position: absolute;
  border: 0 solid transparent;
  border-top: 3px solid white;
  border-radius: 20px 0 0 0;
  top: -12px;
  left: -9px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);      
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

.avater:hover {
  cursor: pointer;

}

/* button {
  width: 32px;
  height: 32px;
  border-radius: 50px;
} */

.dropdown-nav {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(3px) saturate(98%);
  -webkit-backdrop-filter: blur(3px) saturate(98%);
  /* background-color: rgba(11, 223, 245, 0.37); */
  border-radius: 12px;
  /* border: 1px solid rgba(209, 213, 219, 0.3); */
  top: 50px;
  left:0;
  z-index:2;

}
.dropdown-nav > li {
  width: 100%;
  margin-left: 0;
  color: black;
  backdrop-filter: blur(3px) saturate(98%);

  -webkit-backdrop-filter: blur(3px) saturate(98%);
  background-color: rgba(14, 13, 14, .95);
  /* border-radius: 4px;
  border: 1px solid rgba(209, 213, 219, 0.3); */
  
}
.dropdown-nav > li a {
  display: inline-block;
  color: rgba(134, 229, 244, 1);
  
  font-weight: regular;
  padding: 15px 15px 15px 40px;
  cursor: pointer;
  width: 100%;
}
.dropdown-nav > li a:hover{
color: rgba(14, 13, 14, .95); 
}

.drd-link:hover{
  background-color: rgba(134, 229, 244, 1);
  transition: .5s ease all; 
}
hr {
  margin: 0 40px;
  
}

.add-wrapper {
  height: 32px;
  width: 32px;
  transform: scale(0.7);
  margin:1%
}
.add {
  width: 100%;
  height: 85%;
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

  top: 20px;

  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-right: 8px solid white;
  border-bottom: 4px solid transparent;
  transform: rotate(-35deg);

}


.hidden {
  flex: 1;
}

a {
  text-decoration: none;
}
/* SHAPES FOR MOBILE-MENU */
@media (min-width: 1024px) {
 .header-wrapper{
  display: flex;

  align-items: center;
  position: relative;
  padding: 0 15%;
  background: rgba(14, 13, 14, .8);
}
 
  
}

</style>
