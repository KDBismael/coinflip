<template>
    <button :class="btnStyle=='ghost'?'ghost-btn':'color-btn'">{{title}}</button>
</template>

<script setup lang="ts">
    interface props{
        title?:string;
        btnStyle?:string
    }
    const {title,btnStyle}=withDefaults(defineProps<props>(),{title:'Get Started'})
</script>

<style lang="scss" scoped>
    button{
        color: white;
        border-radius: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
    }
    .color-btn{
        border: none;
        background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
    }
    .ghost-btn{
        border: 1px solid #FFFFFF;
        background: transparent;
    }
</style>