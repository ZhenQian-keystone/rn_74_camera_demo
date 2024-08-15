import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {memo} from 'react';
import {CreateAccountStackParamList} from './createAccountNavTypes';
import CreateAccountStartScreen from './CreateAccountScreen';
const CreateAccountStack = createStackNavigator<CreateAccountStackParamList>();
const CreateAccountNavigator = () => {
  const screenOptions = React.useMemo(
    () =>
      ({
        headerShown: false,
      } as StackNavigationOptions),
    [],
  );
  return (
    <CreateAccountStack.Navigator screenOptions={screenOptions}>
      <CreateAccountStack.Screen
        name="AccountCreateStartScreen"
        component={CreateAccountStartScreen}
      />
    </CreateAccountStack.Navigator>
  );
};

export default memo(CreateAccountNavigator);
