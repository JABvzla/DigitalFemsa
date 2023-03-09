import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from './src/screens';
import { Transaction } from 'root/domain/transaction';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Screen.Home} />
        <Stack.Screen name="Details" component={Screen.TransactionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParams = {
  Home: undefined;
  Details: { transaction: Transaction };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace ReactNavigation {
  interface RootParamList extends RootStackParams {}
}

export default App;
