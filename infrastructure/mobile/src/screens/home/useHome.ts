import React, { useState } from 'react';
import {
  getTransactions,
  getTransactionsAvailable,
  getTransactionsRedeemed,
  getTransactionsTotal,
} from 'root/application';
import { Transaction } from 'root/domain/transaction';
import { transactionService } from 'root/infrastructure/transaction-service';

export type TransactionFilter = 'all' | 'redeemed' | 'available';
interface UseHomeReturns {
  transactions: Transaction[];
  total: number;
  setFilter: (filter: TransactionFilter) => void;
  withFilter: boolean;
  loading: boolean;
}
export const useHome = (): UseHomeReturns => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [available, setAvailable] = useState<Transaction[]>([]);
  const [redeemed, setRedeemed] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<TransactionFilter>('all');
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const [response] = await getTransactions(transactionService);
      const [[availableResponse], [redeemedResponse], totalResponse] =
        await Promise.all([
          getTransactionsAvailable(transactionService),
          getTransactionsRedeemed(transactionService),
          getTransactionsTotal(transactionService),
        ]);

      setTransactions(response);
      setAvailable(availableResponse as Transaction[]);
      setRedeemed(redeemedResponse as Transaction[]);
      setTotal(totalResponse);
      setLoading(false);
    })();
  }, []);

  const getByFilter = (f: TransactionFilter) =>
    ({
      all: transactions,
      available,
      redeemed,
    }[f]);

  return {
    transactions: getByFilter(filter),
    total,
    setFilter,
    withFilter: filter !== 'all',
    loading,
  };
};
