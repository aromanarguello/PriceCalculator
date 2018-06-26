import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExamContainer, ProfileContainer, AuthContainer } from './Containers/index';
import { AppBar, Signout, OrderCard } from './components/index'
import Root from './root';

render(
    <Root>
        <BrowserRouter>
        <div>
            {/* <AppBar /> */}
            <Switch>
                <Route exact path='/' component={AuthContainer} />
                <Route exact path='/examenes' component={ExamContainer} />
                <Route exact path='/perfil' component={ProfileContainer} />
                <Route exact path='/signout' component={Signout} />
                <Route exact path='/perfil/ordenes' component={OrderCard} />
            </Switch>
        </div>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);