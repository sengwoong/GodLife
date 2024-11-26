import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <>
        <NavigationContainer theme={navTheme}>
          <RootNavigator />
        </NavigationContainer>
    </>
  );
};

export default App;
