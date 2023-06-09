import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const ProductsNavbar = () => {
  const { count, total } = useAppSelector((state: RootState) => state.basket);

  return (
    <div className="flex flex-row justify-end p-4 border-b text-base gap-2">
      <Link to="/checkout">Basket items: {count}</Link>
      <Link to="/checkout">Total Price: {total.toFixed(2)}</Link>
    </div>
  );
};
