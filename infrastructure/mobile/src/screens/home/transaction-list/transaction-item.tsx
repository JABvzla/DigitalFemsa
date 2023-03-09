import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
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

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { product, createdAt, isRedeemed, points, image } = transaction;
  const navigation = useNavigation();
  const onPressHandler = useCallback(() => {
    navigation.navigate('Details', { transaction });
  }, [transaction, navigation]);

  return (
    <TransactionContent onPress={onPressHandler}>
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
};
