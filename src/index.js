import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import reducers from '../src/reducer/reducer';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

// pass Reducer and  UserReducer as arguments to combine reducers
// const combineRdx = combineReducers({ Reducer, UserReducer})

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)

render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);