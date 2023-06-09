import { Product } from "../interfaces";

interface Props {
  product: Product;
}

export const ProductListItem = ({ product }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center mt-4">
      <div className="w-1/6 font-bold">{product.name}</div>
      <div className="w-1/4">{product.description}</div>
      <div className="w-1/8">£{product.price}</div>
      <button className="text-xs p-2 rounded border border-gray-300 bg-gray-200 hover:bg-gray-400">
        Add to Basket
      </button>
      <button className="text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-700 text-white">
        Remove from Basket
      </button>
    </div>
  );
};
