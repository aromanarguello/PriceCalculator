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
        return (
            <Paper elevation={1} style={ styles.profileCard } className="side-exam-view">
                <div id='profileImageContainer'>
                    <div style={styles.profileImageContainer}></div>
                    <h1>Welcome:</h1>
                    <h3>{this.props.provider.providerFirstName +' '+ this.props.provider.providerLastName}</h3>
                </div>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        provider: state.provider,
        auth: state.auth.authenticated,
     }
}

export default connect(mapStateToProps, { fetchProviderInfo } )(ProfileCard);