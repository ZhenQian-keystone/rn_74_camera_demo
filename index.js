/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppStorageProvider from './src/storage/AppStorageProvider';


const renderApp = () => {
    return (
        <AppStorageProvider>
            <App />
        </AppStorageProvider>
    )
}

AppRegistry.registerComponent(appName, () => renderApp);
