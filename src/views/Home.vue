<template>
  <div class="home">
    <img src="../assets/home-hero/hero-image.jpg" alt="" />
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <div class="block__title">
        World’s Most Dangerous Technology Ever Made.
      </div>
      <div class="block__name">
        <p>Ralph Hawkins</p>
        <div class="block__dot"></div>
        <p>May 7, 2019 (10 mins read)</p>
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
  <div class="aside">
    <div class="aside__wrapper">
      <div class="aside__block">
        <tags-card
          v-for="item in getPosts"
          :key="item.id"
          :tag="item.tag"
          :title="item.title"
          :description="item.description"
          :author="item.author"
          :date="item.date"
          :image="item.image"
        ></tags-card>
      </div>
      <div class="aside__block sidenav">
        <div class="sidenav__title">tags.</div>
        <ul class="sidenav__wrapper">
          <li class="sidenav__tag" v-for="item in tags" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeCard from "@/components/UI/HomeCard";
import TagsCard from "@/components/UI/TagsCard";
export default {
  data() {
    return {
      text: "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.",
      DefaultWidth: 0,
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
    ...mapGetters(["getPosts"]),
    sliceText() {
      if (this.DefaultWidth > 650) {
        this.text =
          "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.";
        return this.text;
      } else if (this.DefaultWidth <= 650 && this.DefaultWidth > 500) {
        this.text =
          "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur.";
        return this.text;
      } else if (this.DefaultWidth <= 500 && this.DefaultWidth > 400) {
        this.text =
          "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.";
        return this.text;
      } else if (this.DefaultWidth <= 400) {
        this.text =
          "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.";
        return this.text;
      }
    },
  },
  components: {
    HomeCard,
    TagsCard,
  },
};
</script>
