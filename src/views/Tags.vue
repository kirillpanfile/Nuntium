<template>
    <div class="tags-page tags-page__wrapper">
        <div class="tags-page__field">
            <input type="text" placeholder="Find the topics you care about..." />
            <img src="@/assets/icons/search.svg" alt="">
        </div>
         <div class="tags-page__choices">
            <div class="tags-page__variant" v-for="item in tags" :key="item">
                #{{ item.toLowerCase() }}
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }


}
</script>