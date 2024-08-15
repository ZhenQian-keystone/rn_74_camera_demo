import {StackNavigationProp} from '@react-navigation/stack';

export type RouteAccount = {
  secretKey?: string;
  words?: string[];
  alias?: string;
  derivationPath?: string;
};

export type CreateAccountStackParamList = {
  AccountCreateStartScreen: undefined;
};

export type CreateAccountNavigationProp =
  StackNavigationProp<CreateAccountStackParamList>;
