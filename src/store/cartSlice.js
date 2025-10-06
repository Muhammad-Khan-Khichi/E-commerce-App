import {createSlice} from "@reduxjs/toolkit"






const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
           state.push(action.payload)
        },
        removeToCart: (state, action) => {
           return state.filter(itemId => itemId !== action.payload)
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice

