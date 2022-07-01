<template>
  <section class="home">
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <h1 class="block__title">
        {{ featuredPost.title }}
      </h1>
      <div class="block__name">
        <p>{{ featuredPost.username }}</p>
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
     <!-- <select v-model="currentTag" class="tags__select" v-if="isMobile">
      <option v-for="item in tags" :value="item">
        {{ item }}
      </option>
    </select>  -->
    <div class="tags__wrapper">
      <div
        class="tags__wrapper-content tags-content"
      >
        <transition-group name="list">
          <HomeTagCard
            v-for="item in allPosts"
            :key="item._id"
            :title="item.title"
            :description="item.desc"
            :author="item.username"
            :date="item.updatedAt"
            :image="'http://localhost:5000/images/' + item.photo"
            :tag="item.categories"
          />
        </transition-group>
        <!-- <div v-else class="tags__empty">
          There are no card with tag:
           <strong>{{ currentTag }}</strong> 
        </div> -->
      </div>
      <div class="tags__wrapper-list tags-list" v-if="!isMobile">
        <h1 class="tags-list-title">tags.</h1>
        <div class="tags-list-wrapper">
          <button
            class="tags-list-item"
            v-for="item in allTags"
            :key="item._id"
            @click="selectedTag = item.name"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <ul class="test">
    <!-- <li v-for="item in allPosts" :key="item.id">{{item.categories}}</li> -->
    <li></li>
  </ul>
  
</template>

<script>
import HomeCard from "@/components/UI/HomeCard";
import HomeTagCard from "@/components/UI/HomeTagCard";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      DefaultWidth: window.innerWidth,
      selectedTag: 'Technology',
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
    this.$store.dispatch("fetchTags");
  },
  computed: {
    ...mapGetters(["featuredPost"]),
    ...mapGetters(["featuredPosts"]),
    ...mapGetters(["selectedPosts"]),
    ...mapState(["allTags"]),
    ...mapState(["allPosts"]),
    currentTime() {
      let created = [...this.featuredPost.createdAt];
      created.length = 10;
      return created.join("");
    },
    sliceText() {
      return this.featuredPost.desc.slice(0, this.DefaultWidth / 4) + "...";
    },
    isMobile() {
      return this.DefaultWidth < 768;
    },
  },
  watch:{
      selectedTag(){
        let tags = []
        // for(let i = 0; i < this.allPosts.length; i++){
        //   tags[i].id = this.allPosts[i]._id
        //   tags[i].category = this.allPosts[i].categories
        // }
        console.log(this.selectedPosts);
        // console.log(tags)
      }
  },
};
// export default {
//   data() {
//     return {
//       DefaultWidth: window.innerWidth,
//       tags: [
//         "Technology",
//         "Open Source",
//         "Minimalism",
//         "Self-help",
//         "Animals",
//         "Nature",
//         "Web Technologies",
//         "Career",
//         "Life",
//         "Food",
//         "Sports",
//       ],
//       currentTag: "FOOD",
//     };
//   },
//   components: {
//     HomeCard,
//     HomeTagCard,
//   },
//   mounted() {
//     window.addEventListener("resize", () => {
//       this.DefaultWidth = window.innerWidth;
//     });
//     if (!this.$store.state.tagPosts.length)
//       this.$store.dispatch("getItemsByTag", "FOOD");
//   },
//   watch: {
//     currentTag(newTag) {
//       this.$store.dispatch("getItemsByTag", newTag.toUpperCase());
//     },
//   },
//   computed: {
//     ...mapGetters(["featuredPost"]),
//     ...mapGetters(["featuredPosts"]),
//     ...mapGetters(["tagPosts"]),
//     sliceText() {
//       return (
//         this.featuredPost.description.slice(0, this.DefaultWidth / 4) + "..."
//       );
//     },
//     isMobile() {
//       return this.DefaultWidth < 991;
//     },
//   },
// };
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
