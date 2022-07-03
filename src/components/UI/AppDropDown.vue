<template>
  <div class="dropdown dropdown__wrapper">
    <div class="dropdown__block">
      <div class="dropdown__title">
        <router-link to="" @click="goToUser">
          <strong>{{ user.username }}</strong>
        </router-link>
      </div>
      <div class="dropdown__mail">@{{ user.username }}</div>
    </div>

    <hr />

    <ul class="dropdown__block">
      <li>Dashboard</li>
      <li>Write a Post</li>
      <li>Settings</li>
      <li>Help</li>
      <li>Sign out</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppDropDown",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    goToUser() {
      this.$router.push("profile?name=" + this.user.username);
    },
  },
};
</script>
