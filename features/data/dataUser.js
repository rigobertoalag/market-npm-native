import { createSlice } from "@reduxjs/toolkit";

const userToken = 'token12355555'
console.log('token de prueba: ' + userToken)

export const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState: {
        utoken: ''
    },
    reducers: {
        setToken: (state) => {
            state.utoken = userToken
        }
    },
})

export const { setToken } = dataUserSlice.actions

export default dataUserSlice.reducer