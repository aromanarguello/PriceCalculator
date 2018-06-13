import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, ProfileCard } from '../components/index';
import { styles } from './ProfileContainer.styles'

class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <div id="app-bar-container">
                    <AppBar />
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

export default ProfileContainer;