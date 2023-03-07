import { ProductRepository } from "../domain/product-repository"

export function getProducts(productRepository: ProductRepository) {
  return productRepository.getAll()
}
