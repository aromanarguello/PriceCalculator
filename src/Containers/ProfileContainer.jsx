import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { OrderCard } from '../components/index';
import { styles } from './ProfileContainer.styles';
import requireAuth from '../components/requireAuth/requireAuth'
class ProfileContainer extends Component {
    render() {
        return (
            <div id='profileContainer' style={styles.container} >
                <div className='orderCardContainer' >
                    <Route exact to='/perfil/ordenes' component={OrderCard} />
                </div>
            </div>
        )
    }
}

export default requireAuth(ProfileContainer);