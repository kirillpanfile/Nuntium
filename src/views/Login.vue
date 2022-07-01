<template>
  <div class="login login__wrapper">
    <div class="login__title">Welcome back!</div>
    <div class="login__hero">Sign in to get the most out of nuntium.</div>
    <login-input
      @username="
        (data) => {
          username = data;
        }
      "
      :placeholder="'Username'"
      :type="'username'"
    ></login-input>
    <login-input
      @password="
        (data) => {
          password = data;
        }
      "
      :placeholder="'Password'"
      :type="'password'"
    ></login-input>
    <div class="login__options">
      <div class="flex">
        <input v-model="remember" type="checkbox" id="remember" />
        <label for="remember">Remember me</label>
      </div>
      <a href="#" class="login__forgot">Forgot Password?</a>
    </div>
    <app-button :scale="'long'" @click="submit">Login</app-button>
    <div class="login__register">
      Dont have a account?
      <router-link to="/register" class="login__signUp">Sign Up</router-link>
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
  components: {
    AppButton,
    LoginInput,
  },
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    submit() {
      const user = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("login", {
        user: user,
        remember: this.remember,
      });
    },
  },
};
</script>

<style scoped></style>
