import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        counter:0
    },
    reducers:{
        increment(state){
            state.counter +=1
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions