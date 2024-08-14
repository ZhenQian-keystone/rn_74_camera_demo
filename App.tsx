/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyBottomTabNavigator from './src/navigation/TabBarNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyBottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
