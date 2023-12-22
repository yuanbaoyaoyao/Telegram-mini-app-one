const order = {
    state:{
        data:[]
    },
    mutations:{
        SET_DATA:(state: { data: any },data: any)=>{
            state.data = data
        }
    },
}
export default order