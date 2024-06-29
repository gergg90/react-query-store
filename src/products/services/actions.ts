import { productsApi } from "../api/productsApi";
import { Product } from "../interfaces/products";

interface OptionsProducts {
  filterKey?: string;
}

export const getAllProducts = async ({
  filterKey,
}: OptionsProducts): Promise<Product[]> => {
  // await sleep(3);

  // const params = new URLSearchParams();
  // if (filterKey) params.append("category", filterKey);

  const key = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(`/products?${key}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};
