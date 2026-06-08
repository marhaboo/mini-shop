import { createSlice } from "@reduxjs/toolkit";
import type { HomeState } from "../models/types";
import { getProducts } from "../api/home-api";

const initialState: HomeState = {
 data: [],
 loading: false,
 error: false
}
export const homeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.loading = false
      state.error = false
    })
    .addCase(getProducts.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getProducts.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  }
})
export default homeSlice.reducer