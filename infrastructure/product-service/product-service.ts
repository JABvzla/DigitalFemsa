import { Product } from "../../domain/product"
import { mapperResponseToProduct } from "./mapper-response-to-product"
import { ProductsResponse } from "./product-response"

const URL = "https://6222994f666291106a29f999.mockapi.io/api/v1/products"

type FetchProductsResponse = ProductsResponse[]

export default async function fetchProducts(): Promise<[Product[], string | null]> {
  const response = await fetch(URL).catch((e) => e)
  if (!response || response?.status !== 200) return [[], "Error using FetchProductSesrvice"]
  const data: FetchProductsResponse = await response.json()
  return [data.map(mapperResponseToProduct), null]
}
