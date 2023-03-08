import React from 'react';
import { Card, CardTotal, Layout, Margin, Text } from '../components';

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
      <Card radius="xl" backround="primary">
        <Text>Ganados</Text>
      </Card>
      <Card radius="xl" backround="primary">
        <Text>Canjeados</Text>
      </Card>
    </Layout>
  );
};
