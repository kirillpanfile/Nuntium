<template>
  <div class="profile">
    <div class="profile__wrapper">
      <div class="profile__image">
        <img src="../assets/profile/Profile.jpg" alt="" />
      </div>
      <div class="profile__info">
        <div class="profile__user">Arthur Black</div>
        <div class="profile__user-tag">@arthurblack</div>
        <div class="profile__descr">
          Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam
          tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur
          ex sunt id mollit commodo ipsum deserunt quis.
        </div>
        <div class="profile__links">
          <div class="profile__block">
            <div class="profile__website">
              <img src="../assets/icons/link.svg" alt="" /> arturblack.com
            </div>
          </div>
          <div class="profile__block">
            <a href="" class="profile__link"
              ><img src="../assets/icons/linkedin.svg" alt="linkedIn"
            /></a>
            <a href="" class="profile__link"
              ><img src="../assets/icons/instagram.svg" alt="Instagram"
            /></a>
            <a href="" class="profile__link"
              ><img src="../assets/icons/twitter.svg" alt="Twitter"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="interior">
    <div class="interior__block">
      <div class="interior__block-feature">INTERIOR</div>
      <div class="interior__block-title">Laborum Ullamco Sunt id ut Sunt</div>
      <div class="interior__block-name">
        May 7, 2019 <span>(10 mins read)</span>
      </div>
      <div class="interior__block-text">
        Proident aliquip velit qui commodo officia qui consectetur dolor ullamco
        aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum
        nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
        dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
      </div>
    </div>
  </div>
</template>

<script>
import HomeTagCard from "@/components/UI/HomeTagCard.vue";

export default {
  components: {
    HomeTagCard,
  },
};
</script>

<style></style>
