/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/HomeScreen';
import CameraDemoScreen from '../features/connect/CameraDemoScreen';

const Tab = createBottomTabNavigator();

function MyBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CameraDemo" component={CameraDemoScreen} />
    </Tab.Navigator>
  );
}

export default MyBottomTabNavigator;
