import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productsActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productsActions.postProduct,

    onMutate: (product) => {
      const optimisticProduct = { id: Math.random(), ...product };

      queryClient.setQueryData(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [optimisticProduct];
          return [...oldData, optimisticProduct];
        }
      );
    },

    onSuccess: (product) => {
      //! invalidateQueries
      // queryClient.invalidateQueries({
      //   queryKey: ["products", { filterKey: data.category }],
      // });

      queryClient.setQueryData(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [product];
          return [...oldData, product];
        }
      );
    },
  });

  return mutation;
};
