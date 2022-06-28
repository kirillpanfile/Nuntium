<template>
  <div class="tag__wrapper">
    <img :src="require(`../../assets/posts/${image}`)" alt="Error" />
    <div class="tag__descr descr">
      <div class="descr__tag">{{ tag }}</div>
      <div class="descr__title">{{ title }}</div>
      <div class="descr__person user">
        <div class="user__author">{{ author }}</div>
        <div class="user__circle"></div>
        <div class="user__date">{{ date }}</div>
        <!-- 3 mins read -->
      </div>
      <div class="desc__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsCard",
  props: ["tag", "title", "author", "date", "description", "image"],
};
</script>

<style></style>
