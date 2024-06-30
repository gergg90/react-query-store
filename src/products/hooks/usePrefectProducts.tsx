import { useQueryClient } from "@tanstack/react-query";
import { productsActions } from "..";

export const usePrefectProducts = () => {
  const queryClient = useQueryClient();

  const prefetchData = (id: number) =>
    queryClient.prefetchQuery({
      queryKey: ["products", id],
      queryFn: () => productsActions.getProductById(id),
    });

  return { prefetchData };
};
