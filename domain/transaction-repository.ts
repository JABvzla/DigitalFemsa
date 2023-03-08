import { Transaction } from "../domain/transaction"

export interface TransactionRepository{
  getAll: () => Promise<Transaction[]>
}
