import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BasketItem, Product } from "../interfaces";

interface BasketState {
  items: BasketItem[];
  count: number;
  total: number;
}

const initialState: BasketState = {
  items: [],
  count: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.sku === action.payload.sku
      );

      if (existingItem) {
        if (existingItem.quantity >= action.payload.basketLimit) return;
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.count = state.items.reduce(
        (result, current) => (result += current.quantity),
        0
      );
      state.total = state.items.reduce(
        (result, current) => (result += current.price * current.quantity),
        0
      );
    },
  },
});

export const { addToBasket } = basketSlice.actions;
