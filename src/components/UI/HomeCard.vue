<template>
  <div class="card__wrapper card">
    <img :src="require(`../../assets/posts/${featuredPost[0].image}`)" alt="Error" />
    <div class="card__desc desc">
        <div class="desc__tag">{{ featuredPost[0].tag }}</div>
        <div class="desc__title">{{ featuredPost[0].title }}</div>
        <div class="desc__person person">
            <div class="person__author">{{ featuredPost[0].author }}</div>
            <div class="person__circle"></div>
            <div class="person__date">{{ featuredPost[0].date }}</div>
            <!-- 3 mins read -->
        </div>
        <div class="desc__description">{{ featuredPost[0].description }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeCard",
  computed: {
    ...mapState(["posts"]),
    featuredPost() {
      return this.posts.sort((a, b) => b.views - a.views).slice(0, 1);
    },
  },
};
</script>
