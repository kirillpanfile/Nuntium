<template>
  <div class="header">
    <div class="header__navbar">
      <div class="header__logo"><img src="../assets/navbar/Logo.png" alt=""></div>
      <div class="header__wrapper">
        <div class="header__block">
          <ul class="header__list">
            <li class="header__link"><a href="">Home</a></li>
            <li class="header__link"><a href="">Tags</a></li>
            <li class="header__link"><a href="">About</a></li>
          </ul>
        </div>
        <div class="header__block">
          <ul class="header__list">
            <li class="header__link"><img src="../assets/icons/search.svg" alt=""></li>
            <li class="header__link">
              <app-button>Login</app-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="icon-menu" :class="[menuOpen ? 'menu-open' : '']" @click="menuOpen = !menuOpen">
      <span></span>
    </div>
  </div>
</template>

<script>
import AppButton from './UI/AppButton.vue'
export default {
  components: { AppButton },
  name: "AppNavbar",
  data() {
    return {
      menuOpen: false,
      'menu-open': true,
    };
  },
};
</script>
