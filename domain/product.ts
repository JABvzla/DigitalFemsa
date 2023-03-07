import { Id, Image, Point, Date } from "./generic"

export interface Product {
  id: Id
  createdAt: Date
  name: string
  imagen: Image
  isRedemption: boolean
  points: Point
}
