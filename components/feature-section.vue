<template>
    <div class="container feature">
        <div class="stars">
            <img src="@/images/star-img-1.png" alt="">
            <img src="@/images/star-img.png" alt="">
        </div>
        <FeatureCard v-for="feature in featureData" :key="feature.id" :feature="feature"/>
    </div>
</template>

<script lang="ts" setup>
import FeatureCard from './feature-card.vue';


    const featureData=[
        {
            id:0,
            image:'images/trade-desk.png',
            title:'Trade Desk',
            description:'Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform',
            btn:{
                title:'Get Started',
                link:'#'
            }
        },
        {
            id:1,
            image:'images/atms.png',
            title:'CoinFlip ATMs',
            description:'We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto',
            btn:{
                title:'Find an ATM',
                link:'#'
            }
        },
        {
            id:2,
            image:'images/wallet.png',
            title:'CoinFlip Wallet',
            description:'Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place',
            btn:{
                title:'Download the App',
                link:'#'
            }
        },
    ]

</script>

<style scoped lang="scss">
    .feature{
        display: flex;
        column-gap: 20px;
        position: relative;
        padding-top: 80px ;
        padding-bottom: 80px ;
        background-image: url('@/images/circles.png');
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        .stars{
            bottom: -1rem;
            position: absolute;
            left: 3rem;
            img{
                &:first-of-type{
                    width: 44px;
                }
                width: 64px;
                height: auto;
                object-fit: cover;
            }
        }
    }
</style>