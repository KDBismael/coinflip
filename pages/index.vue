<template>
    <div>
        <HeroSection/>
        <FeatureSection/>
        <CryptoInvest/>
        <Advantage :advantage="coinFlipAdvantages[0]"/>
        <Advantage :advantage="coinFlipAdvantages[1]" type='wallet'/>
    </div>
</template>
<script lang="ts" setup>
    const coinFlipAdvantages=[
        {
            id:0,
            image:'/images/safe-img.png',
            title:'24/7 access to full service customer support',
            description:'We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.',
            btn:{
                title:'Get Started',
                link:'#'
            }
        },
        {
            id:1,
            image:'/images/wallet-img.png',
            title:'Take your first step into safe, secure crypto investing',
            description:'Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.',
            btn:{
                title:'Get Started',
                link:'#'
            }
        }
    ]
    definePageMeta({
        title:'made crypto simple',
    })
</script>