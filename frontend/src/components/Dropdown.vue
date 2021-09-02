<template>
  <div class="dropdown">
    <ul>
      <li v-for="option in options" :key="option.title">
        <a :href="option.url">{{ option.title }}</a>
      </li>
      <li v-show="!auth" class="drd-link">
        <router-link to="/login"> Log in </router-link>
      </li>
      <li v-show="auth" class="drd-link" @click="logoutClick">
        <!-- <a href="/"> -->
        Log out
        <!-- </a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  name: "Dropdown",
  props: {
    options: Array,
  },
  created() {
    localStorage.getItem("auth") === "true" ? (this.auth = true) : false;
    console.log(localStorage.getItem("auth"));
  },
  methods: {
    logoutClick() {
      console.log("logout click");
      localStorage.removeItem("token");
      localStorage.removeItem("author");
      localStorage.setItem("auth", "false");
      this.$router.push("/");
      setTimeout(() => {
        this.$router.go();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  top: 4.5rem;
  right: 0.5rem;
  width: 20rem;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
}
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  line-height: 2rem;
  margin: 0;
  padding: 0;
}
li {
  padding: 0.5rem 1rem;
}
li:hover {
  background: #dbe2ef;
  cursor: pointer;
}
a {
  color: #222;
  text-decoration: none;
}
</style>
