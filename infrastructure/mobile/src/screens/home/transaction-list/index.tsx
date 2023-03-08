import React from 'react';
import { Margin } from '../../../components/margin';
import { TransactionItem } from './transaction-item';
import { Content, FlatList } from './styled';

interface TransactionListProps {}

const DATA_MOCK = [1, 2, 3, 4, 5, 6, 7];
export const TransactionList = (_props: TransactionListProps) => {
  return (
    <Content>
      <FlatList
        data={DATA_MOCK}
        renderItem={TransactionItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Margin space="s" />}
      />
    </Content>
  );
};
