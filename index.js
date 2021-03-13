import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import allReducers from './src/redux/reducer';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import reduxThunk from 'redux-thunk';

const store = createStore(allReducers,applyMiddleware(reduxThunk));

const demo = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
AppRegistry.registerComponent(appName, () => demo);
