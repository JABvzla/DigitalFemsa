import { ProductRepository } from "../domain/product-repository"

export async function getProductsRedeemed(productRepository: ProductRepository) {
  const products = await productRepository.getAll();
  return products.filter(product => product.isRedeemed === true);
}
