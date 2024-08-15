import {Dimensions} from 'react-native';
// 屏幕宽高
export const {width, height} = Dimensions.get('window');
// height percentage
export const hp = (percentage: number) =>
  Math.round((percentage * height) / 100);
// width percentage
export const wp = (percentage: number) =>
  Math.round((percentage * width) / 100);
// 屏幕宽度
export const SCREEN_WIDTH = width;
// 屏幕高度
export const SCREEN_HEIGHT = height;
