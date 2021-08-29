<template>
  <div class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {


  components: { Header, Footer },
  data(){
    return{

      mobileView: true,
    };
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family:'Poppins', sans-serif;
  /* font-family:'Open Sans', sans-serif;  */

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* body {
  background-image: url(https://play-guitars.com/wp-content/uploads/2019/03/bass-guitar-for-beginners-01.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
} */

</style>
