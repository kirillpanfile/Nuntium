<template>
  <app-navbar />
  <main class="app__container">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
