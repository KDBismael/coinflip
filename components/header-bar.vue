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
            <button>Sign in</button>
            <button>Sign up</button>
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
                &:first-of-type{
                    border: 1px solid #FFFFFF;
                    margin-right: 12px;
                    background: transparent;
                }
                color: white;
                padding: 12px 21px;
                border-radius: 10px;
                height: 40px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 100%;
                text-align: center;
                border: none;
                background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
            }
        }
    }
</style>