import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
  name: "favotites",
  initialState: {
    favoriteList: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload)
    },
    delFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload.id)
    }
  }
});


export const {addToFavorite, delFromFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer