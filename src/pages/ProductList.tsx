import { Link } from "react-router-dom";
import { ProductsNavbar, ProductListItem } from "../components";
import { useGetProductsQuery } from "../services/products";

export const ProductList = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="w-full p-16 text-sm">
      <ProductsNavbar />
      <div className="flex flex-col">
        {data?.map((item) => (
          <ProductListItem key={item.sku} product={item} />
        ))}
      </div>
      <div className="flex flex-row justify-end mt-6">
        <Link
          to="/checkout"
          className="text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};
