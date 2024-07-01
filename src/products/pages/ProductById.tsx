import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../hooks/useProduct";

export const ProductById = () => {
  const { id } = useParams();
  const { isLoading, product } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h2 className="text-2xl font-bold">Product</h2>
      {isLoading && "...loading"}
      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
