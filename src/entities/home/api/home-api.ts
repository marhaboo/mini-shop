import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../shared/utils/axios-request";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const data = await axiosRequest.get("/products")
  return data
})