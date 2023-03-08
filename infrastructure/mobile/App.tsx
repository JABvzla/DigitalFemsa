import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Card } from './src/components/card';

const App = () => {
  return (
    <NavigationContainer>
      <Card radius="M" backround="primary" />
      <Text>hola mundo</Text>
    </NavigationContainer>
  );
};

export default App;
