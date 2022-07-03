<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__wrapper-logo">
        <router-link to="/">
          <img src="../assets/navbar/Logo.png" alt="" />
        </router-link>
      </div>
      <div
        class="header__wrapper-block header-block"
        v-if="!isScreenLock"
        :class="{ 'header__wrapper-mobile': menuOpen }"
      >
        <ul class="header-block__nav header-nav">
          <li class="header-block__link-x" @click="menuOpen = false">✖</li>
          <li class="header-block__link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="header-block__link">
            <router-link to="/tags">Tags</router-link>
          </li>
          <li class="header-block__link">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
        <nav class="header-block__user">
          <form action="" class="search__form">
            <img src="../assets/icons/search.svg" alt="" />
            <input type="search" required />
          </form>
          <router-link to="/login" v-if="!$store.state.isAuth">
            <app-button>Login</app-button>
          </router-link>
          <div class="header-profile" v-else>
            <div class="header-image">
              <img
                :src="'http://localhost:5000/images/' + user.profilePic"
                alt="Error"
                @click="dropDownOpen = !dropDownOpen"
                v-if="user.profilePic"
              />
              <span v-else>loading...</span>
            </div>
            <app-drop-down v-if="dropDownOpen"></app-drop-down>
          </div>
        </nav>
      </div>
      <div
        class="icon-menu"
        @click="menuOpen = !menuOpen"
        :class="{ menuopen: menuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-if="menuOpen" class="overlay" @click="menuOpen = false"></div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import AppButton from "./UI/AppButton.vue";
import AppDropDown from "./UI/AppDropDown.vue";
export default {
  components: { AppButton, AppDropDown },
  name: "AppNavbar",
  data() {
    return {
      menuOpen: false,
      dropDownOpen: false,
    };
  },
  watch: {
    menuOpen() {
      document.body.style.overflow = this.menuOpen ? "hidden" : "auto";
    },
  },
  computed: {
    ...mapState(["user"]),
    isScreenLock() {
      return this.$route.path.includes("/screenlock");
    },
  },
};
</script>
