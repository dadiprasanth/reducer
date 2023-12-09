import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isApp:"",
}

export const appSlices=createSlice({
    name:"app",
    initialState,
    reducers:{
        setIsApp:(state,action)=>{
            state.isApp=action.payload
        }
    }

})
export const {setIsApp}=appSlices.actions
export default appSlices.reducer