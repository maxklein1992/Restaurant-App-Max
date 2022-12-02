import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export default store;

export const wrapper = createWrapper(store);
