<template>
    <div class="table-container">
        <table>
            <tbody>
                <tr>
                    <td class="name">Bitcoin</td>
                    <td class="symbol">BTC</td>
                    <td class="price">$56,290.30</td>
                    <td class="fluctuation">+1.68%</td>
                    <td class="chart"><img src="@/images/small-graph.png" alt="chart"></td>
                    <td class="trade"><nuxt-link to="#">Trade Now ➜</nuxt-link></td>
                </tr>
                <tr>
                    <td class="name">Bitcoin</td>
                    <td class="symbol">BTC</td>
                    <td class="price">$56,290.30</td>
                    <td class="fluctuation">+1.68%</td>
                    <td class="chart"><img src="@/images/small-graph.png" alt="chart"></td>
                    <td class="trade"><nuxt-link to="#">Trade Now ➜</nuxt-link></td>
                </tr>
                <tr>
                    <td class="name">Bitcoin</td>
                    <td class="symbol">BTC</td>
                    <td class="price">$56,290.30</td>
                    <td class="fluctuation">+1.68%</td>
                    <td class="chart"><img src="@/images/small-graph.png" alt="chart"></td>
                    <td class="trade"><nuxt-link to="#">Trade Now ➜</nuxt-link></td>
                </tr>
                <tr>
                    <td class="name">Bitcoin</td>
                    <td class="symbol">BTC</td>
                    <td class="price">$56,290.30</td>
                    <td class="fluctuation red">+1.68%</td>
                    <td class="chart"><img src="@/images/small-graph.png" alt="chart"></td>
                    <td class="trade"><nuxt-link to="#">Trade Now ➜</nuxt-link></td>
                </tr>
                <tr>
                    <td class="name">Bitcoin</td>
                    <td class="symbol">BTC</td>
                    <td class="price">$56,290.30</td>
                    <td class="fluctuation">+1.68%</td>
                    <td class="chart"><img src="@/images/small-graph.png" alt="chart"></td>
                    <td class="trade"><nuxt-link to="#">Trade Now ➜</nuxt-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    .table-container{
        padding: 10px 32px;
        background: #1A1B23;
        border-radius: 25px;
        position: relative;
        z-index: 3;
    }
    table{
        border-collapse: collapse;
        width: 100%;
        tr{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #2B2C3B;
            height: 56px;
            &:last-of-type{
                border: none;
            }
            td{
                text-align: right;
                font-weight: 700;
                font-size: 20px;
                line-height: 150%;
                &:first-of-type{
                    text-align: left;
                }
            }
            .symbol{
                color: #B982FF;
            }
            .fluctuation{
                color: #0DBB7C;
            }
            .chart{
                img{
                    width: 213px;
                    height: auto;
                    object-fit: cover;
                }
            }
            .trade{
                width: fit-content;
                font-weight: 600;
                font-size: 16px;
                line-height: 100%;
                a{
                    color: white;
                    text-decoration: none;
                }
            }
            .red{
                color: #FF8282;
            }
        }
    }
</style>