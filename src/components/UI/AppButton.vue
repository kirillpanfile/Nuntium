<template>
  <button type="button" class="button" :class="scale">
    <h2><slot></slot></h2>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    scale: {
      type: String,
      required: false,
      default: "",
      validator(val) {
        return ["", "long"].includes(val);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  border: 2px solid #000;
  border-radius: 10px;
  padding: 11px 36px;
  transition: all 0.2s ease-in-out;
}
.long {
  border: 2px solid;
  padding: 11px 136px;
  margin-top: 15px;
}
.button:hover {
  background: #000;
  color: #fff;
}


@media (max-width:400px){
  .long{
    padding: 11px 109px;
  }
}
</style>
