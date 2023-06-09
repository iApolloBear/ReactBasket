import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { luhnCheck } from "../helpers";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export const CheckoutForm = () => {
  const { items } = useAppSelector((state: RootState) => state.basket);

  const [cardNumber, setCardNumber] = useState<string>("");
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (luhnCheck(cardNumber)) {
      const resp = await fetch("http://localhost:9001/checkout", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          basket: items.map((item) => ({
            sku: item.sku,
            quantity: item.quantity,
          })),
          cardNumber,
        }),
      });
      const body = await resp.json();
      console.log(body);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-row justify-center items-center">
        <label>Input Your Card Number</label>
        <input
          value={cardNumber}
          className="w-1/4 p-2 border rounded border-gray-400 ml-4"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="flex flex-row justify-end mt-6 px-8">
        <Link to="/" className="text-s p-2 rounded border border-gray-200 ">
          Continue Shopping
        </Link>
        <button
          disabled={items.length <= 0}
          type="submit"
          className="ml-4 text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};
