import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';
import reducers from '../src/reducer/reducer';
import { ExamContainer, ProfileContainer } from './Containers/index'
import { AppBar } from './components/index'
// pass Reducer and  UserReducer as arguments to combine reducers
// const combineRdx = combineReducers({ Reducer, UserReducer})

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)

render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path='/examenes' component={ExamContainer}/>
                <Route path='/perfil' component={ProfileContainer}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);