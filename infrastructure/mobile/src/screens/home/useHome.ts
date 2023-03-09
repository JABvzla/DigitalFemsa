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
  const [filter, setFilter] = useState<TransactionFilter>('all');
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const [response] = await getTransactions(transactionService);
      const totalResponse = await getTransactionsTotal(transactionService);
      setTransactions(response);
      setTotal(totalResponse);
      setLoading(false);
    })();
  }, []);

  const applyFilter = async (tf: TransactionFilter) => {
    const MINIMUM_LOADER_SHOWING = 300;
    setLoading(true);
    const [transactionApplicationResponse] = await {
      all: getTransactions,
      available: getTransactionsAvailable,
      redeemed: getTransactionsRedeemed,
    }[tf](transactionService);
    setTransactions(transactionApplicationResponse);
    setFilter(tf);
    setTimeout(() => setLoading(false), MINIMUM_LOADER_SHOWING);
  };

  return {
    transactions,
    total,
    setFilter: applyFilter,
    withFilter: filter !== 'all',
    loading,
  };
};
