<script setup lang="ts">
import store from '../store'
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
let data = computed(() => store.getters.data);

let totalMoney = computed(() => store.getters.data.reduce((total: any, item: any) => Number(total) + Number(item.money) * Number(item.number), 0).toFixed(2))
const input = ref('')
const router = useRouter()
const handleTurnBack = () => {
    router.replace("/")
}
const handleToCheckout = () => {
    router.push("/checkout")
}
</script>

<template>
    <div class="content">
        <div style="padding: 20px;background-color: #FFFFFF;">
            <div class="content-header">
                <div class="content-title">YOUR ORDER</div>
                <el-button class="content-edit-button" type="success" text @click="handleTurnBack()">Edit</el-button>
            </div>
            <div class="content-items" v-for="item in data">
                <div class="content-items-left">
                    <img class="content-items-img" :src="item.src" width="40" height="40" />
                    <div class="content-items-desc">
                        <div class="content-items-desc-header">
                            <div class="content-items-desc-title">{{ item.name }}</div>
                            <div class="content-items-desc-number">{{ item.number }}x</div>
                        </div>
                        <div class="content-items-desc-bottom">this is a desc</div>
                    </div>
                </div>
                <div class="content-items-right">${{ item.money }}</div>
            </div>
        </div>
        <div class="content-comment-container">
            <input type="text" v-model="input" placeholder="Add comment..." class="content-comment" />
        </div>
        <div class="content-pin">Any special requests,details,final wishes etc</div>
        <div style="height: 60px;">
            <!-- 占位 -->
        </div>
        <div class="bottom" @click="handleToCheckout()">
            <text>PAY ${{ totalMoney }}</text>
        </div>
    </div>
</template>

<style scoped>
.content {
    background-color: #F1F1F1;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-edit-button {
    color: #31B545;
    font-weight: 500;
    padding: 0;
}

.content-title {
    font-weight: 600;
    font-size: larger;
}

.content-items {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.content-items-left {
    display: flex;
}

.content-items-img {
    margin-right: 15px;
}

.content-items-desc-header {
    display: flex;
    font-weight: 600;
}

.content-items-desc-title {
    margin-right: 6px;
}

.content-items-desc-number {
    color: #F8A917;
}

.content-pin,
.content-items-desc-bottom {
    color: rgb(128, 127, 127);
}

.content-comment {
    border: none;
    font-size: larger;
    width: 100%;
}

.content-comment-container {
    background-color: #FFFFFF;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.content-comment:focus {
    outline: none;
}

.content-pin {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.bottom {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #31B545;
    width: 100%;
    height: 60px;
    color: #f9f9f9;
}
</style>