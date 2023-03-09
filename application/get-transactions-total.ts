import { Transaction } from "../domain/transaction"
import { TransactionRepository } from "../domain/transaction-repository"

export async function getTransactionsTotal(transactionRepository: TransactionRepository):Promise<number> {
  const [transactions] = await transactionRepository.getAll();
  return transactions.reduce<number>((prevTotal: number, transactionB: Transaction) => {
    const transactionBTotal: number = transactionB.isRedeemed ? transactionB.points*-1 : transactionB.points
    const result = prevTotal + transactionBTotal;
    return result <= 0 ? 0 : result;
  }, 0);
}
