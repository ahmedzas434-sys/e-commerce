import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type storeState = ReturnType<typeof store.getState>
export type storeDispatch = ReturnType<typeof store.dispatch>