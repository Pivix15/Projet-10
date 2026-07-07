import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        firstName: '',
        lastName: '',
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
        },
        setUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const { loginSuccess, logout, setUser } = authSlice.actions