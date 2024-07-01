import { useMutation } from "@tanstack/react-query";
import { Product, productsActions } from "..";

export const useProductMutation = () => {
  const mutation = useMutation({
    mutationFn: (data: Product) => {
      return productsActions.postProduct(data);
    },
  });

  return { mutation };
};
