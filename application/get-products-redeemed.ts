import { ProductRepository } from "../domain/product-repository"

export function getProductsRedeemed(productRepository: ProductRepository) {
  return productRepository.getAll().filter(product => product.isRedeemed === true)
}
