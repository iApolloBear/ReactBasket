import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const CheckoutNavbar = () => {
  const count = useAppSelector((state: RootState) => state.basket.count);

  return (
    <nav className="flex flex-row justify-end p-4 border-b text-base">
      <div className="mr-4">Basket Items: {count}</div>
    </nav>
  );
};
