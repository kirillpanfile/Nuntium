<template>
  <section class="home">
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <h1 class="block__title">
        {{ featuredPost.title }}
      </h1>
      <div class="block__name">
        <p>{{ featuredPost.author }}</p>
        <div class="block__dot"></div>
        <p>{{ featuredPost.date }} (10 mins read)</p>
      </div>
      <h2 class="block__text">
        {{ sliceText }}
      </h2>
    </div>
  </section>

  <section class="editor">
    <div class="editor__title">Editor's Picks</div>
    <div class="editor__wrapper">
      <home-card
        v-for="item in featuredPosts"
        :key="item.id"
        :tag="item.tag"
        :title="item.title"
        :description="item.description"
        :author="item.author"
        :date="item.date"
        :image="item.image"
      ></home-card>
    </div>
  </section>

  <section class="flower">
    <div class="flower__block block">
      <h1 class="block__feature">INTERIOR</h1>
      <h4 class="block__title">Laborum Ullamco Sunt id ut Sunt</h4>
      <div class="block__name">
        <p>Bessie Hawkins</p>
        <div class="block__dot"></div>
        <p>May 7, 2019 (10 mins read)</p>
      </div>
      <h2 class="block__text">
        {{ sliceText }}
      </h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import HomeCard from "@/components/UI/HomeCard";
export default {
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
    ...mapGetters(["featuredPost"]),
    ...mapGetters(["featuredPosts"]),
    sliceText() {
      return (
        this.featuredPost.description.slice(0, this.DefaultWidth / 4) + "..."
      );
    },
  },
  components: {
    HomeCard,
  },
};
</script>
