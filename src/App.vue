<template>
  <main class="app__container">
    <app-navbar />
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
