import { Product } from ".";

export interface BasketItem extends Product {
  quantity: number;
}
