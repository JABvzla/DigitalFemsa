import { cleanCache, transactionService } from "./transaction-service"
import fetchMock from "jest-fetch-mock"

describe("transaction-service", () => {
  beforeEach(() => {
    cleanCache()
  })
  it("should respond correctly", async () => {
    // Arrange
    // Action
    const [result, errorResult] = await transactionService.getAll()
    // Asserts
    expect(errorResult).toBeNull()
    expect(result.length).not.toBe(0)
  })
  it("when service fail should respond error and empty transactions", async () => {
    // Arrange
    fetchMock.enableMocks()
    fetchMock.mockReject()
    // Action
    const [result, errorResult] = await transactionService.getAll()
    // Asserts
    expect(errorResult).toBe("Error using TransactionService")
    expect(result).toEqual([])
  })
})
