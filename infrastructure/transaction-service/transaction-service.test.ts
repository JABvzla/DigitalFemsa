import fetchTransactions from "./transaction-service"
import fetchMock from "jest-fetch-mock"

describe("transaction-service", () => {
  it("should respond correctly", async () => {
    // Arrange
    // Action
    const [result, errorResult] = await fetchTransactions()
    // Asserts
    expect(errorResult).toBeNull()
    expect(result.length).not.toBe(0)
  })
  it("when service fail should respond error and empty transactions", async () => {
    // Arrange
    fetchMock.enableMocks()
    fetchMock.mockReject()
    // Action
    const [result, errorResult] = await fetchTransactions()
    // Asserts
    expect(errorResult).toBe("Error using FetchTransactionSesrvice")
    expect(result).toEqual([])
  })
})
