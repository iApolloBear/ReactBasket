import { CheckoutForm, CheckoutList, CheckoutNavbar } from "../components";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const Checkout = () => {
  const total = useAppSelector((state: RootState) => state.basket.total);

  return (
    <div className="w-full p-16 text-sm">
      <CheckoutNavbar />
      <CheckoutList />
      <div className="flex p-8 flex-row w-full justify-end text-base">
        Total Price: £{total.toFixed(2)}
      </div>
      <CheckoutForm />
    </div>
  );
};
