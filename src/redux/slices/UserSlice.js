import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login(state) {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const {login} = UserSlice.actions

export default UserSlice.reducer