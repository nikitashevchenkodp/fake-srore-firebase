import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: []
  },
  reducers:{
    addToCart: (state, action) => {
      const { id, quantity } = action.payload
      const idx = state.list.findIndex(game => game.id === id)
      
      if ( state.list[idx] ) {

        state.list[idx].quantity = state.list[idx].quantity + quantity

        if(state.list[idx].quantity < 1) {
          state.list = state.list.filter(item => item.id !== id)
        }
 
      } else {
        state.list.push(action.payload)
      }
    },
    removeItemFromCart: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload.id)
    },
  }
})

export const {addToCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer



