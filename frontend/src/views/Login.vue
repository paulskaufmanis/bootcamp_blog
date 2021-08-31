<template>
  <div class="login-page">
    <Form
      :authType="authType"
      v-on:handle-data="handleData($event)"
      v-on:change-auth-type="changeAuthType($event)"
    />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import UserService from "../services/UserService.js";

export default {
  data() {
    return {
      users: [],
      authType: "",
      navUrl: "",
    };
  },
  components: { Form },
  methods: {
    async handleData(user) {
      if (this.authType === "Register") {
        await UserService.addUser(user);
      } else {
        const ruser = await UserService.loginUser(user);
        console.log(user);
        // this.$store.commit("setUser", user);
        // console.log(this.$store.commit("setUser", user));
        console.log("User from Login methods", ruser);
        this.$store.dispatch("setUser", user);
        // console.log("State user: ", await UserService.loginUser(user));
      }
    },
    changeAuthType(type) {
      this.authType = type;
    },
    authSwitcher() {
      if (this.navUrl === "/register") {
        return (this.authType = "Register");
      } else {
        return (this.authType = "Log in");
      }
    },
  },
  async created() {
    try {
      await UserService.getUsers(this.users);
      console.log(this.users);
    } catch (err) {
      console.log(err.message);
    }
    this.navUrl = this.$router.currentRoute._value.href;
    this.authSwitcher();
  },
  // mounted() {
  //   this.$store.dispatch("setUser");
  // },
};
</script>


<style>
* {
  font-family: "Poppins";
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 214px 0;
}
@media (min-width: 768px) {
  .login-page {
    margin: 139px;
    transition: 0.3s ease all;
  }
}
</style>