import { Id, Image, Point, Date } from "./generic"
import { Product } from "./product"

export interface Transaction {
  id: Id
  createdAt: Date
  product: Product
  image: Image
  isRedeemed: boolean
  points: Point
}
