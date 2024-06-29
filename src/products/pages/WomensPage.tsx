import { ProductList, useProducts } from "..";

export const WomensPage = () => {
  const { products, isLoading } = useProducts({
    filterKey: "women's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <h3>Is loading...</h3>}
      <ProductList products={products} />
    </div>
  );
};
