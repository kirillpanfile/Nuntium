<template>
  <div class="home">
    <img src="../assets/home-hero/hero-image.jpg" alt="" />
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <div class="block__title">
        {{ featuredPost.title }}
      </div>
      <div class="block__name">
        <p>{{ featuredPost.author }}</p>
        <div class="block__dot"></div>
        <p>{{ featuredPost.date }} (10 mins read)</p>
      </div>
      <div class="block__text">
        {{ sliceText }}
      </div>
    </div>
  </div>

  <div class="editor">
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
  </div>
  <div class="flower">
    <img src="../assets/home-flower/flower-image.png" alt="" />
    <div class="flower__block block">
      <div class="block__feature">INTERIOR</div>
      <div class="block__title">Laborum Ullamco Sunt id ut Sunt</div>
      <div class="block__name">
        <p>Bessie Hawkins</p>
        <div class="block__dot"></div>
        <p>May 7, 2019 (10 mins read)</p>
      </div>
      <div class="block__text">
        {{ sliceText }}
      </div>
    </div>
  </div>
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
