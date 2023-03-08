import { ProductRepository } from "../domain/product-repository"

export async function getProducts(productRepository: ProductRepository) {
  return productRepository.getAll()
}
