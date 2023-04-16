<template>
    <div class="container">
        <div class="news-letter">
            <h1>Receive transmissions</h1>
            <p>Unsubscribe at any time.<nuxt-link to="#">Privacy policy↗</nuxt-link></p>
            <form action="">
                <div>
                    <input type="email" name="news-letter" id="email" placeholder="Email Address">
                </div>
                <button type="submit">➜</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .news-letter{
        max-width: 780px;
        margin: 0 auto;
        text-align: center;
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
            a{
                color: white;
                text-decoration: none;
            }
        }
        form{
            position: relative;
            width: fit-content;
            margin: 0 auto;
            div{
                background-image: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
                padding:1px;
                border-radius: 10px;
                width: fit-content;
                box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.05), inset 0px 2px 2px rgba(255, 255,255, 0.15);
                backdrop-filter: blur(20px);
            }
            input{
                background-color: #0B0B0F;
                outline: none;
                color: white;
                border: none;
                padding: 15px 19px;
                padding-right: 23px;
                border-radius: 10px;
                &::placeholder{
                    color: #565976;
                }
            }
            button{
                background-color: transparent;
                border: none;
                color:#565976;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                height: 100%;
                width: 28px;
            }
        }
    }
</style>