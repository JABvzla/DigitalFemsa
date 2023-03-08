import { TransactionRepository } from "../domain/transaction-repository"

export async function getTransactionsAvailable(transactionRepository: TransactionRepository) {
  const transactions = await transactionRepository.getAll();
  return transactions.filter(transaction => transaction.isRedeemed === false);
}
