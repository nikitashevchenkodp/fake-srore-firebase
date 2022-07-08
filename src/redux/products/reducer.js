import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function() {
 
      const res = await fetch('https://fakestoreapi.com/products')

      if(!res.ok) {
        throw new Error('Somethig goes wrong..')
      }

      return res.json()
  }
)

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async function() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    
    if(!res.ok) {
      throw new Error('Somethig goes wrong..')
    }

    return res.json()
  }
)




const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    categories: [],
    loading: true,
    hasError: false,
    errorInfo: null
  },
  reducers: {
    loadProducts (state, action)  {
      state.list = action.payload
    }
  },
  extraReducers: {
    [fetchProducts.pending] : (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false
      state.hasError = true;
      state.errorInfo = action.error.message;
    },
    [fetchCategories.pending] : (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false
      state.hasError = true;
      state.errorInfo = action.error.message;
    }
  }
   
})

export const {loadProducts} = productsSlice.actions;
export default productsSlice.reducer