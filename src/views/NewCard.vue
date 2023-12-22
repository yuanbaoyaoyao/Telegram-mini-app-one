<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'
import { useRouter } from 'vue-router';
const labelPosition = ref<FormProps['labelPosition']>('top')
const router = useRouter()
const formLabelAlign = reactive({
    cardNumber: '',
    mmyy: '',
    cvc: '',
    cardholderName: '',
    country: '',
    zipCode: '',
})
const isChecked = ref(false)
const handleToCheckout = () => {
    router.push("/checkout")
}
</script>

<template>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="card-form">
        <el-form-item label="Card Number">
            <el-input class="input" v-model="formLabelAlign.cardNumber" />
        </el-form-item>
        <div style="display: flex;justify-content: space-between;">
            <el-form-item label="MM / YY" style="width: 45%;">
                <el-input v-model="formLabelAlign.mmyy" />
            </el-form-item>
            <el-form-item label="CVC" style="width: 45%;">
                <el-input v-model="formLabelAlign.cvc" />
            </el-form-item>
        </div>
        <el-form-item label="Cardholder name">
            <el-input v-model="formLabelAlign.cardholderName" />
        </el-form-item>
        <div style="color: #0e8dd1;font-weight: 500;margin-top: 10px;margin-bottom: 10px;">Billing Information</div>
        <el-form-item label="Country">
            <el-input v-model="formLabelAlign.country" />
        </el-form-item>
        <el-form-item label="Zip Code">
            <el-input v-model="formLabelAlign.zipCode" />
        </el-form-item>
    </el-form>
    <el-checkbox v-model="isChecked" label="Save Information for future use" size="large"
        style="padding-left: 20px ;color: black;font-weight: 400;" />
    <div class="bottom-buttons">
        <el-button text style="color: #3475b6;" @click="handleToCheckout()">CANCEL</el-button>
        <el-button text style="color: #3475b6;" @click="handleToCheckout()">DONE</el-button>
    </div>
</template>

<style scoped>
/deep/.el-input__wrapper {
    box-shadow: none;
    border-bottom: 1px solid rgb(224, 223, 223);
    border-radius: 0;
}

.card-form {
    max-width: 460px;
    padding: 20px;
}

.bottom-buttons {
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    z-index: 10000;
    height: 60px;
}

/deep/ .el-form-item__label {
    margin-bottom: 0 !important;
}
</style>