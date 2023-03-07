import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
// import text from './../prueba';
import { text } from 'common/prueba'

const App = () => {
  return (
    <NavigationContainer>
      <Text>hola {text}</Text>
    </NavigationContainer>
  );
};

export default App;
