import { configureStore } from "@reduxjs/toolkit";
import collectListSlice from "./slice/collectListSlice";

export const store = configureStore({
  reducer:{
  collectListSlice,
  }
})


export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch