import { CheckoutItemSelect } from ".";
import { useAppDispatch } from "../hooks";
import { BasketItem } from "../interfaces";
import { removeAllFromBasket } from "../slices";

interface Props {
  product: BasketItem;
}

export const CheckoutItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="py-4 w-1/6">{product.name}</td>
      <td className="w-1/8">
        <CheckoutItemSelect product={product} />
      </td>
      <td className="w-1/8">£{product.price}</td>
      <td className="w-1/8">
        £{(product.price * product.quantity).toFixed(2)}
      </td>
      <td>
        <button
          onClick={() => dispatch(removeAllFromBasket(product))}
          className="text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-700 text-white"
        >
          Remove All
        </button>
      </td>
    </tr>
  );
};
