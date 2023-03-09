import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { forFade } from './src/navigation-transition';
import * as Screen from './src/screens';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, cardStyleInterpolator: forFade }}>
        <Stack.Screen name="Home" component={Screen.Home} />
        <Stack.Screen
          name="Details"
          component={Screen.TransactionDetail}
          sharedElements={route => [`image.${route.params.transaction.id}`]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
