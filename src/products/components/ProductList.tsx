import { Product, ProductCard, usePrefectProducts } from "..";

interface ProductsProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductsProps) => {
  const { prefetchData } = usePrefectProducts();

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          prefetchData={prefetchData}
          product={product}
        />
      ))}
    </div>
  );
};
