/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppStorageProvider from './src/storage/AppStorageProvider';
import LanguageProvider from './src/storage/LanguageProvider';
import './src/utils/i18n';

const renderApp = () => {
    return (
        <LanguageProvider>
            <AppStorageProvider>
                <App />
            </AppStorageProvider>
        </LanguageProvider>
    )
}

AppRegistry.registerComponent(appName, () => renderApp);
