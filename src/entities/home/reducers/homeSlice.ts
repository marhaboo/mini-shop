import { createSlice } from "@reduxjs/toolkit";
import type { HomeState } from "../models/types";
import { getProducts } from "../api/home-api";

const initialState: HomeState = {
 data: [],
 loading: false,
 error: null as string | null
}
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload.data.products
      state.loading = false
      state.error = null
    })
    .addCase(getProducts.pending, (state) => {
      state.loading = true
        state.error = null
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? "Что-то пошло не так"
    })
  }
})
export default homeSlice.reducer