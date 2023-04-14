<template>
    <div class="header">
        <div class="logo">
            <img src="@/images/logo.png" alt="">
        </div>
        <ul>
        <nuxt-link to="">Buy / Sell</nuxt-link>
        <nuxt-link to="">Grow</nuxt-link>
        <nuxt-link to="">Markets</nuxt-link>
        <nuxt-link to="">Business</nuxt-link>
        <nuxt-link to="">Support</nuxt-link>
        </ul>
        <div class="auth-buttons">
            <crypto-btn title="Sign in" btnStyle="ghost"/>
            <crypto-btn title="Sign up"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: 32px 0;
        .logo{
            display: grid;
            place-items: center;
        }
        ul{
            display: flex;
            column-gap: 32px;
            justify-content: center;
            align-items: center;
            a{
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
            }
        }
        .auth-buttons{
            button{
                padding: 12px 21px;
                &:first-of-type{
                    margin-right: 12px;  
                }
            }
        }
    }
</style>