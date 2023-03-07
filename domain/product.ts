import { Id, Image, Point, Date } from "./generic"

export interface Product {
  id: Id
  createdAt: Date
  name: string
  image: Image
  isRedeemed: boolean
  points: Point
}
