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
  async mounted() {
    this.$store.dispatch("fetchPosts").then(() => {
      this.loaded = true;
    });
  },
};
</script>
