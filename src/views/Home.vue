<template>
  <div class="home__container home">
    <img src="../assets/home-hero/hero-image.jpg" alt="">
    <div class="home__block block">
      <div class="block__feature">FEATURED ARTICLE</div>
      <div class="block__title">World’s Most Dangerous Technology Ever Made.</div>
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
</template>

<script>
export default {
  data(){
    return{
      text: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
      DefaultWidth: 0
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.DefaultWidth = window.innerWidth
    })
  },
  computed: {
    sliceText(){
      if(this.DefaultWidth > 650){
        this.text = 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.'
        return this.text
      }
      else if(this.DefaultWidth <= 650 && this.DefaultWidth > 500){
        this.text = 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur.'
        return this.text
      }
      else if(this.DefaultWidth <= 500 && this.DefaultWidth > 400){
        this.text = 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.'
        return this.text
      }
      else if(this.DefaultWidth <= 400){
        this.text = 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.'
        return this.text
      }
    }
  }
};
</script>

