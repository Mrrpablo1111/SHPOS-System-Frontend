import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice.js"
const globleSate = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default globleSate;