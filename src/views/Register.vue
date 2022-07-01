<template>
  <div class="login login__wrapper">
    <div class="login__title">Welcome!</div>
    <div class="login__hero">Sign up to get the most out of nuntium.</div>
    <login-input
      @email="
        (data) => {
          email = data;
        }
      "
      v-model.trim="email"
      :placeholder="'Email'"
      :type="'email'"
    ></login-input>
    <login-input
      v-model.trim="username"
      :placeholder="'Username'"
      :type="'username'"
      @username="
        (data) => {
          username = data;
        }
      "
    ></login-input>
    <login-input
      v-model="password"
      :placeholder="'Password'"
      :type="'password'"
      @password="
        (data) => {
          password = data;
        }
      "
    ></login-input>
    <app-button :scale="'long'" @click="submit">Register</app-button>
    <div class="login__signIn">
      Already have an account?
      <router-link to="/login" class="login__translate">Sign In</router-link>
    </div>
  </div>

  <router-link to="/screenlock" class="screenlock"
    >See screenlock page</router-link
  >
</template>

<script>
import AppButton from "@/components/UI/AppButton";
import LoginInput from "@/components/UI/LoginInput";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      const createUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("createUser", createUser);
    },
  },

  components: {
    AppButton,
    LoginInput,
  },
};
</script>

<style scoped></style>
