<template>
  <div class="card__wrapper card">
    <img :src="this.posts[0].image" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeCard",
  computed: {
    ...mapState(["posts"]),
    featuredPost(){
      return this.posts.sort((a, b) => b.views - a.views).slice(0, 3);
    },
    check(){
        console.log(this.posts[0].image)
    }
  },
    mounted() {
        this.check
    }
};
</script>
