import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

import { create } from "zustand";
import { heart } from "./heart";
import { cart } from "./cart";
const useStore = create((set) => ({
  ...heart(set),
  ...cart(set),
}));

export default useStore;
