/* eslint-disable react/react-in-jsx-scope */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppStorageProvider from './src/storage/AppStorageProvider';
import LanguageProvider from './src/storage/LanguageProvider';
import './src/utils/i18n';
import {ThemeProvider} from '@shopify/restyle';
import {darkThemeColors, theme} from './src/theme/theme';

const renderApp = () => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: darkThemeColors,
      }}>
      <LanguageProvider>
        <AppStorageProvider>
          <App />
        </AppStorageProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => renderApp);
