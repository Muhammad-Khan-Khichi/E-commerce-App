import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import cartSlice from "./cartSlice";



const ecomm = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default ecomm;