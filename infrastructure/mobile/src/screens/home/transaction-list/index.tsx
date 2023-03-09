import React from 'react';
import { Transaction } from 'root/domain/transaction';
import { Loader } from '../../../components';
import { Margin } from '../../../components/margin';
import { Content, FlatList } from './styled';
import { TransactionItem } from './transaction-item';

interface TransactionListProps {
  transactions: Transaction[];
  loading: boolean;
}

export const TransactionList = (props: TransactionListProps) => {
  if (props.loading) {
    return (
      <Content>
        <Loader />
      </Content>
    );
  }

  return (
    <Content>
      <FlatList<Transaction>
        data={props.transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Margin space="s" />}
      />
    </Content>
  );
};
