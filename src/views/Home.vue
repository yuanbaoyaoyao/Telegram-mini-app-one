<script setup lang="ts">
import Burger from '../assets/Burger.png'
import Fries from '../assets/Fries.png'
import Hotdog from '../assets/Hotdog.png'
import Taco from '../assets/Taco.png'
import Pizza from '../assets/Pizza.png'
import Donut from '../assets/Donut.png'
import Popcorn from '../assets/Popcorn.png'
import Cake from '../assets/Cake.png'
import Coke from '../assets/Coke.png'
import Icecream from '../assets/Icecream.png'
import Cookie from '../assets/Cookie.png'
import Flan from '../assets/Flan.png'
import store from '../store'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
let data = ref(
    [
        {
            name: "Burger",
            money: "4.99",
            src: Burger,
            number: 0
        },
        {
            name: "Fries",
            money: "1.49",
            src: Fries,
            number: 0
        },
        {
            name: "Hotdog",
            money: "3.49",
            src: Hotdog,
            number: 0
        },
        {
            name: "Taco",
            money: "3.99",
            src: Taco,
            number: 0
        },
        {
            name: "Pizza",
            money: "7.99",
            src: Pizza,
            number: 0
        },
        {
            name: "Donut",
            money: "1.49",
            src: Donut,
            number: 0
        },
        {
            name: "Popcorn",
            money: "1.99",
            src: Popcorn,
            number: 0
        },
        {
            name: "Coke",
            money: "1.49",
            src: Coke,
            number: 0
        },
        {
            name: "Cake",
            money: "10.99",
            src: Cake,
            number: 0
        },
        {
            name: "Icecream",
            money: "5.99",
            src: Icecream,
            number: 0
        },
        {
            name: "Cookie",
            money: "3.99",
            src: Cookie,
            number: 0
        },
        {
            name: "Flan",
            money: "7.99",
            src: Flan,
            number: 0
        },
    ]
)

let isShowViewOrder = ref(false)
const router = useRouter()

const handleClickAddButton = (index: number) => {
    data.value[index].number++
    isShowViewOrder.value = false
    let orderData: { name: string; money: string; src: string; number: number }[] = []
    data.value.forEach((item) => {
        if (item.number > 0) {
            isShowViewOrder.value = true
            orderData.push(item)
        }
    })
    store.commit("SET_DATA", orderData)
}
const handleClickMinusButton = (index: number) => {
    data.value[index].number--
    isShowViewOrder.value = false
    let orderData: { name: string; money: string; src: string; number: number }[] = []
    data.value.forEach((item) => {
        if (item.number > 0) {
            isShowViewOrder.value = true
            orderData.push(item)
        }
    })
    store.commit("SET_DATA", orderData)
}
const handleToOrderPage = () => {
    router.push("/order")
}
const handleGetDataNumbers = () => {
    store.getters.data.forEach((item: { name: string; number: number }) => {
        for (let dataItem of data.value) {
            if (dataItem.name == item.name) {
                dataItem.number = item.number
                isShowViewOrder.value = true
                break;
            }
        }
    })
}
handleGetDataNumbers()

</script>

<template>
    <div class="content">
        <div class="content-details" v-for="(item, index) in data">
            <img :src=item.src width="70" height="70" />
            <text class="content-details-text">
                <text>{{ item.name }} </text>
                ·
                <text class="content-details-text-money">${{ item.money }} </text>
            </text>
            <div style="width: 100%;display: flex;justify-content: center;">
                <el-button v-if="item.number == 0" class="content-button" type="warning"
                    @click="handleClickAddButton(index)">ADD</el-button>
                <div v-else class="content-multi-buttons">
                    <el-button style="font-size: 30px;" class="content-button" type="danger"
                        @click="handleClickMinusButton(index)">-</el-button>
                    <el-button style="font-size: 30px;" class="content-button" type="warning"
                        @click="handleClickAddButton(index)">+</el-button>
                </div>
            </div>
            <div class="content-details-number" v-if="item.number > 0">
                <text>{{ item.number }}</text>
            </div>
        </div>
    </div>
    <div class="bottom" v-if="!isShowViewOrder">
        <text>@DurgerKingBot</text>
    </div>
    <div class="bottom-order" @click="handleToOrderPage()" v-else>
        <text>VIEW ORDER</text>
    </div>
</template>

<style scoped>
.content {
    color: black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.content-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
    position: relative;
}

.content-details-number {
    position: absolute;
    right: 12px;
    top: 0px;
    background-color: #F8A917;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-details-text {
    margin-top: 3px;
    margin-bottom: 8px;
}

.content-details-text-money {
    font-weight: 600;
}



.content-multi-buttons {
    display: flex;
    width: 80%;
}

.content-button {
    width: 60%;
    font-weight: 700;
    border-radius: 8px;
}

.bottom {
    color: #b8b8b8;
    background-color: #FFFFFF;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10000;
    bottom: 0;
}

.bottom-order {
    color: #f9f9f9;
    background-color: #31B545;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10000;
    bottom: 0;
    cursor: pointer;
}
</style>