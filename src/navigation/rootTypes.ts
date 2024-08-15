import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  OnboardingNavigator: undefined;
  BottomTabBarNav: undefined;
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
