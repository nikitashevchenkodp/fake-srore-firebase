import { configureStore } from "@reduxjs/toolkit";  
import productsReducer from './products/reducer'
import cartReducer from './cart/reducer'
import favoriteReducer from './favorites/reducer'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReducer
  }
});