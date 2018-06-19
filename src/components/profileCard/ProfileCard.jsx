import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from './ProfileCard.styles'
import { Paper } from '@material-ui/core';
import { fetchProviderInfo } from '../../actions/Actions'
class ProfileCard extends Component {

    componentWillMount() {
       this.props.fetchProviderInfo(this.props.auth)
    }
    render() {
        console.log(this.props)
        return (
            <Paper elevation={4} style={ styles.profileCard }>
                <div id='profileImageContainer'>
                    <div style={styles.profileImageContainer}></div>
                    <h1>Welcome:</h1>
                </div>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        provider: state.provider.providerInfo,
        auth: state.auth.authenticated,
     }
}

export default connect(mapStateToProps, { fetchProviderInfo } )(ProfileCard);