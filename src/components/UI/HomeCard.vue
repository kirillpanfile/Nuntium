<template>
  <div class="card__wrapper card">
    <div class="card__wrapper-img">
      <img :src="require(`../../assets/posts/${image}`)" alt="Error" />
    </div>
    <div class="card__desc desc">
      <div class="desc__tag">{{ tag }}</div>
      <div class="desc__title">{{ title }}</div>
      <div class="desc__person person">
        <div class="person__author">{{ author }}</div>
        <div class="person__circle"></div>
        <div class="person__date">{{ date }}</div>
        <!-- 3 mins read -->
      </div>
      <div class="desc__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["tag", "title", "author", "date", "description", "image"],
};
</script>
