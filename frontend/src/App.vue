<template>
  <div>
    <Header1 />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header1 from "./components/Header1.vue";
import Footer from "./components/Footer.vue";

export default {

  components: { Header1, Footer },
  data(){
    return{
      mobileView: true,

    }
  }
  
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app {
  /* /* font-family:'Poppins', sans-serif; */
  font-family:'Open Sans', sans-serif; 
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




</style>
