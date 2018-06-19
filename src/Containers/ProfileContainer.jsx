import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProfileCard } from '../components/index';
import { styles } from './ProfileContainer.styles'
import requireAuth from '../components/requireAuth/requireAuth'
class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <div id="app-bar-container">
                </div>
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