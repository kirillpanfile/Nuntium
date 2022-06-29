<template>
    <div class="login login__wrapper">
        <img :src="require(`../assets/icons/${image}`)" class="screenlock__img" alt="Error">
        <login-input :placeholder="'Password'" type="password"></login-input>
        <div class="login__options">
            <div class="flex"> <!-- )), altfel nu stiam cum -->
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Remember me</label>
            </div>
            <a href="#" class="login__forgot">Forgot Password?</a>
        </div>
        <app-button scale="long">Login</app-button>
    </div>
</template>

<script>
import LoginInput from "@/components/UI/LoginInput"
import AppButton from "@/components/UI/AppButton"
export default{
    name: "screenlock",
    props:{
        image: {
            type: String,
            required: false,
            default: 'defaultUser.webp'
        }
    },
    components: {
        LoginInput,
        AppButton
    }
}
</script>