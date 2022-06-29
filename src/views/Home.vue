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

  <section class="tags">
    <select class="tags__select" v-if="isMobile">
      <option v-for="item in tags" :value="item.tag">{{ item }}</option>
    </select>
    <div class="tags__wrapper">
      <div class="tags__wrapper-content tags-content">
        <HomeTagCard
          v-for="(item, index) in featuredPosts"
          :key="index"
          :title="item.title"
          :description="item.description"
          :author="item.author"
          :date="item.date"
          :image="item.image"
          :tag="item.tag"
        />
      </div>
      <div class="tags__wrapper-list tags-list" v-if="!isMobile">
        <h1 class="tags-list-title">tags.</h1>
        <div class="tags-list-wrapper">
          <button
            class="tags-list-item"
            v-for="(item, index) in tags"
            :key="index"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import HomeCard from "@/components/UI/HomeCard";
import HomeTagCard from "@/components/UI/HomeTagCard";
export default {
  data() {
    return {
      DefaultWidth: window.innerWidth,
      tags: [
        "Technology",
        "Open Source",
        "JavaScript",
        "Minimalism",
        "Self-help",
        "Animals",
        "Herbivores",
        "HTML",
        "CSS",
        "PHP",
        "Web Technologies",
        "Career",
        "Life",
        "Spirituality",
        "Food",
        "Cooking",
        "Sports",
        "Racing",
        "Mountain Hiking",
        "Cruising",
      ],
      isMobile: this.isMobile,
    };
  },
  components: {
    HomeCard,
    HomeTagCard,
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
    isMobile() {
      return this.DefaultWidth < 991;
    },
  },
};
</script>
