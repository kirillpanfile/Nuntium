<template>
    <button type="button" class="button">
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: 'AppButton'
}
</script>

<style scoped lang="scss">
.button {
    border: 2px solid #000;
    border-radius: 10px;
    padding: 11px 36px;
}
</style>