import {
  StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {memo, useMemo} from 'react';
import CreateImportAccountScreen from './CreateAccountScreen';
import {OnboardingStackParamList} from './onboardingTypes';
import CreateAccountNavgator from './create/CreateAccountNavgator';

const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  const screenOptions = useMemo(
    () =>
      ({
        headerShown: false,
      } as StackNavigationOptions),
    [],
  );

  const subScreenOptions = useMemo(
    () =>
      ({
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      } as StackNavigationOptions),
    [],
  );
  return (
    <OnboardingStack.Navigator screenOptions={screenOptions}>
      <OnboardingStack.Screen
        name="CreateImport"
        component={CreateImportAccountScreen}
      />
      <OnboardingStack.Screen
        name="CreateAccount"
        component={CreateAccountNavgator}
        options={subScreenOptions}
      />
    </OnboardingStack.Navigator>
  );
};
export default memo(OnboardingNavigator);
