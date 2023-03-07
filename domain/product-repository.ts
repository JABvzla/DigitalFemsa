import { Product } from "../domain/product"

export interface ProductRepository{
  getAll: () => Product[]
}
