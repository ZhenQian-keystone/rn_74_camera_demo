/* eslint-disable react/react-in-jsx-scope */

import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBarNavigator from './TabBarNavigator';
import OnboardingNavigator from '../features/onboarding/OnboardingNavigator';
const screenNameShowOptions = {headerShown: false} as StackNavigationOptions;

const RootNavigator = () => {
  let RootStack = createStackNavigator();
  return (
    <RootStack.Navigator screenOptions={screenNameShowOptions}>
      <RootStack.Screen
        key="OnboardingNavigator"
        name="OnboardingNavigator"
        component={OnboardingNavigator}
        options={screenNameShowOptions}
      />
      <RootStack.Screen
        name="BottomTabBarNav"
        component={TabBarNavigator}
        options={screenNameShowOptions}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
