<template>
  <div class="card">
    <div class="card-img">
      <img :src="require(`../../assets/posts/${image}`)" alt="Error" />
    </div>
    <div class="card__content">
      <div class="card__content-tag">{{ tag }}</div>
      <div class="card__content-title">{{ title }}</div>
      <div class="card__content-person card-person">
        <div class="card-person__author">{{ author }}</div>
        <div class="card-person__circle"></div>
        <div class="card-person__date">{{ date }}</div>
        <!-- 3 mins read -->
      </div>
      <div class="card__content-description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["tag", "title", "author", "date", "description", "image"],
};
</script>
