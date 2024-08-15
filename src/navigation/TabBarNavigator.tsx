/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/HomeScreen';
import CameraDemoScreen from '../features/connect/CameraDemoScreen';
import ImageGalleryScreen from '../features/imgGallery/ImgGalleryScreen';

const Tab = createBottomTabNavigator();

// 配置底部导航栏对应页面
function MyBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CameraDemo" component={CameraDemoScreen} />
      <Tab.Screen name="SVG" component={ImageGalleryScreen} />
    </Tab.Navigator>
  );
}

export default MyBottomTabNavigator;
