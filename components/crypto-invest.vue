<template>
    <div class="container">
        <div class="crypto-invest">
            <h1>A crypto investment platform that invests in you </h1>
            <p>
                We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it.
            </p>
            <CryptoBtn/>
            <div class="star">
                <img src="@/images/star-img-2.png" alt="star">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        padding-top: 140px;
        padding-bottom: 140px;
    }
    .crypto-invest{
        position: relative;
        max-width: 780px;
        margin: 0 auto;
        display: grid;
        place-items: center;
        h1{
            font-weight: 900;
            font-size: 50px;
            line-height: 130%;
            text-align: center;
            margin-bottom: 16px;
        }
        p{
            margin: 0 auto;
            max-width: 580px;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #898CA9;
            margin-bottom: 32px;
        }
        button{
            width: max-content;
            padding: 20px 32px;
        }
        .star{
            position: absolute;
            right: -12.125rem;
            bottom: 0;
            img{
                width: 61px;
                height: auto;
                object-fit: cover;
            }
        }
    }
</style>