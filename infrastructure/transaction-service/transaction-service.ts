import { mapperResponseToTransaction } from "./mapper-response-to-transaction"
import { TransactionsResponse } from "./transaction-response"
import { Transaction } from "../../domain/transaction"
import { TransactionRepository } from "../../domain/transaction-repository"

const URL = "https://6222994f666291106a29f999.mockapi.io/api/v1/products"

type FetchTransactionsResponse = TransactionsResponse[]

interface LocalCache {
  transactions: Transaction[]
}
const cache: LocalCache = {
  transactions: [],
}
export const cleanCache = () => {
  cache.transactions = []
}

export const transactionService: TransactionRepository = {
  async getAll(): Promise<[Transaction[], string | null]> {
    if (cache.transactions.length) {
      return [cache.transactions, null]
    }
    const response = await fetch(URL).catch((e) => e)
    if (!response || response?.status !== 200) {
      cache.transactions = []
      return [[], "Error using TransactionService"]
    }
    const data: FetchTransactionsResponse = await response.json()
    const transactions = data.map(mapperResponseToTransaction)
    cache.transactions = transactions
    return [transactions, null]
  },
}
