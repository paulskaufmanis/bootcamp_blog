<template>
  <div class="form-container">
    <form v-on:submit.prevent>
      <h3>{{ authType }}</h3>

      <div v-if="this.authType === 'Register'" class="reg-fields">
        <label for="name">Name:</label>
        <input name="name" type="text" v-model="newUser.name" />

        <label for="surname">Surname:</label>
        <input name="surname" type="text" v-model="newUser.surname" />
      </div>
      <label for="email">Email:</label>
      <input name="email" type="email" v-model="newUser.username" />

      <label for="password">Password:</label>
      <input name="password" type="password" v-model="newUser.password" />

      <button class="submit_btn" @click="sendData">
        {{ authType }}
      </button>
      <div v-if="this.authType === 'Register'">
        <div v-for="(error, index) in errors" :key="index">
          {{ error }}
        </div>
      </div>
    </form>
    <div class="register-link-container" v-if="this.authType === 'Login'">
      <router-link
        to="/register"
        class="register-link"
        @click="$emit('change-auth-type', 'Register')"
      >
        Don't have an account? Register here
      </router-link>
    </div>
    <div class="register-link-container" v-if="this.authType === 'Register'">
      <router-link
        to="/login"
        class="register-link"
        @click="$emit('change-auth-type', 'Login')"
      >
        Already have an account? Login here
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: "",
        surname: "",
        username: "",
        password: "",
      },
      errors: [],
      //added login error
      // loginError: "",
    };
  },
  props: {
    authType: String,
  },
  methods: {
    sendData() {
      this.errors = [];
      if (this.newUser.password.length < 6) {
        this.errors.push("- Password too short. Minimum 6 characters \n");
      }

      if (!/\d/.test(this.newUser.password)) {
        this.errors.push("- Password must contain a number \n");
      }

      if (!/[a-z]/.test(this.newUser.password)) {
        this.errors.push("- Password must contain a letter \n");
      }
      console.log(this.errors);

      if (this.errors.length > 0) return;

      this.$emit("handle-data", this.newUser);

      // this.$router.push("/");
    },
  },
};
</script>

<style>
.form-container {
  width: 20rem;
  align-items: center;
  background: lightgray;
  margin: 2rem auto;
  border: 1px solid grey;
  border-radius: 0.5rem;
}

form,
.reg-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 2rem;
}

.form-input {
  justify-content: right;
}

.submit_btn {
  margin: 1rem;
  height: 2rem;
  text-transform: uppercase;
  font-size: smaller;
  font-weight: 600;
}

.register-link-container {
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
  font-size: smaller;
}

.register-link {
  text-decoration: none;
}
</style>