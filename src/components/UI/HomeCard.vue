<template>
  <div class="card">
    <div class="card-img">
      <img :src="'http://localhost:5000/images/' + image" alt="Error" />
    </div>
    <div class="card__content">
      <h4 class="card__content-tag">{{ tag }}</h4>
      <h1 class="card__content-title">{{ title }}</h1>
      <div class="card__content-person card-person">
        <p class="card-person__author">{{ author }}</p>
        <div class="card-person__circle"></div>
        <p class="card-person__date">{{ date }}</p>
        <!-- 3 mins read -->
      </div>
      <p class="card__content-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["tag", "title", "author", "date", "description", "image"],
};
</script>
