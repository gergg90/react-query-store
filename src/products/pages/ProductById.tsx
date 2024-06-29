import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";

export const ProductById = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, isFetching, product } = useProduct({ id: +id! });

  return (
    <div className="flex-col">
      <h2 className="text-2xl font-bold"> Product</h2>
      {isLoading && "...loading"}
      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
