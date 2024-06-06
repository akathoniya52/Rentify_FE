import { createSlice } from "@reduxjs/toolkit";

const PropertiesSlice = createSlice({
    name:"PropertiesSlice",
    initialState:{
        data:[]
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload;
        },
    }
})

export const {setData} = PropertiesSlice.actions
export default PropertiesSlice.reducer