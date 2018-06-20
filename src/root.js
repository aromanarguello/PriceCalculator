import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './reducer';

const INITIAL_STATE = {
    auth: { authenticated: localStorage.getItem('token') }
}

export default ({ children, initialState = INITIAL_STATE }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise, reduxThunk)
    );

    return <Provider store={store}>{children}</Provider>
};