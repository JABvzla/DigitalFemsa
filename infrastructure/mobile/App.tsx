import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Card, Text } from './src/components';

const App = () => {
  return (
    <NavigationContainer>
      <Card radius="m" backround="primary" />
      <Text size="l" color="black">
        hola mundo
      </Text>
    </NavigationContainer>
  );
};

export default App;
