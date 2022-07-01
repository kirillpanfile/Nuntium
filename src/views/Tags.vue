<template>
  <div class="tags-page tags-page__wrapper">
    <div class="tags-page__field">
      <input
        v-model="currentTag"
        type="text"
        placeholder="Find the topics you care about..."
      />
      <img src="@/assets/icons/search.svg" alt="" />
    </div>
    <div class="tags-page__choices">
      <div
        class="tags-page__variant"
        v-for="item in currentTypeSearch"
        :key="item._id"
        @click="currentTag = item.name"
      >
        #{{ item.name }}
      </div>
    </div>
    <transition-group name="list">
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
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import HomeTagCard from "@/components/UI/HomeTagCard";
export default {
  name: "tags",

  data() {
    return {
      searchTag: [],
      currentTag: "",
    };
  },

  computed: {
    ...mapGetters(["tagPosts"]),
    ...mapState(["allTags"]),
    currentTypeSearch() {
      return this.allTags.filter((item) => {
        return item.name.includes(this.currentTag);
      });
    },
  },
  watch: {
    currentTag(newTag) {
      this.$store.commit("setTag", newTag);
    },
  },
  components: {
    HomeTagCard,
  },
};
</script>
