import { TransactionRepository } from "../domain/transaction-repository"

export async function getTransactionsRedeemed(transactionRepository: TransactionRepository) {
  const [transactions, error] = await transactionRepository.getAll();
  return [transactions.filter(transaction => transaction.isRedeemed === true), error];
}
