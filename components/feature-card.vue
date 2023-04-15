<template>
    <div class="feature-card">
        <img :src="feature.image" :alt="feature.title">
        <h1>{{feature.title}}</h1>
        <p>{{feature.description}}</p>
        <nuxt-link :to=" feature.btn.link">{{feature.btn.title}}  ➜</nuxt-link>
    </div>
</template>

<script lang="ts" setup>
    import { feature } from '~/types';
    
    interface props{
        feature:feature,
    }
    const {feature}=defineProps<props>()
</script>

<style lang="scss" scoped>
    .feature-card{
        display: grid;
        justify-content: center;
        background: #1A1B23;
        border-radius: 25px;
        padding: 32px 24px;
        img{
            width: 80px;
            height: auto;
            object-fit: cover;
            margin: 0 auto;
        }
        h1{
            font-weight: 800;
            font-size: 32px;
            line-height: 130%;
            text-align: center;
            margin-bottom: 16px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #898CA9;
            max-width: 332px;
            margin-bottom: 32px;
        }
        a{
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            text-align: center;
            color: #B982FF;
            text-decoration: none;
        }
    }
</style>