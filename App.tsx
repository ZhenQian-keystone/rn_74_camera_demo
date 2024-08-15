/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useMemo} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import globalStyles from './src/theme/globalStyles';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {darkThemeColors, lightThemeColors, theme} from './src/theme/theme';
import {useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const colorAdaptedTheme = useMemo(
    () => ({
      ...theme,
      colors: colorScheme === 'light' ? lightThemeColors : darkThemeColors,
    }),
    [colorScheme],
  );

  const navTheme = useMemo(
    () => ({
      ...DarkTheme,
      dark: colorScheme === 'light',
      colors: {
        ...DarkTheme.colors,
        background:
          colorScheme === 'light'
            ? lightThemeColors.primaryBackground
            : darkThemeColors.primaryBackground,
      },
    }),

    [colorScheme],
  );

  return (
    <GestureHandlerRootView style={globalStyles.container}>
      <SafeAreaProvider>
        <ThemeProvider theme={colorAdaptedTheme}>
          <BottomSheetModalProvider>
            <NavigationContainer theme={navTheme}>
              <RootNavigator />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
