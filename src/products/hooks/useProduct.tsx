import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface ProductById {
  id: number;
}

export const useProduct = ({ id }: ProductById) => {
  const {
    data: product,
    isError,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productsActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return { product, isError, isLoading, isFetching, error };
};
