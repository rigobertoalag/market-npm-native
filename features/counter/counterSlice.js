import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0,
        utoken: ''
    },
    reducers: {
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setToken: (state) =>{
            state.utoken = 'token123'
        }
    },
})

export const { increment, decrement, incrementByAmount, setToken } = counterSlice.actions

export default counterSlice.reducer