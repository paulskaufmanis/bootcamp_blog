<template>
    <div class="header-wrapper">
      <router-link class="logo" to="/">team4</router-link>
      

      <div class="navigation" id="nav" @click="showMobileMenu" ref="mobileNavigation">
        <ul class="list-wrapper">
          <li ><div class="home-icon"></div><router-link class="link link-home" to="/" >home</router-link></li>
          <li ><router-link class="link link-posts" to="/posts" >all posts</router-link></li>
          <li class="hidden"><span></span></li>
          <li ><router-link to="/add-post"><button class="add">+</button></router-link></li>
          <li><button class="avatar"><img src="../assets/avatar.png" /></button></li>
          <div class="drop-down" ref="avatarClick">
            <li class="drd"><router-link class="link link-login" to="/login">Login / Register</router-link></li>
            <li class="drd"><router-link class="link link-myPosts" to="/my-posts">My Posts</router-link></li>
          </div>
        </ul>
      </div>
      <img
        class="hamburger" @click="showAvatarMenu"
        src="../assets/hamburger-icon.png"
      />
    </div>
    <!-- <Dropdown :options="options" v-if="dropdownState" /> -->
</template>

<script >
// import Dropdown from "../components/Dropdown.vue";
export default {
  name: "Header",
  props: {},
  data() {
    return {
      // pass data in Dropdown component
      // options: [
      //   {
      //     title: "My posts",
      //     url: "my-posts",
      //   },
      //   {
      //     title: "Log in",
      //     url: "login",
      //   },
      // ],
      // dropdownState: false,
      // dropmenuState: false,
      // mobileMenu: false,
      // mobileView: false,
    };
  },
  // components: { Dropdown },
  
  methods: {
    // clicker() {
    //   return (this.dropdownState = !this.dropdownState);
    // },
    //   clickMenu() {
    //     return (this.dropmenuState = !this.dropmenuState);
    //   },

    showMobileMenu() {
      let nav = this.$refs.mobileNavigation.style;
      console.log('feeling burger menu click')      

      return nav.display === "" ? (nav.display = "block") : (nav.display = "");   

    },
    showAvatarMenu(){
      let avatarDropDown = this.$refs.avatarClick.style;
      console.log('feeling avatar click')
      
      return avatarDropDown.display === "" ? (avatarDropDown.display = "block") : (avatarDropDown.display = ""); 
    },
    // closeBurgerMenu(){

    // }
  },
};
</script>

<style scoped>

body {
    background-color: black;
}
.header-wrapper{
    display: flex;
    position: relative;
    padding: 25px;

}
.hamburger{
    display: none;
    height: 32px;
    width: 32px; 
    /* color: white; */
    /* background: black; */
    /* background-image: url('/src/assets/hamburger-icon.png');
    background-size: cover; */
    /* background-repeat: no-repeat; */
}
.logo{
  padding: 8px 32px 8px 0;
}

.avatar > img {
    height: 32px;
    width: 32px; 
    border-radius: 550px;

}
.navigation{
  flex:1;
}
.list-wrapper{
  display: flex;
}
.list-wrapper > li, .drd {
  text-decoration: none;
  list-style-type:none;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid black;
}

.hidden {
  flex:1;
  border: none;
}
.drop-down{
  display: none;
  position: absolute;
  right: 25px;
  top: 100px;
  border-radius: 8px;
  box-shadow: 3px 24px 27px -3px rgba(0,0,0,0.75);
  -webkit-box-shadow: 3px 24px 27px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 24px 27px -3px rgba(0,0,0,0.75);
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

@media (max-width: 375px){
  .hamburger{
    display: block;
  }
  .hidden {
    display: none;
  }
  .navigation {
    display: none;
    position:absolute;
    height: 50vh;
    top: 75px;
    left: 0;
    width: 100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    transform: 5s ease all;
  }
  .list-wrapper{
        flex-direction: column;
        top: 100px;

  }
  .header-wrapper{
    justify-content: space-between;
  }
  li {
    display: flex;
  }
  .home-icon {
    background-image: url("https://images.unsplash.com/photo-1525971226737-a341ed2f6295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    width: 25px;
    height: 25px;
    background-size:cover;
    margin-right: 10px;
  }
  .drop-down{
    display: block;
    top: 41vh;
    left: 0;
    text-align: bottom;    
    width: 100%;
    box-shadow: 0 0 0 0;
  }

}

</style>
