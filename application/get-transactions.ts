import { TransactionRepository } from "domain/transaction-repository"

export async function getTransactions(transactionRepository: TransactionRepository) {
  return transactionRepository.getAll()
}
