<template>
    <div class="input input__wrapper">
        <img class="input__icon" src="@/assets/icons/user.svg" v-if="type === 'username' " alt="Error" />
        <img class="input__icon" src="@/assets/icons/key.svg" v-else-if="type === 'password'" alt="Error">
        <img class="input__icon" src="@/assets/icons/email.svg" v-else alt="Error">
        <input type="text" :placeholder="placeholder" />
    </div>
    
</template>

<script>

export default{
    name: 'LoginInput',
    props: {
        type:{
            type: String,
            required: false,
            default: 'username',
            validator(val){
                return ['username','password','email'].includes(val)
            }
        },
        placeholder:{
            type: String,
            required: true,
            default: ''
        }
    }
}


</script>
