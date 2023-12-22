<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'
import { useRouter } from 'vue-router';

const labelPosition = ref<FormProps['labelPosition']>('top')
const router = useRouter()
const formLabelAlign = reactive({
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    Country: '',
    Postcode: '',
    Name: '',
    Phone: '',
})
const isChecked = ref(false)
const handleToCheckout = () => {
    router.push("/checkout")
}
</script>

<template>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="card-form">
        <el-form-item label="Address 1">
            <el-input class="input" v-model="formLabelAlign.Address1" />
        </el-form-item>
        <el-form-item label="Address 2">
            <el-input class="input" v-model="formLabelAlign.Address2" />
        </el-form-item>
        <el-form-item label="City">
            <el-input class="input" v-model="formLabelAlign.City" />
        </el-form-item>
        <el-form-item label="State">
            <el-input class="input" v-model="formLabelAlign.State" />
        </el-form-item>
        <el-form-item label="Country">
            <el-input class="input" v-model="formLabelAlign.Country" />
        </el-form-item>
        <el-form-item label="Postcode">
            <el-input class="input" v-model="formLabelAlign.Postcode" />
        </el-form-item>
        <el-form-item label="Name">
            <el-input v-model="formLabelAlign.Name" />
        </el-form-item>
        <el-form-item label="Phone">
            <el-input v-model="formLabelAlign.Phone" />
        </el-form-item>
    </el-form>
    <el-checkbox v-model="isChecked" label="Save Information for future use" size="large"
        style="padding-left: 20px ;color: black;font-weight: 400;" />
    <div style="height: 60px;">
        <!-- 占位 -->
    </div>
    <div class="bottom-buttons">
        <el-button text style="color: #3475b6;" @click="handleToCheckout()">CANCEL</el-button>
        <el-button text style="color: #3475b6;margin-right: 30px;" @click="handleToCheckout()">DONE</el-button>
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