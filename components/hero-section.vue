
<template>
    <div class="container hero-bg">
        <HeaderBar/>
        <div class="hero">

            <div>
                <h1>We make crypto clear and simple</h1>
                <p>
                    Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.
                </p>
            </div>
            <CryptoBtn/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero-bg{
        background-image: url('@/images/bg-img.png');
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .hero{
        display: grid;
        place-content: center;
        padding: 169px 0px;
        div{
            max-width:780px;
            margin-bottom: 32px;
            h1{
                font-weight: 900;
                font-size: 85px;
                line-height: 130%;
                text-align: center;
            }
            p{
                margin: 0 auto;
                margin-top: 16px;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                text-align: center;
                color: #898CA9;
                max-width: 580px;
            }
        }
        button{
            padding: 20px 32px;
            margin: 0 auto;
        }
    }
</style>