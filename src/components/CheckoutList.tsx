import { CheckoutItem } from ".";
import { useAppSelector } from "../hooks";

export const CheckoutList = () => {
  const items = useAppSelector((state) => state.basket.items);
  return (
    <div className="flex w-full justify-center m-4">
      <table className="w-3/4 text-center table-fixed">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200 uppercase">
            <th className="w-1/5 py-2">Product Name</th>
            <th className="w-1/5 py-2">Selected Quantity</th>
            <th className="w-1/5 py-2">Unit Price</th>
            <th className="w-1/5 py-2">Total Price</th>
            <th className="w-1/5 py-2"></th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {items.map((item) => (
            <CheckoutItem key={item.sku} product={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
