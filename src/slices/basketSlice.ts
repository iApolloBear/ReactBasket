import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

interface BasketItem {
  product: Product;
  quantity: number;
}

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
        (item) => item.product.sku === action.payload.sku
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      state.count = state.items.reduce(
        (result, current) => (result += current.quantity),
        0
      );
      state.total = state.items.reduce(
        (result, current) =>
          (result += current.product.price * current.quantity),
        0
      );
    },
  },
});

export const { addToBasket } = basketSlice.actions;
