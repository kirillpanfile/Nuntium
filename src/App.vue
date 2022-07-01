<template>
  <main class="app__container" v-if="loaded">
    <app-navbar />
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.$store.dispatch("fetchPosts").then(() => {
      this.$store.dispatch("fetchTags");
      this.loaded = true;
    });
    if (this.getCookie("token"))
      this.$store.dispatch("loginByJwt", this.getCookie("token"));
  },
  methods: {
    getCookie(name) {
      const pattern = RegExp(name + "=.[^;]*");
      const matched = document.cookie.match(pattern);
      if (matched) {
        const cookie = matched[0].split("=");
        return cookie[1];
      }
      return false;
    },
  },
};
</script>
