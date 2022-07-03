<template>
  <div v-if="loaded">
    <div class="profile">
      <div class="profile__wrapper">
        <div class="profile__image">
          <img
            :src="
              'http://localhost:5000/images/' + currentUserProfile.profilePic
            "
            v-if="currentUserProfile.profilePic"
            alt=""
          />
          <span v-else>loading...</span>
        </div>
        <div class="profile__info">
          <div class="profile__user">
            {{ currentUserProfile.name }}
          </div>
          <div class="profile__user-tag">
            <router-link
              :to="{
                path: '/profile',
                query: {
                  id: currentUserProfile._id,
                },
              }"
              target="_blank"
            >
              @{{ currentUserProfile.username }}
            </router-link>
          </div>
          <div class="profile__descr">
            {{ currentUserProfile.description }}
          </div>
          <div class="profile__links">
            <div class="profile__block">
              <div class="profile__website" v-if="currentUserProfile.website">
                <a :href="currentUserProfile.website" target="_blank">
                  <img src="../assets/icons/link.svg" alt="" />
                  {{ currentUserProfile.username }}
                </a>
              </div>
            </div>
            <div class="profile__block">
              <a
                v-if="currentUserProfile.linkedin"
                target="_blank"
                :href="currentUserProfile.linkedin"
                class="profile__link"
                ><img src="../assets/icons/linkedIn.svg" alt="linkedIn"
              /></a>
              <a
                v-if="currentUserProfile.instagram"
                target="_blank"
                :href="currentUserProfile.instagram"
                class="profile__link"
                ><img src="../assets/icons/instagram.svg" alt="Instagram"
              /></a>
              <a
                v-if="currentUserProfile.twitter"
                target="_blank"
                :href="currentUserProfile.twitter"
                class="profile__link"
                ><img src="../assets/icons/twitter.svg" alt="Twitter"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="interior" v-if="post">
      <div class="interior__block">
        <div class="interior__block-feature">
          <span v-for="(item, index) in post.categories" :key="index">
            {{ item }}</span
          >
        </div>
        <div class="interior__block-title">{{ post.title }}</div>
        <div class="interior__block-name">
          {{ currentTime }}
        </div>
        <div class="interior__block-text">
          {{ userText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTagCard from "@/components/UI/HomeTagCard.vue";
import { mapState, mapGetters } from "vuex";
import utils from "@/utils";
export default {
  extends: utils,
  components: {
    HomeTagCard,
  },
  data() {
    return {
      loaded: false,
      DefaultWidth: window.innerWidth,
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapState(["currentUserProfile"]),
    ...mapState(["userPosts"]),
    ...mapGetters({
      post: "userFeaturedPost",
    }),
  },
  watch: {
    // route qurry
    "$route.query.name"() {
      this.getUser();
    },
  },
  methods: {
    getUser() {
      this.$store.dispatch("getUser", this.$route.query.name).then(() => {
        this.$store
          .dispatch(
            "getUserPosts",
            this.$store.state.currentUserProfile.username
          )
          .then(() => {
            this.loaded = true;
          });
      });
    },
  },
};
</script>

<style></style>
