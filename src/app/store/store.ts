import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../entities/home/reducers/homeSlice";

export function makeStore(){
  return configureStore({
    reducer: {
      home: homeReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];