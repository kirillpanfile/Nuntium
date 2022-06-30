<template>
    <div class="about__hero hero">
        <div class="hero__image">
            <img src="@/assets/navbar/Logo-wide.png" alt="Error">
        </div>
        <div class="hero__text">A publishing company that focuses on the essentials.</div>
    </div>

    <div class="about__wrapper about">
        <div class="about__block">
            <div class="about__angel angel">
                <div class="angel__desc">
                    <div class="angel__title">We tell stories that drives the heart.</div>
                    <div class="angel__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</div>
                </div>
                <div class="angel__image">
                    <img src="@/assets/about-images/about-1.jpg" alt="Error">
                </div>
            </div>
            <div class="about__woman woman">
                <div class="woman__image">
                    <img src="@/assets/about-images/about-2.jpg" alt="Error">
                </div>
                <div class="woman__desc">
                    <div class="woman__title">We tell the news that makes the most impact.</div>
                    <div class="woman__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</div>
                </div>
            </div>
            <div class="about__share share">
                <div class="share__title">We share the little moments that shows we’re alive.</div>
                <div class="share__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</div>
            </div>
            <div class="about__carousel carousel">
                <div class="carousel__image" v-for="item in images" :key="item">
                    <img :src="require(`../assets/about-images/${item}`)" alt="Error" />
                </div>       
            </div>
        </div>
    </div>

    <div class="about__humans humans">
        <div class="humans__title">Because we are you. Humans.</div>
        <div class="humans__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</div>
    </div>

    <div class="about__footer footer">
        <div class="footer__title">want to connect?</div>
        <div class="footer__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</div>
        <div class="footer__socials">
            <img :src="require(`@/assets/icons/${item}`)" v-for="item in icons" :key="item" alt="Error" />
        </div>
    </div>

</template>

<script>
export default{
    name: 'about',
    data(){
        return{
            images: ['about-5.jpg','about-4.jpg','about-3.jpg'],
            icons: ['instagram.svg','twitter.svg','linkedIn.svg']
        }
    }
}
</script>