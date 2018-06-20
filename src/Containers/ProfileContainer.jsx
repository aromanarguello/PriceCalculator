import React, { Component } from 'react';
import { ProfileCard, OrderCard } from '../components/index';
import { styles } from './ProfileContainer.styles'
import requireAuth from '../components/requireAuth/requireAuth'
class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <OrderCard />
                <div id="profileCardContainer" style={styles.profileCard}>
                    <aside>
                    <ProfileCard />
                    </aside>
                </div>
            </div>
        )
    }
}

export default requireAuth(ProfileContainer);