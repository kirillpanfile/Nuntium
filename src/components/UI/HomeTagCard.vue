<template>
  <div class="tag-card">
    <div class="tag-card__image">
      <img :src="'http://localhost:5000/images/' + image" alt="" />
    </div>
    <div class="tag-card__content">
      <div class="tag-card__tag">
        <span v-for="(item, index) in tag" :key="index"> {{ item }}</span>
      </div>
      <div class="tag-card__title">{{ title }}</div>
      <div class="tag-card__info">
        <div class="tag-card__author">{{ author }}</div>
        <div class="tag-dot"></div>
        <div class="tag-card__date">{{ date }}</div>
      </div>
      <div class="tag-card__description">{{ shortDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTagCard",
  props: {
    tag: Array,
    title: String,
    description: String,
    author: String,
    date: String,
    image: String,
  },
  data() {
    return {
      DefaultWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.DefaultWidth = window.innerWidth;
    });
  },
  computed: {
    shortDescription() {
      return this.description.slice(0, this.DefaultWidth / 10) + "...";
    },
  },
};
</script>

<style scoped>
span {
  margin-right: 4px;
}
</style>
