<template>
  <div class="app-container">
    <Header1 />
    <div class="content-container">
    <router-view />
    </div>
    <Footer />
    </div>
  
</template>

<script>
import Header1 from "./components/Header1.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header1, Footer },
  data() {
    return {
      mobileView: true,
    };
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  /* font-family:'Open Sans', sans-serif;  */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-container{
  flex-grow:1;
  /* min-height: 100vh; */

}

body {
  background-image: url(https://images.unsplash.com/photo-1525898181636-29b30c26f6e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80);
  background-repeat: no-repeat;
  background-position: center 25%;
  background-attachment: fixed;

  background-size: cover;
  position: relative;
  min-height: 100vh;

  
}
</style>
