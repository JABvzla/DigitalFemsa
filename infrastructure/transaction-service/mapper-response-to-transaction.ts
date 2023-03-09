import { Transaction } from "../../domain/transaction"
import { TransactionsResponse } from "./transaction-response"
import { fullDateFormat } from "../helper"

export const mapperResponseToTransaction = (transactionResponse: TransactionsResponse): Transaction => ({
  id: transactionResponse.id,
  product: transactionResponse.product,
  createdAt: fullDateFormat(transactionResponse.createdAt),
  image: transactionResponse.image,
  isRedeemed: transactionResponse.is_redemption,
  points: transactionResponse.points,
})
