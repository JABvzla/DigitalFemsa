import React from 'react';
import { View } from 'react-native';
import { Transaction } from 'root/domain/transaction';
import {
  TransactionContent,
  TransactionCreated,
  TransactionImage,
  TransactionName,
  TransactionOperation,
  TransactionPoint,
} from './styled';

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({
  transaction: { product, createdAt, isRedeemed, points, image },
}: TransactionItemProps) => (
  <TransactionContent>
    <TransactionImage source={{ uri: image }} />
    <View>
      <TransactionName>{product}</TransactionName>
      <TransactionCreated>{createdAt}</TransactionCreated>
    </View>
    <TransactionPoint>
      <TransactionOperation isPlus={isRedeemed}>
        {isRedeemed ? '+' : '-'}{' '}
      </TransactionOperation>
      {points.toLocaleString()} {'>'}
    </TransactionPoint>
  </TransactionContent>
);
