<template>
    <div class="about about__wrapper about__margins">
        <div class="about__logo">
            <img src="@/assets/navbar/Logo.png" alt="" />
        </div> 
        <div class="about__desc">
            A publishing company that focuses on the essentials.
        </div>
    </div>

    <div class="about__block">
        <div class="about__wrapper">
            <div class="about__angel angel">
                <div class="angel__block">
                    <h3>We tell stories that drives the heart.</h3>
                    <p>
                        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi 
                        qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa 
                        qui minim pariatur et officia elit id. Tempor cupidatat veniam esse 
                        ad veniam dolore excepteur tempor dolor consectetur ut id.
                    </p>
                </div>
                <div class="angel__block">
                    <img src="../assets/about-images/about-1.jpg" alt="">
                </div>
            </div>
    
            <div class="about__doamna doamna">
                <div class="doamna__image">
                    <img src="@/assets/about-images/about-2.jpg" alt="">
                </div>
                <div class="doamna__desc">
                    <h3>We tell the news that makes the most impact.</h3>
                    <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
                </div>
            </div>
    
            <div class="about__share share">
                <h3>We share the little moments that shows we’re alive.</h3>
                <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
            </div>
    
        </div>
        <div class="about__colaj colaj">
            <div class="colaj__image" v-for="item in images" :key="item">
                <img :src="require(`../assets/about-images/${item}`)" alt="Error" >
            </div>
        </div>
    </div>
    <div class="about__human human">
        <div class="human__title">Because we are you. Humans.</div>
        <div class="human__descr">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</div>
    </div>

    <div class="about__footer footer">
        <div class="footer__title">want to connect?</div>
        <div class="footer__desc">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</div>
        <div class="footer__socials">
            <img :src="require(`@/assets/icons/${item}`)" v-for="item in icons" :key="item" alt="Error">
        </div>
    </div>
</template>

<script>
export default{
    name: 'about',
    data(){
        return{
            images: ['about-5.jpg','about-4.jpg','about-3.jpg',],
            icons: ['instagram.svg','twitter.svg','linkedIn.svg']
        }
    }
}
</script>