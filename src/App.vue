<template>
  <app-navbar />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  async mounted() {
    let data = await fetch("/api/posts");
  },
};
</script>
