import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    isSubscribed: boolean
}

let initialState:InitialStateType = {
    isSubscribed: false
}

const cartSlice = createSlice({
    name: 'cart',
     initialState: initialState,
    reducers: {
        setSubscribe(state: InitialStateType) {
            state.isSubscribed = true
        }
    }
})

export default cartSlice.reducer
export const {setSubscribe} = cartSlice.actions