import React from 'react';
import { Layout, Margin, Text } from '../../components';
import { BottomFilters } from './bottom-filters';
import { CardTotal } from './card-total';
import { ProductList } from './product-list';

const SectionTitle = (props: React.PropsWithChildren) => (
  <Text {...props} size="l" weight="l" color="white200" />
);

export const Home = () => {
  return (
    <Layout>
      <Text size="l" weight="l">
        Bienvenido de vuelta!
      </Text>
      <Text size="l" weight="sm">
        Ruben Rodriguez
      </Text>
      <Margin space="s" />
      <SectionTitle>TUS PUNTOS</SectionTitle>
      <Margin space="s" />
      <CardTotal />
      <Margin space="s" />
      <SectionTitle>TUS MOVIMIENTOS</SectionTitle>
      <Margin space="s" />
      <ProductList />
      <Margin space="s" />
      <BottomFilters />
    </Layout>
  );
};
