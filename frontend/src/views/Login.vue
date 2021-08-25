<template>
  <div>
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
      } 
      else {
        await UserService.loginUser(user);        
      }
    },
    changeAuthType(type) {
      this.authType = type;
    },
    authSwitcher() {
      if (this.navUrl === "/register") {
        return (this.authType = "Register");
      } else {
        return (this.authType = "Login");
      }
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
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
  mounted() {
    console.log(this.$router);
  },
};
</script>


<style>
</style>