import { Link } from "react-router-dom";

export const CheckoutForm = () => {
  return (
    <form>
      <div className="flex flex-row justify-center items-center">
        <label>Input Your Card Number</label>
        <input
          className="w-1/4 p-2 border rounded border-gray-400 ml-4"
          type="text"
        />
      </div>
      <div className="flex flex-row justify-end mt-6 px-8">
        <Link to="/" className="text-s p-2 rounded border border-gray-200 ">
          Continue Shopping
        </Link>
        <button
          type="submit"
          className="ml-4 text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};
