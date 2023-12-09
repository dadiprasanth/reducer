import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    count: 0,
    isnewjuni:false
}
export const juniSlice = createSlice({
    name: "juni",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -=1
        },
        reset:(state)=>{
            state.count=0
        },
        incrementby:(state,action)=>{
            state.count=action.payload
        },
        setIsnewJuni:(state)=>{
            state.isnewjuni=!state.isnewjuni
        }
    }
})
export const { increment, decrement, reset, incrementby, setIsnewJuni } = juniSlice.actions
export default juniSlice.reducer