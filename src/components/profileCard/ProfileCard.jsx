import React, { Component } from 'react';
import { styles } from './ProfileCard.styles'
import Paper from '@material-ui/core/Paper';

class ProfileCard extends Component {
    render() {
        return (
            <Paper elevation={4} style={ styles.profileCard }>
                <div id='profileImageContainer'>
                    <div style={styles.profileImageContainer}></div>
                </div>
            </Paper>
        )
    }
}

export default ProfileCard;