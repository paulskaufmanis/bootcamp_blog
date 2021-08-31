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
};
</script>


<style>
*{
  font-family: 'Poppins';
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