import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";



const ecomm = configureStore({
    reducer: {
        items: itemsSlice.reducer
    }
})

export default ecomm;