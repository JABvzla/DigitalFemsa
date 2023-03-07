import { ProductRepository } from "../domain/product-repository"

export function getProductsAvailables(productRepository: ProductRepository) {
  return productRepository.getAll().filter(product => product.isRedeemed === false)
}
