import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface ProductOptions {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: ProductOptions) => {
  const {
    data: products = [],
    isError,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => productsActions.getAllProducts({ filterKey }),
    staleTime: 1000 * 60 * 60,
  });

  return { products, isError, isLoading, isFetching, error };
};
