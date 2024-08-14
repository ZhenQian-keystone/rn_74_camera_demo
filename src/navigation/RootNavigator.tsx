/* eslint-disable react/react-in-jsx-scope */

import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBarNavigator from './TabBarNavigator';
const screenNameShowOptions = {headerShown: false} as StackNavigationOptions;
const RootNavigator = () => {
  let rootStack = createStackNavigator();
  return (
    <rootStack.Navigator screenOptions={screenNameShowOptions}>
      <rootStack.Screen
        name="BottomTabBarNav"
        component={TabBarNavigator}
        options={screenNameShowOptions}
      />
    </rootStack.Navigator>
  );
};

export default RootNavigator;
