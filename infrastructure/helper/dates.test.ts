import { fullDateFormat } from "./dates"

describe("fullDateFormat", () => {
  it("Given ztn format should return format dd MM yyy in spanish", () => {
    // Arrange
    const entryFormat = "2023-02-04T07:48:16.249Z"
    const expectResult = "4 de febrero de 2023"
    // Action
    const result = fullDateFormat(entryFormat)
    // Asserts
    expect(result).toBe(expectResult)
  });
  it("Given back format should return empty string", () => {
    // Arrange
    const entryFormat = "2023-02-04T0755:48:16.249Z"
    const expectResult = ""
    // Action
    const result = fullDateFormat(entryFormat)
    // Asserts
    expect(result).toBe(expectResult)
  });
  it("Given back date should return empty string", () => {
    // Arrange
    const entryFormat = "2023-32-30T07:48:16.249Z"
    const expectResult = ""
    // Action
    const result = fullDateFormat(entryFormat)
    // Asserts
    expect(result).toBe(expectResult)
  });
})
