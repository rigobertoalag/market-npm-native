import {createSlice} from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState:{
        token: '',
        email: ''
    },
    reducers:{
        setToken: (state) =>{
            state.token = 'soyeltoken'
            state.email = 'mail@mail.com'
        }
    }
})

export const { setToken } = userDataSlice.actions

export default userDataSlice.reducer