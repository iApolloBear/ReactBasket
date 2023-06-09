import { BasketItem } from "../interfaces";

interface Props {
  product: BasketItem;
}

export const CheckoutItemSelect = ({ product }: Props) => {
  const options = [];
  for (let i = 1; i <= product.quantity; i++) {
    options.push(
      <option selected={i === product.quantity} key={i} value={i}>
        {i}
      </option>
    );
  }
  return <select name="choice">{options}</select>;
};
