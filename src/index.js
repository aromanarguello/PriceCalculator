import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { ExamContainer, ProfileContainer } from './Containers/index';
import Root from './root';

render(
    <Root>
        <BrowserRouter>
            <Switch>
                <Route path='/examenes' exact component={ExamContainer}/>
                <Route path='/perfil' component={ProfileContainer}/>
            </Switch>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);