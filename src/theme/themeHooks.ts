import {useTheme} from '@shopify/restyle';
import {Theme} from './theme';

// 文本样式
export const useTextVariants = () => {
  const {textVariants} = useTheme<Theme>();
  return textVariants;
};

export const useColors = () => {
  const {colors} = useTheme<Theme>();
  return colors;
};
