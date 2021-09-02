<template>
  <div class="form-container">
    <form v-on:submit.prevent autocomplete="off">
      <h3>{{ authType }} to add and manage Your posts</h3>

      <div v-if="this.authType === 'Register'" class="reg-fields">
        <!-- NAME -->
        <div class="input">
          <input
            name="name"
            type="text"
            placeholder="Name"
            v-model="newUser.name"
            required
          />
          <label for="name">Name</label>
        </div>
        <!-- SURNAME -->
        <div class="input">
          <input
            name="surname"
            type="text"
            placeholder="Surname"
            v-model="newUser.surname"
            required
          />
          <label for="surname">Surname</label>
        </div>
      </div>
      <!-- EMAIL -->
      <div class="input">
        <input
          name="email"
          type="email"
          placeholder="Email"
          v-model="newUser.username"
          required
        />
        <label for="email">Email</label>
      </div>
      <!-- PASSWORD -->
      <div class="input">
        <input
          name="password"
          type="password"
          placeholder="Password"
          v-model="newUser.password"
          required
        />
        <label for="password">Password</label>
      </div>

      <button class="submit_btn" @click="sendData">
        {{ authType }}
      </button>

      <div v-if="this.authType === 'Register'">
        <div v-for="(error, index) in errors" :key="index">
          {{ error }}
        </div>
      </div>

      <!-- LOADING ANIMATION -->
      <!-- <span>Loading...</span>
      <div class="loader"></div> -->
    </form>

    <div class="register-link-container" v-if="this.authType === 'Log in'">
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
        @click="$emit('change-auth-type', 'Log in')"
      >
        Already have an account? Log in here
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
    async sendData() {
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

      if (this.errors.length > 0) return;

      this.$emit("handle-data", this.newUser);

      await this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins";
}
.form-container {
  width: 20rem;
  align-items: center;
  background: lightgray;
  /* margin: 2rem auto; */
  padding: 25px;
}
h3 {
  text-align: center;
  font-size: 16px;
}
input,
button {
  margin: 12px 0;
  padding: 6px 24px;
  outline: none;
  width: 100%;
  border: 1px solid #dbe2ef;
}

button {
  background: #39c2f5;
  border: none;
  cursor: pointer;
}
.register-link-container {
  font-size: 12px;
  text-align: center;
  padding: 6px 0;
}
.register-link {
  text-decoration: none;
}
.register-link:hover {
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s ease all;
  padding: 0;
  color: #2c92b8;
}
.register-link:focus {
  text-decoration: none;
}
.register-link:active {
  text-decoration: none;
}
span {
  font-size: 12px;
  text-align: center;
}

/* LABEL ANIMATION */
input::placeholder {
  color: transparent;
}
.input {
  margin-bottom: 25px;
}
input {
  display: block;
}

label {
  display: block;
  position: absolute;
  pointer-events: none;
  color: #999;
  transition: 0.5s;
  transform: translateY(-2.7em);
  transform-origin: 0 0;
  transition: all 0.3s;
  margin-left: 22px;
}
input:focus {
  border-bottom: 1px solid red;
}

input:focus-within {
  transform: scale(1.1, 1.1);
  transition: 0.3s;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  transform: translateY(-6em);
  color: red;
  transition: 0.5s;
  background: transparent;
  font-size: 10px;
}

button {
  padding: 8px 30px;
}

</style>