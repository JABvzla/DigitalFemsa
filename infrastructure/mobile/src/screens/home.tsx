import React from 'react';
import { Card, CardTotal, Layout, Text } from '../components';

export const Home = () => {
  return (
    <Layout>
      <Text size="l" weight="l">
        Bienvenido de vuelta!
      </Text>
      <Text size="l" weight="sm">
        Ruben Rodriguez
      </Text>
      <Text size="m" weight="l" color="white200">
        TUS PUNTOS
      </Text>

      <CardTotal />

      <Text size="l" color="black">
        TUS MOVIMIENTOS
      </Text>
      <Card radius="xl" backround="primary">
        <Text>Ganados</Text>
      </Card>
      <Card radius="xl" backround="primary">
        <Text>Canjeados</Text>
      </Card>
    </Layout>
  );
};
