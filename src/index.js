import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExamContainer, ProfileContainer, AuthContainer } from './Containers/index';
import { AppBar } from './components/index'
import Root from './root';

render(
    <Root>

        <BrowserRouter>
        <div>
            <AppBar />
            <Switch>
                <Route path='/' exact component={AuthContainer} />
                <Route path='/examenes' exact component={ExamContainer}/>
                <Route path='/perfil' exact component={ProfileContainer}/>
            </Switch>
        </div>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);