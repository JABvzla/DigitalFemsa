import { Transaction } from "../../domain/transaction"
import { TransactionsResponse } from "./transaction-response"
import { fullDateFormat } from "../helper"

const fetchImage = async (url: string) => {
  const response = await fetch(url).catch((e) => e)
  return response.url
}

export const mapperResponseToTransaction = async (transactionResponse: TransactionsResponse): Transaction => ({
  id: transactionResponse.id,
  product: transactionResponse.product,
  createdAt: fullDateFormat(transactionResponse.createdAt),
  image: await fetchImage(transactionResponse.image),
  isRedeemed: transactionResponse.is_redemption,
  points: transactionResponse.points,
})
