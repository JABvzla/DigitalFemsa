import { Product } from "../../domain/product";
import { ProductsResponse } from "./product-response";

export const mapperResponseToProduct = (productResponse: ProductsResponse): Product => ({
  id: productResponse.id,
  name: productResponse.product,
  createdAt: productResponse.createdAt,
  image: productResponse.image,
  isRedeemed: productResponse.is_redemption,
  points: productResponse.points,
})