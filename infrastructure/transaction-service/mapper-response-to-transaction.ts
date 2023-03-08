import { Transaction } from "../../domain/transaction"
import { TransactionsResponse } from "./transaction-response"

export const mapperResponseToTransaction = (transactionResponse: TransactionsResponse): Transaction => ({
  id: transactionResponse.id,
  product: transactionResponse.product,
  createdAt: transactionResponse.createdAt,
  image: transactionResponse.image,
  isRedeemed: transactionResponse.is_redemption,
  points: transactionResponse.points,
})
