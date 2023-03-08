import { Product } from "../domain/product"
import { ProductRepository } from "../domain/product-repository"

export async function getProductsTotal(productRepository: ProductRepository):Promise<number> {
  const products = await productRepository.getAll();
  return products.reduce<number>((prevTotal: number, productB: Product) => {
    const productBTotal: number = productB.isRedeemed ? productB.points*-1 : productB.points
    const result = prevTotal + productBTotal;
    return result <= 0 ? 0 : result;
  }, 0);
}
