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

      return {
        optimisticProduct,
      };
    },

    onError: (err, variables, context) => {
      queryClient.removeQueries({
        queryKey: ["products", { filterKey: context?.optimisticProduct.id }],
      });
      queryClient.setQueryData(
        ["products", { filterKey: variables.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [];

          return oldData.filter((chacheProduct) => {
            return chacheProduct.id !== context?.optimisticProduct.id;
          });
        }
      );
    },
    onSuccess: (product, variables, context) => {
      //! invalidateQueries
      // queryClient.invalidateQueries({
      //   queryKey: ["products", { filterKey: data.category }],
      // });

      queryClient.removeQueries({
        queryKey: ["products", { filterKey: context?.optimisticProduct.id }],
      });

      queryClient.setQueryData(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [product];

          return oldData.map((chacheProduct) => {
            if (chacheProduct.id === context?.optimisticProduct.id) {
              return product;
            }

            return chacheProduct;
          });
        }
      );
    },
  });

  return mutation;
};
