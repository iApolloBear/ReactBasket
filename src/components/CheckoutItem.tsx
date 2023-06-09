import { BasketItem } from "../interfaces";

interface Props {
  product: BasketItem;
}

export const CheckoutItem = ({ product }: Props) => {
  return (
    <tr>
      <td className="py-4 w-1/6">{product.name}</td>
      <td className="w-1/8">
        <select name="choice">
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </td>
      <td className="w-1/8">£{product.price}</td>
      <td className="w-1/8">£{product.price * product.quantity}</td>
      <td>
        <button className="text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-700 text-white">
          Remove All
        </button>
      </td>
    </tr>
  );
};
