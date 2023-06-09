export interface BasketRequest {
  basket: BasketItem[];
  cardNumber: "4539456463019519";
}

interface BasketItem {
  sku: number;
  quantity: number;
}
