/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import FirstApp from './ch4/FirstApp';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => FirstApp);
