import React from 'react';
import { Card, Text } from '../../../components';

export const BottomFilters = () => {
  return (
    <>
      <Card radius="xl" backround="primary">
        <Text>Ganados</Text>
      </Card>
      <Card radius="xl" backround="primary">
        <Text>Canjeados</Text>
      </Card>
    </>
  );
};
