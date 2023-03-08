import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home, TransactionDetail } from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
      {/* <TransactionDetail /> */}
    </NavigationContainer>
  );
};

export default App;
