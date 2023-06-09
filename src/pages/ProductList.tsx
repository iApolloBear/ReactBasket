import { useGetProductsQuery } from "../services/products";

export const ProductList = () => {
  const { data } = useGetProductsQuery();
  return <div>ProductList</div>;
};
