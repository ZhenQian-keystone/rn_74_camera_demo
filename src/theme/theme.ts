import {createTheme} from '@shopify/restyle';
export const Font = {
  italic: 'DMSans-Italic',
  regular: 'DMSans-Regular',
  mediumItalic: 'DMSans-MediumItalic',
  medium: 'DMSans-Medium',
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
};
const palette = {
  black700: '#161616',
  red200: '#F59CA2',

  red300: '#F97570',
  red400: '#FF6666',
  red500: '#E43B70',
};

const lightThemeColors = {
  primaryText: palette.black700,
  error: palette.red500,
};

export const textVariants = {
  h0: {
    fontFamily: Font.regular,
    fontSize: 42,
    lineHeight: 44,
    color: 'primaryText',
  },
  h1: {
    fontFamily: Font.regular,
    fontSize: 37,
    color: 'primaryText',
  },
  h2: {
    fontFamily: Font.regular,
    fontSize: 33,
    color: 'primaryText',
  },
  h3: {
    fontFamily: Font.regular,
    fontSize: 27,
    color: 'primaryText',
  },
  h4: {
    fontFamily: Font.regular,
    fontSize: 22,
    color: 'primaryText',
  },
  subtitle1: {
    fontFamily: Font.medium,
    fontSize: 20,
    color: 'primaryText',
  },
  subtitle2: {
    fontFamily: Font.medium,
    fontSize: 19,
    color: 'primaryText',
  },
  subtitle3: {
    fontFamily: Font.medium,
    fontSize: 17,
    color: 'primaryText',
  },
  subtitle4: {
    fontFamily: Font.medium,
    fontSize: 14,
    color: 'primaryText',
  },
  body0: {
    fontFamily: Font.regular,
    fontSize: 21,
    color: 'primaryText',
  },
  body1: {
    fontFamily: Font.regular,
    fontSize: 16,
    color: 'primaryText',
  },
  body2: {
    fontFamily: Font.regular,
    fontSize: 14,
    color: 'primaryText',
  },
  body3: {
    fontFamily: Font.regular,
    fontSize: 12,
    color: 'primaryText',
  },
  body4: {
    fontFamily: Font.regular,
    fontSize: 8,
    color: 'primaryText',
  },
  regular: {
    fontFamily: Font.regular,
  },
  medium: {
    fontFamily: Font.medium,
  },
  bold: {
    fontFamily: Font.bold,
  },
};

export const theme = createTheme({
  colors: lightThemeColors,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    ...textVariants,
  },
});

export type Theme = typeof theme;
export type TextVariant = keyof Theme['textVariants'];
export type Spacing = keyof Theme['spacing'];
