<script setup lang="ts">
const data = [
    {
        name: "Burger",
        money: "4.99",
        src: "../assets/Burger.png"
    },
    {
        name: "Fries",
        money: "1.49",
        src: "../assets/Fires.png"
    },
    {
        name: "Hotdog",
        money: "3.49",
        src: "../assets/Hotdog.png"
    },
    {
        name: "Taco",
        money: "3.99",
        src: "../assets/Taco.png"
    },
    {
        name: "Pizza",
        money: "7.99",
        src: "../assets/Pizza.png"
    },
    {
        name: "Donut",
        money: "1.49",
        src: "../assets/Donut.png"
    },
    {
        name: "Popcorn",
        money: "1.99",
        src: "../assets/Popcorn.png"
    },
    {
        name: "Coke",
        money: "1.49",
        src: "../assets/Coke.png"
    },
    {
        name: "cake",
        money: "10.99",
        src: "../assets/Burger.png"
    },
    {
        name: "Icecream",
        money: "5.99",
        src: "../assets/Burger.png"
    },
    {
        name: "Cookie",
        money: "3.99",
        src: "../assets/Burger.png"
    },
    {
        name: "Flan",
        money: "7.99",
        src: "../assets/Burger.png"
    },
]
</script>

<template>
    <div class="content">
        <div class="content-details" v-for="(item, index) in data">
            <img src="../assets/Burger.png" width="90" height="90" />
            <text>
                {{ item.name }}-{{ item.money }}
            </text>
        </div>
    </div>
</template>

<style scoped>
.content {
    color: black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: blue;
}

.content-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
