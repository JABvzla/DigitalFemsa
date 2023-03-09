import React from 'react';
import { StatusBar } from 'react-native';
import { Layout, Margin, Text } from '../../components';
import { color } from '../../styles';
import { BottomFilters } from './bottom-filters';
import { CardTotal } from './card-total';
import { SectionTitle } from './section-title';
import { TransactionList } from './transaction-list';
import { useHome } from './useHome';

export const Home = () => {
  const { transactions, total, withFilter, setFilter } = useHome();
  return (
    <>
      <StatusBar backgroundColor={color('white100')} barStyle="dark-content" />
      <Layout>
        <Text size="l" weight="l">
          Bienvenido de vuelta!
        </Text>
        <Text size="l" weight="sm">
          Ruben Rodriguez
        </Text>
        <Margin space="m" />
        <SectionTitle>TUS PUNTOS</SectionTitle>
        <Margin space="m" />
        <CardTotal total={total} />
        <Margin space="m" />
        <SectionTitle>TUS MOVIMIENTOS</SectionTitle>
        <Margin space="m" />
        <TransactionList transactions={transactions} />
        <Margin space="m" />
        <BottomFilters setFilters={setFilter} withFilter={withFilter} />
      </Layout>
    </>
  );
};
