import { getProducts, getProductsAvailables, getProductsRedeemed, getProductsTotal } from "."
import { Product } from "../domain/product"
import { ProductRepository } from "../domain/product-repository"

const PRODUCTS_MOCK: Product[] = [
  {
    id: "1",
    createdAt: "2022-12-09T10:20:00.909Z",
    name: "Fantastic Granite Bacon",
    points: 4000,
    image: "mock-image-1",
    isRedeemed: false,
  },
  {
    id: "2",
    createdAt: "2022-12-09T10:20:00.909Z",
    name: "Fantastic Granite Bacon",
    points: 2000,
    image: "mock-image-2",
    isRedeemed: true,
  },
  {
    id: "3",
    createdAt: "2022-12-09T10:20:00.909Z",
    name: "Fantastic Granite Bacon",
    points: 4000,
    image: "https://loremflickr.com/640/480/technics",
    isRedeemed: false,
  },
  {
    id: "4",
    createdAt: "2022-12-09T10:20:00.909Z",
    name: "Fantastic Granite Bacon",
    points: 5000,
    image: "https://loremflickr.com/640/480/technics",
    isRedeemed: true,
  },
]

const productRepositoryMock: ProductRepository = {
  getAll: () => PRODUCTS_MOCK,
}

describe("get-products", () => {
  it("should return all products in repository", () => {
    // Arrange
    const expectData = PRODUCTS_MOCK
    // Action
    const result = getProducts(productRepositoryMock)
    // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-products-availables", () => {
  it("should return products availables with repository", () => {
    // Arrange
    const expectData = [
      {
        id: "1",
        createdAt: "2022-12-09T10:20:00.909Z",
        name: "Fantastic Granite Bacon",
        points: 4000,
        image: "mock-image-1",
        isRedeemed: false,
      },
      {
        id: "3",
        createdAt: "2022-12-09T10:20:00.909Z",
        name: "Fantastic Granite Bacon",
        points: 4000,
        image: "https://loremflickr.com/640/480/technics",
        isRedeemed: false,
      },
    ]
    // Action
    const result = getProductsAvailables(productRepositoryMock)
    // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-products-redeemed", () => {
  it("should return products redeemed in repository", () => {
    // Arrange
    const expectData = [
      {
        id: "2",
        createdAt: "2022-12-09T10:20:00.909Z",
        name: "Fantastic Granite Bacon",
        points: 2000,
        image: "mock-image-2",
        isRedeemed: true,
      },
      {
        id: "4",
        createdAt: "2022-12-09T10:20:00.909Z",
        name: "Fantastic Granite Bacon",
        points: 5000,
        image: "https://loremflickr.com/640/480/technics",
        isRedeemed: true,
      },
    ]
    // Action
    const result = getProductsRedeemed(productRepositoryMock)
    // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-products-total", () => {
  it("should return total add and substract of point ", () => {
    // Arrange
    const expectResult = 1000
    // Action
    const result = getProductsTotal(productRepositoryMock)
    // Asserts
    expect(expectResult).toEqual(result)
  })

  it("total should never be less than 0 ", () => {
    // Arrange
    const negativeResultRespositoryMock: ProductRepository = {
      getAll: () => [
        {
          id: "4",
          createdAt: "2022-12-09T10:20:00.909Z",
          name: "Fantastic Granite Bacon",
          points: 5000,

          image: "https://loremflickr.com/640/480/technics",
          isRedeemed: true,
        },
      ],
    }
    const expectResult = 0
    // Action
    const result = getProductsTotal(negativeResultRespositoryMock)
    // Asserts
    expect(expectResult).toEqual(result)
  })
})
