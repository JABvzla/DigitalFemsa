import { getTransactions, getTransactionsAvailable, getTransactionsRedeemed, getTransactionsTotal } from "."
import { Transaction } from "../domain/transaction"
import { TransactionRepository } from "../domain/transaction-repository"

const PRODUCTS_MOCK: Transaction[] = [
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

const transactionRepositoryMock: TransactionRepository = {
  getAll: () => Promise.resolve(PRODUCTS_MOCK),
}

it("holis", () => {
  expect(true).toBe(true)
})

describe("get-transactions", () => {
  it("should return all transactions in repository", async () => {
    // Arrange
    const expectData = PRODUCTS_MOCK
    // Action
    const result = await getTransactions(transactionRepositoryMock)
    // // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-transactions-availables", () => {
  it("should return transactions availables with repository", async () => {
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
    const result = await getTransactionsAvailable(transactionRepositoryMock)
    // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-transactions-redeemed", () => {
  it("should return transactions redeemed in repository", async () => {
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
    const result = await getTransactionsRedeemed(transactionRepositoryMock)
    // Asserts
    expect(expectData).toEqual(result)
  })
})

describe("get-transactions-total", () => {
  it("should return total add and substract of point ", async () => {
    // Arrange
    const expectResult = 1000
    // Action
    const result = await getTransactionsTotal(transactionRepositoryMock)
    // Asserts
    expect(expectResult).toEqual(result)
  })

  it("total should never be less than 0 ", async () => {
    // Arrange
    const negativeResultRespositoryMock: TransactionRepository = {
      getAll: async () => [
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
    const result = await getTransactionsTotal(negativeResultRespositoryMock)
    // Asserts
    expect(expectResult).toEqual(result)
  })
})
