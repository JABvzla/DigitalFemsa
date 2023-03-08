import React from 'react';
import { View } from 'react-native';
import {
  TransactionContent,
  TransactionCreated,
  TransactionImage,
  TransactionName,
  TransactionOperation,
  TransactionPoint,
} from './styled';

export const TransactionItem = () => (
  <TransactionContent>
    <TransactionImage />
    <View>
      <TransactionName>Nombre del producto</TransactionName>
      <TransactionCreated>26 enero, 2019</TransactionCreated>
    </View>
    <TransactionPoint>
      <TransactionOperation isPlus>+</TransactionOperation>100 {'>'}
    </TransactionPoint>
  </TransactionContent>
);
