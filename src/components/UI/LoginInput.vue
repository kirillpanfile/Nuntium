<template>
  <div class="input input__wrapper">
    <img
      class="input__icon"
      src="@/assets/icons/user.svg"
      v-if="type === 'username'"
      alt="Error"
    />
    <img
      class="input__icon"
      src="@/assets/icons/key.svg"
      v-else-if="type === 'password'"
      alt="Error"
    />
    <img
      class="input__icon"
      src="@/assets/icons/email.svg"
      v-else
      alt="Error"
    />
    <input
      v-if="type === 'username' || type === 'email'"
      type="text"
      class="input__username"
      @input="(event) => $emit(`${type}`, event.target.value)"
      :placeholder="placeholder"
    />

    <input 
      v-else-if="type === 'password'"
      :type="inputType"
      @input="(event) => $emit(`${type}`, event.target.value)"
      :placeholder="placeholder"
    >

    <div class="input__vision" v-if="type === 'password'">
      <img 
        src="@/assets/icons/visibilityON.svg" 
        @click="switchVisibility" 
        v-if="!visibility"
      />
      <img 
        src="@/assets/icons/visibilityOFF.svg" 
        @click="switchVisibility"
        v-else 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginInput",
  data(){
    return{
      visibility: false,
      inputType: 'password'
    }
  },
  methods: {
    switchVisibility(){
      this.visibility = !this.visibility
      if(this.inputType === 'password')
        this.inputType = 'text'
      else
        this.inputType = 'password'
    }
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "username",
      validator(val) {
        return ["username", "password", "email"].includes(val);
      },
    },
    placeholder: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
