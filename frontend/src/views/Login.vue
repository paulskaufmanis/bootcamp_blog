<template>
  <div class="login-page">
    <!-- <div v-if="$store.state.user">
            {{ user }}
    </div> -->

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
      // user: `Hi, ${this.$store.state.user.surname}!`,
      // user: `Hi, ${localStorage.getItem("user")}!`,
    };
  },
  components: { Form },
  // setup(props, context) {
  //   console.log(context.root.$store);
  //   // $store.commit("setuser", { name: "George" });
  //   // const suser = $store.getters.getUserNameSurname;
  //   // console.log(suser);
  // },
  methods: {
    async handleData(user) {
      if (this.authType === "Register") {
        await UserService.addUser(user);
        this.authType = "Login";
      } else {
        await UserService.loginUser(user);
        await this.$store.dispatch("setUser", user);

        // console.log("Login methods", user);
        // this.$store.commit("setUser", user);
        // console.log(this.$store.commit("setUser", user));
        // console.log("User from Login methods", ruser);
        // localStorage.setItem("user", user);
        // console.log(this.$store.state);
        this.$router.push("/");

        setTimeout(() => {
          this.$router.go();
        }, 1000);
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


<style scoped>
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