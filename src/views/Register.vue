<template>
  <div class="login login__wrapper">
    <div class="login__title">Welcome!</div>
    <div class="login__hero">Sign up to get the most out of nuntium.</div>
    <login-input v-model.trim="email" :placeholder="'Email'" :type="'email'"></login-input>
    <login-input v-model.trim="username" :placeholder="'Username'" :type="'username'"></login-input>
    <login-input v-model="password" :placeholder="'Password'" :type="'password'"></login-input>
    <app-button :scale="'long'" @click="check">Register</app-button>
    <div class="login__signIn">Already have an account? 
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
  data(){
    return{
        email: '',
        username: '',
        password: '',
        registerUser: {
            email: this.email,
            username: this.username,
            password: this.password
        }
    }
  },
  methods:{
    check(){
        console.log(this.registerUser)
        console.log(this.email);
    }
  },    

  components: {
    AppButton,
    LoginInput,
  },
};
</script>

<style scoped></style>
