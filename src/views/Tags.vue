<template>
    <div class="tags-page tags-page__wrapper">
        <div class="tags-page__field">
            <input v-model="currentTag" type="text" placeholder="Find the topics you care about..." />
            <img src="@/assets/icons/search.svg" alt="">
        </div>
         <div class="tags-page__choices" v-if="currentTag === ''">
            <div 
                class="tags-page__variant" 
                v-for="item in tags" 
                :key="item"
                @click="currentTag = item"
                >#{{ item.toLowerCase() }}
            </div>
        </div>
        <transition-group v-else name="list">
            <HomeTagCard
            v-for="card in tagPosts"
            :key="card.id"
            :title="card.title"
            :description="card.description"
            :author="card.author"
            :date="card.date"
            :image="card.image"
            :tag="card.tag"
          />
        </transition-group>
    </div>
    <button @click="check">123</button>
</template>

<script>
import { mapGetters } from "vuex";
import HomeTagCard from "@/components/UI/HomeTagCard";
export default{
    name: "tags",


    data(){
        return{
            tags: [
            "Technology",
            "Open Source",
            "Minimalism",
            "Self-help",
            "Animals",
            "Nature",
            "Web Technologies",
            "Career",
            "Life",
            "Food",
            "Sports",
            "Technology",
            "Open Source",
            "Minimalism",
            "Self-help",
            "Animals",
            "Nature",
            "Web Technologies",
            "Career",
            "Life",
            "Food",
            "Sports",
            "Technology",
            "Open Source",
            "Minimalism",
            "Self-help",
            "Animals",
            "Nature",
            "Web Technologies",
            "Career",
            "Life",
            "Food",
            "Sports",
            ],
            currentTag: ''
        }
    },

    computed: {
        ...mapGetters(["tagPosts"]),
        check(){
            console.log(this.tagPosts)
        }
    },
    components:{
        HomeTagCard
    }
}
</script>