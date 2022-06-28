<template>
    <div class="card__wrapper card" @load="LoadCards">
        <img src="" alt="">
        <div>123</div>
    </div>
</template>


<script>
export default{
    name: 'HomeCard',
    data(){
        return{
            cardData: []
        }
    },
    methods: {
        LoadCards(){
            this.cardData = this.$store.posts
            console.log(this.cardData);
        }
    },
    mounted(){
        this.LoadCards()
    }
}
</script>