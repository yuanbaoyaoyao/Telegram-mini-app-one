<script setup lang="ts">
import store from '../store'
import { computed } from "vue";
import { useRouter } from 'vue-router';
import Order from "../assets/Order.png";
let data = computed(() => store.getters.data);
let totalMoney = computed(() => store.getters.data.reduce((total: any, item: any) => Number(total) + Number(item.money) * Number(item.number), 0).toFixed(2))
const router = useRouter()
const handleToNewCard = () => {
    router.push("/newCard")
}
const handleToShippingInfo = () => {
    router.push("/shippingInfo")
}
const handleToOrder = () => {
    router.push("/order")
}
</script>

<template>
    <div class="content">
        <div class="content-header">
            <div class="content-header-img">
                <el-image :src="Order" fit="contain" />
            </div>
            <div class="content-header-desc">
                <div class="content-header-desc-order">Order #293628235</div>
                <div style="margin-top: 5px;margin-bottom: 5px;">Perfect lunch from Durger King.</div>
                <div class="content-header-desc-shop">Durger King</div>
            </div>
        </div>
        <div class="content-total">
            <div class="content-items" v-for="item in data">
                <div class="content-items-left">
                    <img class="content-items-img" :src="item.src" width="25" height="25" />
                    <div class="content-items-desc-title">{{ item.name }}</div>
                    <div class="content-items-desc-number">x{{ item.number }}</div>
                </div>
                <div class="content-items-right">${{ item.money }}</div>
            </div>
            <div class="content-total-free">
                <div>Free Delivery</div>
                <div>$0.00</div>
            </div>
            <div class="content-total-count">
                <div>Total</div>
                <div>${{ totalMoney }}</div>
            </div>
        </div>
        <div class="content-buttons">
            <div class="content-button" @click="handleToNewCard()">
                <el-icon class="content-button-icon" size="25">
                    <CreditCard />
                </el-icon>
                <text>Payment Method</text>
            </div>
            <div class="content-button" @click="handleToShippingInfo()">
                <el-icon class="content-button-icon" size="25">
                    <Location />
                </el-icon>
                <text>Shipping Address</text>
            </div>
            <div class="content-button" @click="handleToShippingInfo()">
                <el-icon class="content-button-icon" size="25">
                    <User />
                </el-icon>
                <text>Name</text>
            </div>
            <div class="content-button" @click="handleToShippingInfo()">
                <el-icon class="content-button-icon" size="25">
                    <Phone />
                </el-icon>
                <text>Phone</text>
            </div>
            <div style="height: 60px;">
                <!-- 占位 -->
            </div>
        </div>
    </div>
    <div class="bottom">
        <el-button text style="color:#136da1;" @click="handleToOrder()">Cancel</el-button>
        <el-button type="primary" style="background-color:#40A7E3;margin-right: 20px;">Pay ${{ totalMoney }}</el-button>
    </div>
</template>

<style scoped>
.content {
    background-color: #F1F1F1;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.content-header,
.content-total,
.content-buttons {
    background-color: #f9f9f9;
    box-shadow: 5px 5px 10px rgb(223, 223, 223);
}

.content-total {
    margin-top: 10px;
    margin-bottom: 10px;
}

.content-header {
    display: flex;
    padding: 20px;
}

.content-header-img {
    width: 70px;
    border-radius: 10px;
    margin-right: 10px;
}

.content-header-desc-order {
    font-weight: 600;
}

.content-header-desc-shop {
    color: #999999;
}

.content-buttons {
    flex: 1;
    padding-top: 10px;
}

.content-button {
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
}

.content-button-icon {
    margin-right: 20px;
    margin-left: 10px;
}

.bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: #FFFFFF;
    height: 60px;
}

.content-total {
    padding: 10px;
}

.content-items,
.content-total-free,
.content-total-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

.content-items {
    padding-bottom: 10px;
}

.content-total-count {
    font-weight: 600;
}

.content-items-left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-items-desc-title {
    margin-left: 3px;
    margin-right: 5px;
}
</style>