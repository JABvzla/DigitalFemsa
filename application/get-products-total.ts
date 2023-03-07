import { Product } from "../domain/product"
import { ProductRepository } from "../domain/product-repository"

export function getProductsTotal(productRepository: ProductRepository): number {
  return productRepository.getAll().reduce<number>((prevTotal: number, productB: Product) => {
    const productBTotal: number = productB.isRedeemed ? productB.points*-1 : productB.points
    const result = prevTotal + productBTotal;
    return result <= 0 ? 0 : result;
  }, 0)
}
