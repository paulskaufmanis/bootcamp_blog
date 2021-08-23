<template>
  <div class='header'>
    <!-- logo -->
    <!-- <div class="header-logo">
      <img src="../assets/logo.svg" alt="logo" 
      > -->
    <!-- navigation -->
    <div id="nav">
        <router-link to="/">
              <img src="../assets/logo.svg" alt="logo" >
        </router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/all-posts">All posts</router-link>
    </div>
  <!-- add blog -->
    <div class="aside-right">
      <span class="add">+</span>
    <!-- login -->
      <img src="../assets/avatar.png" @click="clicker">
    </div>
    <Dropdown :options="options" v-if="dropdownState"/>
  </div>
</template>

<script >
import Dropdown from '../components/Dropdown.vue'

export default {
  name: 'Header',
  props: {},
    data(){
      return{
        // pass data in Dropdown component
        options: [
          {
            title: "My posts",
            url: "my-posts"
          },
          {
            title: "Log in",
            url: "login"
          }
        ],
        dropdownState: false
      }
    },
  components: {Dropdown},
  methods: {
    clicker(){
      return this.dropdownState = !this.dropdownState     
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #DFB6AE;
  padding: 25px;
  
}
.aside-right{
    display: flex;
}
.add{
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

</style>