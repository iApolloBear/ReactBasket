import { ChangeEvent, useState } from "react";
import { BasketItem } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { updateItemQuantity } from "../slices";

interface Props {
  product: BasketItem;
}

export const CheckoutItemSelect = ({ product }: Props) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const dispatch = useAppDispatch();

  const options = [];
  for (let i = 1; i <= product.basketLimit; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(+e.target.value);
    dispatch(
      updateItemQuantity({ sku: product.sku, quantity: +e.target.value })
    );
  };

  return (
    <select value={quantity} onChange={handleChange} name="choice">
      {options}
    </select>
  );
};
