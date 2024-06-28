import { productsApi } from "../api/productsApi";
import { Product } from "../interfaces/products";

interface OptionsProducts {
  filterKey?: string;
}

export const getAllProducts = async ({ filterKey }: OptionsProducts) => {
  // await sleep(5);
  const { data } = await productsApi.get<Product[]>("/products");
  return data;
};
