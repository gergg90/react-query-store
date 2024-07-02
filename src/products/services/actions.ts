import { sleep } from "../../helpers/sleep";
import { productsApi } from "../api/productsApi";
import { Product } from "../interfaces/products";

interface OptionsProducts {
  filterKey?: string;
}

export const getAllProducts = async ({
  filterKey,
}: OptionsProducts): Promise<Product[]> => {
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

interface ProductLike {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const postProduct = async (product: ProductLike) => {
  await sleep(10);

  throw new Error("Error al crear el producto");

  const { data } = await productsApi.post<Product>("/products", product);
  return data;
};
