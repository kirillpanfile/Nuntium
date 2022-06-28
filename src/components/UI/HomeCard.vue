<template>
  <div class="card__wrapper card">
    <img :src="require(`../../assets/posts/${featuredPost[0].image}`)" alt="" />
  </div>
  {{ featuredPost[0].image }}
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeCard",
  computed: {
    ...mapState(["posts"]),
    featuredPost() {
      console.log(this.posts.sort((a, b) => b.views - a.views).slice(0, 1));
      return this.posts.sort((a, b) => b.views - a.views).slice(0, 1);
    },
  },
};
</script>
