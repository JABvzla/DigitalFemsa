import React from 'react';
import { Transaction } from 'root/domain/transaction';
import { Margin } from '../../../components/margin';
import { Content, FlatList } from './styled';
import { TransactionItem } from './transaction-item';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = (props: TransactionListProps) => {
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
