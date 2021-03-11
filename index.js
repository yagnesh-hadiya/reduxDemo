import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import allReducers from './src/redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

AppRegistry.registerComponent(appName, () =>
    <Provider store={store}>
        <App />
    </Provider>
);
