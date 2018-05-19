import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './store/configureStore'
const store = ConfigureStore();

const RNRedux = () =>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>);
};


AppRegistry.registerComponent('AuthorizationDemo', () => RNRedux);
