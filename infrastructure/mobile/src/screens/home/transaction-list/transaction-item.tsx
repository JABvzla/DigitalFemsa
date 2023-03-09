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
  transaction: { product, createdAt, isRedeemed, points },
}: TransactionItemProps) => (
  <TransactionContent>
    <TransactionImage />
    <View>
      <TransactionName>{product}</TransactionName>
      <TransactionCreated>{createdAt}</TransactionCreated>
    </View>
    <TransactionPoint>
      <TransactionOperation isPlus={!isRedeemed}>
        {!isRedeemed ? '+' : '-'}
      </TransactionOperation>
      {points} {'>'}
    </TransactionPoint>
  </TransactionContent>
);
