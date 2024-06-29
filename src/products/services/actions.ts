import { sleep } from "../../helpers/sleep";
import { productsApi } from "../api/productsApi";
import { Product } from "../interfaces/products";

interface OptionsProducts {
  filterKey?: string;
}

export const getAllProducts = async ({ filterKey }: OptionsProducts) => {
  await sleep(3);

  const params = new URLSearchParams();
  if (filterKey) params.append("category", filterKey);

  const { data } = await productsApi.get<Product[]>(`/products`, {
    params,
  });
  return data;
};
