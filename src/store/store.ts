import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services";
import { basketSlice } from "../slices";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    basket: basketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
