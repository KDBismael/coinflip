<template>
    <div class="container" >
        <div class="advantage" :class="type=='wallet'?'reverse':''">
            <div class="image">
                <img :src="advantage.image" alt="image">
            </div>
            <div class="bg" :class="type=='wallet'?'wallet-bg':'safe-bg'">
                <img :src="type=='wallet'?'images/wallet-bg.png':'images/safe-bg.png'" alt="bg">
            </div>
            <div class="content">
                <h1>{{ advantage.title }}</h1>
                <p>{{ advantage.description }}</p>
                <CryptoBtn :btn-style="advantage.id==0?'ghost':''"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { feature } from '~/types';

    interface props{
        advantage:feature,
        type?:string
    }
    const {advantage,type}=defineProps<props>()
</script>

<style scoped lang="scss">
    .container{
        position: relative;
    }
    .advantage{
        display: flex;
        padding: 55px 0px;
        .bg{
            position: absolute;
            top: -150px;
            img{
                width:500px;
                height: auto;
                object-fit: cover;
            }
        }
        .safe-bg{
            left: 0;
        }
        .wallet-bg{
            right: 0;
            img{
                width: 700px;
            }
        }
        .image{
            max-width: 580px;
            z-index: 2;
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
            }
        }
        .content{
            max-width: 580px;
            h1{
                font-style: normal;
                font-weight: 900;
                font-size: 50px;
                line-height: 130%;
                margin-bottom: 16px;
            }
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #898CA9;
                margin-bottom: 32px;
            }
            button{
                padding: 20px 32px;
            }
        }
    }
    .reverse{
        flex-direction: row-reverse;
    }
</style>