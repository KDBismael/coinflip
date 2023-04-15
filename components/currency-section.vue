<template>
    <div class="container currency">
        <div class="content">
            <h1>Buy and sell with the lowest fees in the industry</h1>
            <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
            <nuxt-link to="#">Learn More  ➜</nuxt-link>
        </div>
        <CurrencyTable/>
    </div>
</template>

<style lang="scss" scoped>
    .currency{
        padding-top: 120px;
        padding-bottom: 120px;
        .content{
            max-width: 780px;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 46px;
            h1{
                font-style: normal;
                font-weight: 900;
                font-size: 50px;
                line-height: 130%;
                margin-bottom: 16px;
            }
            p{
                max-width: 580px;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #898CA9;
                margin: 0 auto;
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
    }
</style>