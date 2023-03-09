import React, { useState } from 'react';
import { getTransactions } from 'root/application';
import { Transaction } from 'root/domain/transaction';
import { transactionService } from 'root/infrastructure/transaction-service';

interface UseHomeResponse {
  transactions: Transaction[];
}
export const useHome = (): UseHomeResponse => {
  const [transactions, setTransactions] = useState([]);

  React.useEffect(() => {
    (async () => {
      const [response] = await getTransactions(transactionService);
      setTransactions(response);
    })();
  }, []);

  return {
    transactions,
  };
};
