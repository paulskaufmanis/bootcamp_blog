<template>
  <div class="form-container">
    <form v-on:submit.prevent>
      <h3>{{ authType }}</h3>
      <label v-if="this.authType === 'Register'" for="name">Name:</label>
      <input
        v-if="this.authType === 'Register'"
        name="name"
        type="text"
        v-model="newUser.name"
      />
      <label v-if="this.authType === 'Register'" for="surname">Surname:</label>
      <input
        v-if="this.authType === 'Register'"
        name="surname"
        type="text"
        v-model="newUser.surname"
      />
      <label for="email">Email:</label>
      <input name="email" type="email" v-model="newUser.username" />
      <label for="password">Password:</label>
      <input name="password" type="password" v-model="newUser.password" />
      <button
        class="submit_btn"
        @click="$emit('handle-data', newUser), clearForm"
      >
        {{ authType }}
      </button>
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
    };
  },
  props: {
    authType: String,
  },
  methods: {
    clearForm() {
      this.newUser.name = "";
      this.newUser.surname = "";
      this.newUser.username = "";
      this.newUser.password = "";
    },
  },
};
</script>

<style>
.form-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 20rem;
  align-items: center;
  background: lightgray;
  margin: 2rem auto;
  border: 1px solid grey;
  border-radius: 0.5rem;
}

form {
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