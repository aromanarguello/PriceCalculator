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
                <Route path='/examenes' component={ExamContainer} />
                <Route path='/perfil' component={ProfileContainer} />
                <Route path='/signout' component={Signout} />
                {/* <Route  path='/perfil/ordenes' component={OrderCard} /> */}
            </Switch>
        </div>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);