<template>
  <section class="home">
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <h1 class="block__title">
        {{ post.title }}
      </h1>
      <div class="block__name">
        <p>{{ post.username }}</p>
        <div class="block__dot"></div>
        <p>{{ currentTime }}</p>
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
        :title="item.title"
        :description="item.desc"
        :author="item.username"
        :date="item.createdAt"
        :image="item.photo"
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
    <select v-model="tag" class="tags__select" v-if="isMobile">
      <option value="" disabled selected>Select your option</option>
      <option v-for="item in allTags" :value="item.name">
        {{ item.name }}
      </option>
    </select>
    <div class="tags__wrapper">
      <div
        class="tags__wrapper-content tags-content"
        :class="allPosts.length === 0 ? 'flex-center' : ''"
      >
        <transition-group v-if="tagPosts.length !== 0" name="list">
          <HomeTagCard
            v-for="item in tagPosts"
            :key="item._id"
            :title="item.title"
            :description="item.desc"
            :author="item.username"
            :date="item.createdAt"
            :image="item.photo"
            :tag="item.categories"
          />
        </transition-group>
        <div v-else class="tags__empty">
          There are no card with tag:
          <strong>{{ tag }}</strong>
        </div>
      </div>
      <div class="tags__wrapper-list tags-list" v-if="!isMobile">
        <h1 class="tags-list-title">tags.</h1>
        <div class="tags-list-wrapper">
          <button
            class="tags-list-item"
            v-for="(item, index) in allTags"
            :key="index"
            @click="tag = item.name"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeCard from "@/components/UI/HomeCard";
import HomeTagCard from "@/components/UI/HomeTagCard";
import utils from "@/utils";
import { mapGetters, mapState } from "vuex";
export default {
  extends: utils,
  data() {
    return {
      DefaultWidth: window.innerWidth,
      tag: "",
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
    console.log(utils);
    this.$store.dispatch("fetchTags");
  },
  computed: {
    ...mapGetters({
      post: "featuredPost",
      tagPosts: "tagPosts",
      featuredPosts: "featuredPosts",
    }),
    ...mapState({
      allTags: "allTags",
      allPosts: "allPosts",
    }),
    currentTag() {
      return this.allTags[0].name;
    },
  },
  watch: {
    tag(newTag) {
      this.$store.commit("setTag", newTag);
    },
  },
};
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.5s ease;

  transform: translateX(60px);
}
</style>
