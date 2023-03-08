import fetchProducts from "./product-service"
import fetchMock from "jest-fetch-mock"

describe("product-service", () => {
  it("should respond correctly", async () => {
    // Arrange
    // Action
    const [result, errorResult] = await fetchProducts()
    // Asserts
    expect(errorResult).toBeNull()
    expect(result.length).not.toBe(0)
  })
  it("when service fail should respond error and empty products", async () => {
    // Arrange
    fetchMock.enableMocks()
    fetchMock.mockReject()
    // Action
    const [result, errorResult] = await fetchProducts()
    // Asserts
    expect(errorResult).toBe("Error using FetchProductSesrvice")
    expect(result).toEqual([])
  })
})
