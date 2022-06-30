<template>
  <div class="login login__wrapper">
    <div class="login__title">Welcome back!</div>
    <div class="login__hero">Sign in to get the most out of nuntium.</div>
    <login-input
      @update:username="username = $event"
      :placeholder="'Email'"
      :type="'username'"
    ></login-input>
    <login-input
      :placeholder="'Password'"
      @update:password="password = $event"
      :type="'password'"
    ></login-input>
    <div class="login__options">
      <div class="flex">
        <input type="checkbox" id="remember" />
        <label for="remember">Remember me</label>
      </div>
      <a href="#" class="login__forgot">Forgot Password?</a>
    </div>
    <app-button @click="logIn" :scale="'long'">Login</app-button>
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
  components: {
    AppButton,
    LoginInput,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("logIn", {
        identifier: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped></style>
