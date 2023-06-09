import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const ProductsNavbar = () => {
  const { count, total } = useAppSelector((state: RootState) => state.basket);

  return (
    <div className="flex flex-row justify-end p-4 border-b text-base gap-2">
      <span>Basket items: {count}</span>
      <span>Total Price: {total.toFixed(2)}</span>
    </div>
  );
};
