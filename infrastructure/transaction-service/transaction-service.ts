import { mapperResponseToTransaction } from "./mapper-response-to-transaction"
import { TransactionsResponse } from "./transaction-response"
import { Transaction } from "../../domain/transaction"
import { TransactionRepository } from "../../domain/transaction-repository"

const URL = "https://6222994f666291106a29f999.mockapi.io/api/v1/products"

type FetchTransactionsResponse = TransactionsResponse[]

export const transactionService: TransactionRepository = {
  async getAll(): Promise<[Transaction[], string | null]> {
    const response = await fetch(URL).catch((e) => e)
    if (!response || response?.status !== 200) return [[], "Error using TransactionService"]
    const data: FetchTransactionsResponse = await response.json()
    return [data.map(mapperResponseToTransaction), null]
  },
}
