import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {memo, useMemo} from 'react';
import CreateImportAccountScreen from './CreateAccountScreen';
import {OnboardingStackParamList} from './onboardingTypes';

const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  const screenOptions = useMemo(
    () =>
      ({
        headerShown: false,
      } as StackNavigationOptions),
    [],
  );

  return (
    <OnboardingStack.Navigator screenOptions={screenOptions}>
      <OnboardingStack.Screen
        name="CreateImport"
        component={CreateImportAccountScreen}
      />
    </OnboardingStack.Navigator>
  );
};
export default memo(OnboardingNavigator);
