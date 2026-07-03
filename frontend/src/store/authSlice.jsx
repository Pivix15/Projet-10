import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isLogged: false
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload
            state.isLogged = true
        },
        logout: (state) => {
            state.token = null
            state.isLogged = false
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions