import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Transaction } from 'root/domain/transaction';
import { Margin } from '../../../components';
import {
  ArrowIcon,
  DescriptionContent,
  PointContent,
  TransactionContent,
  TransactionCreated,
  TransactionImage,
  TransactionName,
  TransactionOperation,
  TransactionPoint,
} from './styled';

const AnimatedImage = { borderRadius: 10 };
interface TransactionItemProps {
  transaction: Transaction;
}
export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { id, product, createdAt, isRedeemed, points, image } = transaction;
  const navigation = useNavigation();
  const onPressHandler = useCallback(() => {
    navigation.navigate('Details', { transaction });
  }, [transaction, navigation]);

  return (
    <TransactionContent onPress={onPressHandler}>
      <SharedElement id={`image.${id}`}>
        <View style={AnimatedImage}>
          <TransactionImage source={{ uri: image }} resizeMode="stretch" />
        </View>
      </SharedElement>
      <DescriptionContent>
        <Margin space="s" />
        <TransactionName>{product}</TransactionName>
        <TransactionCreated>{createdAt}</TransactionCreated>
      </DescriptionContent>
      <PointContent>
        <TransactionOperation isPlus={isRedeemed}>
          {isRedeemed ? '+' : '-'}{' '}
        </TransactionOperation>
        <TransactionPoint>{points.toLocaleString()}</TransactionPoint>
        <ArrowIcon />
      </PointContent>
    </TransactionContent>
  );
};
