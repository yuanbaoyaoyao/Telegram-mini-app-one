import { createStore } from "vuex"
import getters from "./getters"
import order from "./modules/order";
const store = createStore({
    modules:{
        order
    },
    getters
})
export default store